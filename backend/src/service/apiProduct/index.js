import db from "../../models";
import { cloudinary } from "../../config/Cloundinary/storage";
import { raw } from "body-parser";
import { where } from "sequelize";
const { Op } = require("sequelize");

const uploadImages = (files) => {
  return files.map((file) => {
    return new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          { resource_type: "auto", folder: "Images_Product" },
          (err, result) => {
            if (err) {
              return reject(err);
            }
            resolve(result);
          }
        )
        .end(file.buffer);
    });
  });
};

const uploadMainImage = (file) => {
  return new Promise((resolve, reject) =>
    cloudinary.uploader
      .upload_stream(
        { resource_type: "auto", folder: "Images_Product" },
        (error, result) => {
          if (error) {
            return reject(error);
          }
          resolve(result);
        }
      )
      .end(file.buffer)
  );
};
const createProduct = async (data, mainImage, addImages) => {
  // let result = await files.map((file) => file.path);
  let {
    name,
    price,
    des,
    categoryId,
    sizeId,
    color,
    stock_quantity,
    genderId,
    isbestselling,
    isFeatured,
    isNew,
  } = data;
  // console.log("isbestselling", isbestselling, "isFeatured", isFeatured);
  try {
    let resultProduct = await db.product.findOne({
      where: {
        name: name,
      },
    });

    if (resultProduct) {
      let resultProductVariant = await db.ProductVariant.findOne({
        where: {
          productId: resultProduct.id,
          sizeId: sizeId,
          color: color,
          genderId: genderId,
        },
      });

      if (resultProductVariant) {
        return {
          errCode: 0,
          errMess: "Thông tin sản phẩm đã có",
        };
      } else {
        let colorMatch = await db.ProductVariant.findOne({
          where: {
            productId: resultProduct.id,
            color: color,
          },
        });
        if (colorMatch) {
          await db.ProductVariant.create({
            productId: resultProduct.id,
            sizeId,
            color,
            genderId,
            stock_quantity,
            sold_quantity: 0,
            mainImage: colorMatch.mainImage,
            images: colorMatch.images,
          });
        } else {
          const infoAddImages = await Promise.all(uploadImages(addImages));
          const infoMainImage = await uploadMainImage(mainImage);
          console.log("----------------------------------");
          console.log("upoad image", infoMainImage);
          console.log("----------------------------------");

          let urlImages = infoAddImages.map((file) => file.url);
          // console.log(
          //   "----------------------------------------------------------------"
          // );
          // console.log("nhận ảnh thêm", urlImages);
          // console.log("ảnh chính", infoMainImage);
          // console.log(
          //   "----------------------------------------------------------------"
          // );
          await db.ProductVariant.create({
            productId: resultProduct.id,
            sizeId,
            color,
            genderId,
            stock_quantity,
            sold_quantity: 0,
            mainImage: infoMainImage.url,
            images: JSON.stringify(urlImages),
          });
        }

        return {
          errCode: 0,
          errMess: "Thêm sản phẩm thành công",
        };
      }
    } else {
      let product = await db.product.create({
        name,
        price,
        des,
        categoryId,
        isbestselling,
        isFeatured,
        isNew,
      });
      const infoAddImages = await Promise.all(uploadImages(addImages));
      const infoMainImage = await uploadMainImage(mainImage);
      let urlImages = infoAddImages.map((file) => file.url);
      // console.log(
      //   "----------------------------------------------------------------"
      // );
      // console.log("nhận ảnh thêm", urlImages);
      // console.log("ảnh chính", infoMainImage);
      // console.log(
      //   "----------------------------------------------------------------"
      // );
      await db.ProductVariant.create({
        productId: product.id,
        sizeId,
        color,
        genderId,
        stock_quantity,
        sold_quantity: 0,
        mainImage: infoMainImage.url,
        images: JSON.stringify(urlImages),
      });
      return {
        errCode: 0,
        errMess: "Tạo sản phẩm thành công",
      };
    }
  } catch (err) {
    console.log("Lỗi khi tạo sản phẩm", err);
    return {
      errCode: 1,
      errMess: "Có lỗi.Vui lòng thử lại sau.",
    };
  }
};

