import React, { useEffect, useState } from "react";
import "./index.scss"; // Import styles if needed

const ProductImageGallery = ({ item, currentlyColor, selectedColor }) => {
  const [selectedImage, setSelectedImage] = useState("");
  const [bigImage, setBigImage] = useState("");
  let valuecurrentlyColor = Object.values(currentlyColor);

  const handleImageClick = (image) => {
    setBigImage(image);
  };

  useEffect(() => {
    if (item.infoProduct.length > 0) {
      let isExist = item.infoProduct.find((product) =>
        valuecurrentlyColor.some(
          (current) =>
            current.color === product.mainImage &&
            current.color === selectedColor.imageColor
        )
      );

      if (isExist) {
        setSelectedImage(isExist.mainImage);
        setBigImage(isExist.mainImage);
      } else {
        setSelectedImage(selectedColor.imageColor);
        setBigImage(selectedColor.imageColor);
      }
    }
  }, [selectedColor]);

  return (
    <div className="row product-image-gallery ">
      <div className="col-2 thumbnail-container">
        {item.infoProduct.length > 0 &&
          (() => {
            let isExist = item.infoProduct.find((product) => {
              return valuecurrentlyColor.some(
                (current) =>
                  current.color === product.mainImage &&
                  current.color === selectedColor.imageColor
              );
            });

            if (isExist) {
              let converUrlImages = JSON.parse(isExist.images);

              let result = converUrlImages.map((image, index) => {
                return (
                  <img
                    key={index}
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className={`thumbnail ${bigImage === image ? "active" : ""}`}
                    onClick={() => handleImageClick(image)}
                  />
                );
              });
              result.unshift(
                <img
                  src={selectedImage}
                  alt={`Thumbnail mainImage`}
                  className={`thumbnail  ${bigImage === isExist.mainImage ? "active" : ""}`}
                  onClick={() => handleImageClick(selectedImage)}
                />
              );

              return result;
            } else {
              let isExist = item.infoProduct.find((product) => {
                return selectedColor.imageColor === product.mainImage;
              });
              if (isExist) {
                let images = JSON.parse(isExist.images);

                let result1 = images.map((image, index) => {
                  return (
                    <img
                      key={index}
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className={`thumbnail ${bigImage === image ? "active" : ""}`}
                      onClick={() => handleImageClick(image)}
                    />
                  );
                });
                result1.unshift(
                  <img
                    src={selectedImage}
                    alt={`Thumbnail mainImage`}
                    className={`thumbnail  ${bigImage === isExist.mainImage ? "active" : ""}`}
                    onClick={() => handleImageClick(selectedImage)}
                  />
                );
                return result1;
              }
            }
          })()}
      </div>
      <div className="col-10 main-image">
        <img src={bigImage} alt="Selected" />
      </div>
    </div>
  );
};

export default ProductImageGallery;
