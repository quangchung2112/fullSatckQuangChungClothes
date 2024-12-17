export const formatPrice = (price) => {
  return `${price?.toLocaleString("vi-VN")} VND`; // Định dạng và thêm "VND"
};

export const converName = (name) => {
  let arrName = name.trim().split(" ");
  let result = arrName.map((item) => {
    return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
  });
  return result.join(" ");
};