const getAllProducts = async () => {
  try {
    let result = await db.product.findAll({
      include: [
        {
          model: db.Category,
          as: "infoCategory",
        },
        {
          model: db.ProductVariant,
          as: "infoProduct",
          include: [
            {
              model: db.Size,
              as: "infoSize",
            },
            {
              model: db.gender,
              as: "infogender",
            },
          ],
          // raw: true,
        },
      ],
      raw: true,
      nest: true,
    });
    // console.log("kết quả", result);
    return {
      errCode: 0,
      errMess: "Lấy dữ liệu thành công",
      data: result,
    };
  } catch (err) {
    console.log("Lỗi lấy tất cả dữ liệu", err);
    return {
      errCode: 1,
      errMess: "Có lỗi.Vui lòng thử lại sau.",
    };
  }
};

const getProductByCategoryGender = async (
  nameCategory,
  gender,
  limit,
  offSet,
  color,
  size
) => {
  try {
    let getFirst = nameCategory.split(" ")[0];
    let listAllProduct = ["Áo Nam", "Áo Nữ", "Quần Nam", "Quần Nữ"];
    let filterColor = color && color.length > 0 && color;
    let filterSize = size && size.length > 0 && size;
    const filterByCategory = listAllProduct.some((i) => i === nameCategory)
      ? {
          name: { [Op.like]: `%${getFirst}%` },
        }
      : { name: nameCategory };

    const genderCondition =
      gender !== "" ? { genderId: gender === "Nam" ? 1 : 2 } : {};

    let colorFilter =
      filterColor &&
      filterColor.map((item) => {
        return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
      });
    if (colorFilter) {
      let result = [...colorFilter];
      // console.log("result nha", result);
      let otherColor = result.some((i) => i === "Khác");
      if (otherColor) {
        colorFilter = {};
      } else {
        colorFilter = {
          color: {
            [Op.in]: result,
          },
        };
      }
    } else {
      colorFilter = {};
    }

    let sizeFilter =
      filterSize &&
      filterSize.map((item) => {
        return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
      });
    if (sizeFilter) {
      let result = [...sizeFilter];

      sizeFilter = {
        name: {
          [Op.in]: result,
        },
      };
    } else {
      sizeFilter = {};
    }
    // console.log("sizeFilter", sizeFilter);
    // let result = await db.product.findAll({
    //   include: [
    //     {
    //       model: db.Category,
    //       as: "infoCategory",
    //       where: filterByCategory,
    //     },
    //     {
    //       model: db.ProductVariant,
    //       as: "infoProduct",
    //       where: {
    //         ...colorFilter,
    //         ...genderCondition,
    //       },

    //       include: [
    //         {
    //           model: db.gender,
    //           as: "infogender",
    //           // where: genderCondition,
    //         },
    //         {
    //           model: db.Size,
    //           as: "infoSize",
    //           where: { name: "S" },
    //         },
    //       ],
    //     },
    //   ],
    //   limit: parseInt(limit),
    //   offset: parseInt(offSet),

    //   nest: true,
    // });

    let products = await db.product.findAll({
      include: [
        {
          model: db.Category,
          as: "infoCategory",
          where: filterByCategory,
        },
      ],
      limit: parseInt(limit),
      offset: parseInt(offSet),

      nest: true,
    });

    let productVariants = await db.ProductVariant.findAll({
      where: {
        ...colorFilter,
        ...genderCondition,
      },
      include: [
        {
          model: db.gender,
          as: "infogender",
        },
        {
          model: db.Size,
          as: "infoSize",
          where: sizeFilter,
        },
      ],
    });

    let result = products.map((product) => {
      let matchingVariants = productVariants.filter(
        (variant) => variant.productId === product.id
      );
      return {
        ...product.toJSON(),
        infoProduct: matchingVariants,
      };
    });
    let filteredResult = result.filter((item) => item.infoProduct.length > 0);

    while (filteredResult.length < 5) {
      offSet += limit;
      let moreProducts = await db.product.findAll({
        include: [
          {
            model: db.Category,
            as: "infoCategory",
            where: filterByCategory,
          },
        ],
        limit: parseInt(limit),
        offset: parseInt(offSet),
        nest: true,
      });

      if (moreProducts.length === 0) break;

      //thêm từng sản phẩm vào filteredResult
      let moreVariants = await db.ProductVariant.findAll({
        where: {
          ...colorFilter,
          ...genderCondition,
        },
        include: [
          {
            model: db.gender,
            as: "infogender",
          },
          {
            model: db.Size,
            as: "infoSize",
            where: sizeFilter,
          },
        ],
      });

      moreProducts.map((product) => {
        let matchingVariants = moreVariants.filter((variant) => {
          return product.id === variant.productId;
        });

        if (
          matchingVariants.length > 0 &&
          !filteredResult.some((item) => item.id === product.id)
        ) {
          filteredResult.push({
            ...product.toJSON(),
            infoProduct: matchingVariants,
          });
        }
      });
    }

    filteredResult.slice(0, 5);
    return {
      errCode: 0,
      errMess: "Lấy sản phẩm theo danh mục thành công",
      data: filteredResult,
    };
  } catch (err) {
    console.log("Lỗi lấy sản phẩm theo danh mục và giới tính", err);
    return {
      errCode: 1,
      errMess: "Có lỗi.Vui lòng thử lại sau",
    };
  }
};

//lấy sản phẩm theo giới tính
const getAllProductsByGender = async (nameCategory, gender, limit, offSet) => {
  try {
    // let getFirst = nameCategory.split(" ")[0];
    let result = await db.product.findAll({
      include: [
        // {
        //   model: db.Category,
        //   as: "infoCategory",
        //   where: {
        //     name: { [Op.like]: `%${getFirst}%` },
        //   },
        // },
        {
          model: db.ProductVariant,
          as: "infoProduct",
          include: [
            {
              model: db.gender,
              as: "infogender",
              where: {
                name: gender,
              },
            },
            {
              model: db.Size,
              as: "infoSize",
            },
          ],
        },
      ],
      limit: parseInt(limit),
      offset: parseInt(offSet),
    });

    // console.log("------------------------------");
    // console.log("kq", result);
    // console.log("------------------------------");

    return {
      errCode: 0,
      errMess: "Lấy tất cả sản phẩm theo giới tính thành công",
      data: result,
    };
  } catch (err) {
    console.log("Lỗi lấy tất cả sản phẩm theo giới tính bên phí BE", err);
    return {
      errCode: 1,
      errMess: "Có lỗi.Vui lòng thử lại sau",
    };
  }
};

const getProductById = async (productId) => {
  try {
    let result = await db.ProductVariant.findOne({
      where: {
        id: productId,
      },
      include: [
        {
          model: db.product,
          as: "infoProduct",
        },
        {
          model: db.Size,
          as: "infoSize",
        },
      ],
    });
    return {
      errCode: 0,
      errMess: "Lấy dữ liệu thành công",
      data: result,
    };
  } catch (err) {
    console.log("Lỗi bên Be lấy tất cả sản phẩm ", err);
    return {
      errCode: 1,
      errMess: "Có lỗi.Vui lòng thử lại sau.",
    };
  }
};

const getAllProductsById = async (productId) => {
  try {
    let result = await db.product.findAll({
      where: {
        id: productId,
      },
      include: [
        {
          model: db.Category,
          as: "infoCategory",
        },
        {
          model: db.ProductVariant,
          as: "infoProduct",
          include: [
            {
              model: db.Size,
              as: "infoSize",
            },
            {
              model: db.gender,
              as: "infogender",
            },
          ],
          // raw: true,
        },
      ],

      raw: true,
      nest: true,
    });
    // console.log("kết quả", result);
    return {
      errCode: 0,
      errMess: "Lấy dữ liệu thành công",
      data: result,
    };
  } catch (err) {
    console.log("Lỗi lấy tất cả dữ liệu theo id", err);
    return {
      errCode: 1,
      errMess: "Có lỗi.Vui lòng thử lại sau.",
    };
  }
};

const updateproductVariants = async (data) => {
  let { id, stock_quantity, mainImage, images, color } = data;
  try {
    let data = await db.ProductVariant.findOne({
      where: {
        id: id,
      },
    });
    data.id = id;
    data.stock_quantity = stock_quantity;
    data.mainImage = mainImage;
    data.images = JSON.stringify(images);
    data.color = color;
    await data.save();
    return {
      errCode: 0,
      errMess: "Cập nhật thông tin sản phẩm thành công",
    };
  } catch (err) {
    console.log("có lỗi khi cập nhật thuộc tính sản phẩm bên be", err);
    return {
      errCode: 1,
      errMess: "Có lỗi.Vui lòng thử lại sau.",
    };
  }
};

//lấy tất cả sản phẩm mới

const getAllNewProducts = async (offset, limit, chia, colors, sizes) => {
  console.log("size", sizes);

  let convertSizes =
    sizes && sizes.length > 0
      ? {
          name: {
            [Op.in]: sizes.map((size) => size.toUpperCase()),
          },
        }
      : {};

  let covertColors =
    colors && colors.length > 0
      ? colors.some((color) => color === "khác")
        ? {}
        : {
            color: {
              [Op.in]: colors.map(
                (color) => color.charAt(0).toUpperCase() + color.slice(1)
              ),
            },
          }
      : {};

  try {
    let products = await db.product.findAll({
      where: {
        isNew: 1,
      },
      include: [
        {
          model: db.Category,
          as: "infoCategory",
        },
      ],
      offset: parseInt(offset),
      limit: parseInt(limit),
      raw: !chia ? false : true,
      nest: true,
    });

    let productVariants = await db.ProductVariant.findAll({
      where: {
        ...covertColors,
      },
      include: [
        {
          model: db.gender,
          as: "infogender",
        },
        {
          model: db.Size,
          as: "infoSize",
          where: {
            ...convertSizes,
          },
        },
      ],
      raw: true,
      nest: true,
    });

    let result = products.map((product) => {
      let matchingVariants = productVariants.filter((variant) => {
        return variant.productId === product.id;
      });
      return {
        ...product,
        infoProduct: matchingVariants,
      };
    });

    result = result.filter((item) => item.infoProduct.length > 0);

    let filteredProducts = [...result];
    console.log("nhan", filteredProducts);

    while (filteredProducts.length < 5) {
      offset += limit;
      let moreproducts = await db.product.findAll({
        where: {
          isNew: 1,
        },
        include: [
          {
            model: db.Category,
            as: "infoCategory",
          },
        ],
        offset: parseInt(offset) + filteredProducts.length,
        limit: parseInt(limit),
        raw: !chia ? false : true,
        nest: true,
      });

      if (moreproducts.length === 0) break;

      let moreproductVariants = await db.ProductVariant.findAll({
        where: {
          ...covertColors,
        },
        include: [
          {
            model: db.gender,
            as: "infogender",
          },
          {
            model: db.Size,
            as: "infoSize",
            where: {
              ...convertSizes,
            },
          },
        ],
        raw: true,
        nest: true,
      });

      let resultfilter = moreproducts.map((product) => {
        let matchingVariants = moreproductVariants.filter((productVariant) => {
          return product.id === productVariant.productId;
        });

        return {
          ...product,
          infoProduct: matchingVariants,
        };
      });
      let kq = resultfilter.filter((item) => item.infoProduct.length > 0);

      filteredProducts.push(
        ...kq.filter(
          (item) => !filteredProducts.some((item1) => item.id === item1.id)
        )
      );
    }
    filteredProducts.slice(0, 5);
    return {
      errCode: 0,
      errMess: "Lấy dữ liệu tất cả sản phẩm mới thành công",
      data: filteredProducts,
    };
  } catch (err) {
    console.log("Lỗi lấy tất cả sản phẩm mới", err);
    return {
      errCode: 1,
      errMess: "Có lỗi.Vui lòng thử lại sau.",
    };
  }
};

//xóa sản phẩm
const deleteProduct = async (id, productId) => {
  try {
    let result = await db.ProductVariant.findOne({
      where: {
        id: id,
      },
    });
    let count = await db.ProductVariant.count({
      where: {
        productId: productId,
      },
    });
    if (count === 1) {
      let product = await db.product.findOne({
        where: {
          id: productId,
        },
      });
      await product.destroy();
      await result.destroy();
      return {
        errCode: 0,
        errMess: "Xóa sản phẩm thành công",
      };
    } else {
      await result.destroy();
      return {
        errCode: 0,
        errMess: "Xóa sản phẩm thành công",
      };
    }
  } catch (err) {
    console.log("Có lỗi khi xóa sản phẩm", err);
    return {
      errCode: 1,
      errMess: "Có lỗi",
    };
  }
};
module.exports = {
  createProduct,
  getAllProducts,
  getProductByCategoryGender,
  getAllProductsByGender,
  getProductById,
  getAllProductsById,
  updateproductVariants,
  getAllNewProducts,
  deleteProduct,
};
