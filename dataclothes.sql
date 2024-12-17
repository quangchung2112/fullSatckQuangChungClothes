-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 17, 2024 lúc 03:40 PM
-- Phiên bản máy phục vụ: 10.4.32-MariaDB
-- Phiên bản PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `dataclothes`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `accountmanagements`
--

CREATE TABLE `accountmanagements` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `roleId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `accountmanagements`
--

INSERT INTO `accountmanagements` (`id`, `email`, `password`, `roleId`, `createdAt`, `updatedAt`) VALUES
(1, 'quangchung02@gmail.com', 'quangchung02', 1, '2024-12-01 17:44:50', '2024-12-01 17:44:50'),
(2, 'khachhang1@gmail.com', 'khachhang1', 2, '2024-12-01 17:47:04', '2024-12-01 17:47:04');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `categories`
--

INSERT INTO `categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(6, 'Áo Thun', '2024-11-05 19:18:24', '2024-11-05 19:18:24'),
(7, 'Áo Sơ Mi', '2024-11-05 19:18:35', '2024-11-05 19:18:35'),
(8, 'Áo Polo', '2024-11-05 19:18:42', '2024-11-05 19:18:42'),
(9, 'Áo Khoác', '2024-11-22 17:53:53', '2024-11-22 17:53:53'),
(10, 'Áo Giữ Nhiệt', '2024-11-25 15:08:13', '2024-11-25 15:08:13'),
(11, 'Quần Jeans', '2024-11-25 17:49:37', '2024-11-25 17:49:37'),
(12, 'Quần Dài', '2024-11-25 19:20:35', '2024-11-25 19:20:35'),
(13, 'Quần Kaki', '2024-11-25 19:25:07', '2024-11-25 19:25:07'),
(16, 'Quần Đùi', '2024-12-10 14:21:37', '2024-12-13 03:50:17');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `colors`
--

CREATE TABLE `colors` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `hex` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `colors`
--

INSERT INTO `colors` (`id`, `name`, `hex`, `createdAt`, `updatedAt`) VALUES
(7, 'Trắng', '#e9e8ed', '2024-11-04 17:02:38', '2024-11-04 17:02:38'),
(8, 'Đen', '#000000', '2024-11-04 17:29:32', '2024-11-04 17:29:32'),
(11, 'Đỏ', '#FF0000', '2024-11-04 17:32:34', '2024-11-04 17:32:34'),
(12, 'Hồng', '#FFC0CB', '2024-11-04 17:32:59', '2024-11-04 17:32:59'),
(13, 'Rêu', '', '2024-11-09 17:15:23', '2024-11-09 17:15:23'),
(15, 'Xanh Cổ  Vịt', '', '2024-11-09 17:19:46', '2024-11-09 17:19:46'),
(16, 'Xám', '', '2024-11-09 17:20:04', '2024-11-09 17:20:04'),
(17, 'Xanh Trời', '', '2024-11-21 18:56:51', '2024-11-21 18:56:51'),
(18, 'Be', '', '2024-11-21 19:01:22', '2024-11-21 19:01:22'),
(19, 'Ghi', '', '2024-11-21 19:04:14', '2024-11-21 19:04:14'),
(20, 'Xanh Ngọc', '', '2024-11-21 19:05:55', '2024-11-21 19:05:55'),
(21, 'Xanh Lam', '', '2024-11-21 19:06:07', '2024-11-21 19:06:07'),
(22, 'Xanh', '', '2024-11-21 19:09:25', '2024-11-21 19:09:25');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `genders`
--

CREATE TABLE `genders` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `genders`
--

INSERT INTO `genders` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Nam', '2024-11-08 06:47:11', '2024-11-08 06:47:11'),
(2, 'Nữ', '2024-11-08 06:47:11', '2024-11-08 06:47:11');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orderitems`
--

CREATE TABLE `orderitems` (
  `id` int(11) NOT NULL,
  `orderId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `orderitems`
--

INSERT INTO `orderitems` (`id`, `orderId`, `productId`, `name`, `quantity`, `price`, `createdAt`, `updatedAt`) VALUES
(23, 33, 69, 'Áo Phao Nam Trần Trám Nẹp Giấu Khoá', 1, 664050, '2024-12-13 15:55:33', '2024-12-13 15:55:33'),
(24, 34, 99, 'Quần Jean Nữ Skinny Mài Rách Gối', 1, 474050, '2024-12-13 16:02:00', '2024-12-13 16:02:00'),
(25, 35, 72, 'Áo Phao Nam Trần Trám Nẹp Giấu Khoá', 1, 664050, '2024-12-13 16:44:10', '2024-12-13 16:44:10');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `customerName` varchar(255) NOT NULL,
  `customerPhone` varchar(255) NOT NULL,
  `customerEmail` varchar(255) DEFAULT NULL,
  `customerAddress` varchar(255) NOT NULL,
  `orderId` varchar(255) NOT NULL,
  `paymentStatus` enum('pending','completed','failed') NOT NULL DEFAULT 'pending',
  `totalAmount` decimal(10,0) NOT NULL,
  `paymentMethod` enum('chuyển khoản','thanh toán khi nhận hàng') NOT NULL DEFAULT 'chuyển khoản',
  `orderStatus` enum('pending','completed','failed') NOT NULL DEFAULT 'pending',
  `note` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `orders`
--

INSERT INTO `orders` (`id`, `customerName`, `customerPhone`, `customerEmail`, `customerAddress`, `orderId`, `paymentStatus`, `totalAmount`, `paymentMethod`, `orderStatus`, `note`, `createdAt`, `updatedAt`) VALUES
(33, 'Nguyễn Văn A', '0983256159', '', 'Xóm 6Thị trấn An PhúHuyện An PhúTỉnh An Giang', '11f8052a-0dd5-471e-b923-b3bfe971f43b', 'pending', 664050, 'thanh toán khi nhận hàng', 'pending', NULL, '2024-12-13 15:55:33', '2024-12-13 15:55:33'),
(34, 'Nguyễn Thị A', '0985478235', '', 'Xóm 1Xã Tống PhanHuyện Phù CừTỉnh Hưng Yên', '5b8921c2-44df-4a0a-8470-befddb88c88b', 'pending', 474050, 'chuyển khoản', 'pending', NULL, '2024-12-13 16:02:00', '2024-12-13 16:02:00'),
(35, 'Nguyễn Văn B', '012345789', '', 'Xóm 10Xã Hoà LongThành phố Bà RịaTỉnh Bà Rịa - Vũng Tàu', '5ff36739-9f95-4ac9-8155-4a177ee614d6', 'pending', 664050, 'chuyển khoản', 'pending', NULL, '2024-12-13 16:44:10', '2024-12-13 16:44:10');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` float NOT NULL,
  `des` text NOT NULL,
  `categoryId` int(11) NOT NULL,
  `isbestselling` tinyint(1) NOT NULL DEFAULT 0,
  `isFeatured` tinyint(1) NOT NULL DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `isNew` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `des`, `categoryId`, `isbestselling`, `isFeatured`, `createdAt`, `updatedAt`, `isNew`) VALUES
(17, 'T-shirt Oversize Athletic Mind', 284050, 'Áo thun Oversize trẻ trung, năng động, hiện đại. Thành phần vải 100% Cotton thân thiện với làn da, thông thoáng và thấm hút mồ hôi tốt. Áo vừa mềm mại, vừa dày dặn, đứng form. Thiết kế hình in ấn tượng, cá tính mỗi khi lên đồ.', 6, 1, 0, '2024-11-22 05:10:10', '2024-11-22 05:10:10', 1),
(18, 'Áo Thun Thể Thao Nam Can Lưng In Lỗ', 99500, 'Chất liệu cao cấp, mềm mại, thoáng mát. Thấm hút mồ hôi tốt, giúp bạn luôn khô ráo và thoải mái khi vận động. Co giãn tốt, giúp bạn dễ dàng vận động. Thiết kế thời trang, năng động. Phù hợp cho nhiều hoạt động thể thao: gym, chạy bộ, chơi bóng rổ,...', 6, 0, 1, '2024-11-22 05:17:56', '2024-11-22 05:17:56', 1),
(19, 'Sơ Mi Dài Tay Nam Ly Chiết', 149000, 'Áo sơ mi nam được dệt từ sợi vải Bamboo tạo nên cấu trúc sợi vải bền vững. Áo có khả năng điều hòa thân nhiệt, chống nhăn tự nhiên nhờ chất vải mang đặc tính mát mẻ khi chạm vào. Form dáng quen thuộc, đường may tỉ mỉ, dễ mặc, dễ phối đồ.', 7, 1, 1, '2024-11-22 05:25:13', '2024-11-22 05:25:13', 0),
(21, 'Sơ Mi Dài Tay Nam Cafe', 149000, 'Áo sơ mi nam vải cafe không chỉ là lựa chọn hoàn hảo cho ngày làm việc mà còn là điểm nhấn thời trang đầy phong cách. Chất liệu vải cafe mềm mại với màu sắc trang nhã. Thiết kế dài tay có thể mặc mọi mùa và tạo điểm nhấn trong bất kỳ sự kiện nào.', 7, 0, 1, '2024-11-22 05:30:30', '2024-11-22 05:30:30', 0),
(22, 'Áo Phao Nam Trần Trám Nẹp Giấu Khoá', 664050, 'Trang bị cho mùa đông lạnh giá một chiếc áo phao ưu việt: Áo Phao Nam Trần Trám Nẹp Giấu Khoá.\r\nChiếc áo có trọng lượng nhẹ, khả năng giữ ấm tốt cùng thiết kế hiện đại. \r\nThiết kế trần trám bền đẹp theo thời gian, không sợ lỗi mốt\r\nKhoá kéo YKK - loại khoá hàng đầu thế giới, bền chắc, trơn tru trong quá trình sử dụng.', 9, 0, 0, '2024-11-22 18:21:29', '2024-11-22 18:21:29', 1),
(23, 'T-shirt Nữ Dáng Suông', 129000, 'Mặc đẹp, sống xanh cùng áo thun nữ dáng suông, thiết kế thời trang thoải mái phù hợp với mọi hoạt động. Chất liệu mềm mại, co giãn, thấm hút tốt. Sản phẩm thân thiện môi trường, hoàn hảo cho làn da nhạy cảm. Sự lựa chọn cho nàng yêu thích phong cách đơn giản nhưng vẫn thời thượng.', 6, 0, 0, '2024-11-22 18:31:20', '2024-11-22 18:31:20', 1),
(24, 'Phao Vip Nữ Lông Vũ Tay Raglan Có Mũ', 1234050, 'Sưởi ấm cả mùa đông với áo phao nữ VIP lông vũ. Thiết kế tay raglan năng động, phù hợp nhiều dáng người. Chất liệu cao cấp chống gió, hạn chế bẩn. Lông vũ tự nhiên 80/20 Duck Down giữ ấm tuyệt vời.', 9, 0, 0, '2024-11-22 21:04:14', '2024-11-22 21:04:14', 1),
(25, 'Áo Giữ Nhiệt Nữ Xtra - Heat™ Cổ 3cm', 217550, 'Chất liệu XTRA - HEAT™ có khả năng giữ ấm vượt trội, đặc biệt sợi acrylic với khả năng chịu nhiệt tốt, hạn chế tĩnh điện, độ bền cao, độ sáng bóng và màu sắc sắc nét.\r\nBề mặt xoa lông mềm mại và có độ dày vừa phải mang lại sự thoải mái nhưng ko kém phần ấm áp \r\nDáng áo ôm nhẹ tôn lên đường nét của cơ thể tạo vẻ ngoài gọn gàng và thanh lịch. \r\nCổ cao giúp giữ ấm phần cổ, rất hữu ích trong việc layering, hoặc có thể mặc đơn lẻ để tạo nên một tuyên bố thời trang. \r\nThiết kế tối giản mà chiếc áo mang lại phù hợp với xu hướng hiện đại, dễ dàng phối đồ và không bao giờ lỗi mốt.', 10, 0, 0, '2024-11-25 15:16:21', '2024-11-25 15:16:21', 1),
(26, 'Áo Thun Đông Nam Giữ Nhiệt Cổ 3cm', 199000, 'Được biết đến là sáng tạo tuyệt vời của ngành dệt may - sợi tái sinh có nguồn gốc từ Bamboo/ Tre ngày càng trở nên phổ biến. Chiếc áo này, với sự kết hợp của Bamboo và Spandex giúp vải sở hữu các tính năng ưu việt như mềm mại, thoáng, thấm hút tốt, co giãn hiệu quả, độ bền cao.', 10, 0, 0, '2024-11-25 15:23:39', '2024-11-25 15:23:39', 1),
(27, 'Quần Jean Nữ Skinny Mài Rách Gối', 474050, 'Thiết kế thời thượng, rách gối ấn tượng. Chất liệu denim cao cấp, mềm mịn, co giãn nhẹ, kết hợp hoàn hảo giữa cotton tự nhiên và spandex tạo nên sản phẩm bền đẹp, thoải mái.', 11, 0, 0, '2024-11-25 17:52:10', '2024-11-25 17:52:10', 0),
(28, 'Quần Jean Nam Slim Fit Wash Vintage', 569050, 'Một chiếc quần jeans nam có tính ứng dụng cao. Vải được làm từ bông tự nhiên nên mang đầy đủ tính chất đặc trưng của bông như mềm mại, thông thoáng, có độ bền cao, thấm hút tốt, an toàn với người sử dụng. Quần co giãn nhẹ do chứa thành phần spandex, giúp người mặc thoải mái khi vận động. Sợi ngang chứa thành phần polyester giúp tăng độ bền cho sản phẩm, đồng thời sợi trơn bóng, nằm ở mặt trái của vải nên khi tiếp xúc với da sẽ làm cho người mặc thoải mái hơn.', 11, 0, 0, '2024-11-25 17:57:26', '2024-11-25 17:57:26', 1),
(29, 'Quần Gió Dài Yoguu Phối Viền Phản Quang', 384300, 'Quần gió YOGUU vải nhăn tự nhiên, mềm mại tạo cảm giác thoải mái tối đa. Nhẹ tênh, bền màu, định hình form dáng tốt mang đến vẻ ngoài thời trang. Thiết kế hiện đại, phối viền phản quang cá tính. Phù hợp với nhiều phong cách từ thể thao đến dạo phố. Giặt máy tiện lợi.', 12, 0, 0, '2024-11-25 19:22:14', '2024-11-25 19:22:14', 0),
(30, 'Quần Kaki Nam Cạp Chun Ốp Khóa Sườn', 474050, 'Quần kaki nam phong cách, chất liệu kaki polyester cao cấp, bền màu, hạn chế nhăn. Lót túi cotton thoáng mát. Thiết kế cạp chun, khóa sườn tiện lợi. Form dáng chuẩn, mang lại cảm giác thoải mái.', 13, 0, 0, '2024-11-25 19:26:35', '2024-11-25 19:26:35', 0),
(31, 'Quần Kaki Nam Cạp Di Động', 249500, 'Kiểu dáng cạp di động thời trang, form chuẩn đẹp. Chất liệu Khaki cotton cao cấp, thành phần cotton cao giúp quần thông thoáng, dễ chịu khi mặc. Vải đanh chắc giữ phom lâu dài nhưng vẫn mềm mại, không thô cứng, không bị nhăn nhúm hay bai dão. Vải được dệt theo kết cấu đặc biệt, đảm bảo độ bền cao.', 13, 0, 0, '2024-11-25 19:28:55', '2024-11-25 19:28:55', 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `productvariants`
--

CREATE TABLE `productvariants` (
  `id` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `sizeId` int(11) NOT NULL,
  `color` varchar(255) NOT NULL,
  `genderId` int(11) NOT NULL,
  `images` text NOT NULL,
  `mainImage` text NOT NULL,
  `stock_quantity` int(11) NOT NULL,
  `sold_quantity` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `productvariants`
--

INSERT INTO `productvariants` (`id`, `productId`, `sizeId`, `color`, `genderId`, `images`, `mainImage`, `stock_quantity`, `sold_quantity`, `createdAt`, `updatedAt`) VALUES
(58, 17, 1, 'Xanh Cổ Vịt', 1, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732252211/Images_Product/bvielrdyykbaaqopco0p.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732252211/Images_Product/nvpfkkuaiu1zabe4annf.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732252211/Images_Product/hdmldfhe3v9mqgzwh996.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732252211/Images_Product/mzw4udmpmegynpdrsnmm.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732252212/Images_Product/zadoe238nsouivmqcpiy.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732252211/Images_Product/b5jbggjf28ftrxxokxku.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1734057163/Images_Product/xynazaulcykyac3fupm4.webp', 19, 1, '2024-11-22 05:10:14', '2024-12-13 03:55:57'),
(59, 17, 2, 'Xanh Cổ Vịt', 1, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732252211/Images_Product/bvielrdyykbaaqopco0p.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732252211/Images_Product/nvpfkkuaiu1zabe4annf.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732252211/Images_Product/hdmldfhe3v9mqgzwh996.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732252211/Images_Product/mzw4udmpmegynpdrsnmm.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732252212/Images_Product/zadoe238nsouivmqcpiy.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732252211/Images_Product/b5jbggjf28ftrxxokxku.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732252213/Images_Product/sxgdki7eidtawkoveu7v.webp', 12, 0, '2024-11-22 05:10:25', '2024-11-22 05:10:25'),
(60, 17, 3, 'Xanh Cổ Vịt', 1, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732252211/Images_Product/bvielrdyykbaaqopco0p.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732252211/Images_Product/nvpfkkuaiu1zabe4annf.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732252211/Images_Product/hdmldfhe3v9mqgzwh996.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732252211/Images_Product/mzw4udmpmegynpdrsnmm.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732252212/Images_Product/zadoe238nsouivmqcpiy.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732252211/Images_Product/b5jbggjf28ftrxxokxku.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732252213/Images_Product/sxgdki7eidtawkoveu7v.webp', 12, 0, '2024-11-22 05:10:32', '2024-11-22 05:10:32'),
(61, 17, 4, 'Xanh Cổ Vịt', 1, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732252211/Images_Product/bvielrdyykbaaqopco0p.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732252211/Images_Product/nvpfkkuaiu1zabe4annf.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732252211/Images_Product/hdmldfhe3v9mqgzwh996.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732252211/Images_Product/mzw4udmpmegynpdrsnmm.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732252212/Images_Product/zadoe238nsouivmqcpiy.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732252211/Images_Product/b5jbggjf28ftrxxokxku.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732252213/Images_Product/sxgdki7eidtawkoveu7v.webp', 12, 0, '2024-11-22 05:11:01', '2024-11-22 05:11:01'),
(62, 18, 1, 'Xanh Ghi', 1, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732252677/Images_Product/zc9bxs5prt7nsiifglfp.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732252677/Images_Product/ksw7yop93y8hlqexb7qn.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732252678/Images_Product/x6j81dcl6ahhgr0z0lbm.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732252678/Images_Product/cdkujv19b9m58bv4lb6l.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732252678/Images_Product/gzk7p6rfoych50hqxjhs.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732252679/Images_Product/rsjfe9i1vwkxq0anlzbm.webp', 10, 0, '2024-11-22 05:18:00', '2024-11-22 05:18:00'),
(63, 18, 2, 'Xanh Ghi', 1, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732252677/Images_Product/zc9bxs5prt7nsiifglfp.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732252677/Images_Product/ksw7yop93y8hlqexb7qn.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732252678/Images_Product/x6j81dcl6ahhgr0z0lbm.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732252678/Images_Product/cdkujv19b9m58bv4lb6l.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732252678/Images_Product/gzk7p6rfoych50hqxjhs.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732252679/Images_Product/rsjfe9i1vwkxq0anlzbm.webp', 10, 0, '2024-11-22 05:18:06', '2024-11-22 05:18:06'),
(64, 19, 1, 'Xanh Lơ', 1, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732253114/Images_Product/tso7tpq822z2hlhhg6hp.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732253114/Images_Product/hgddwf5igtiiqkon8zqo.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732253114/Images_Product/aawf8hp5vlsj4m0bkoop.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732253114/Images_Product/uhymfqbdrakir2og1ncx.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732253114/Images_Product/m7lnhpn3vnjrmrsdwcuv.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732253114/Images_Product/ewzqc5ybuoiplutv71wl.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732253115/Images_Product/frmrde0wuzzlnv8udkju.webp', 10, 0, '2024-11-22 05:25:16', '2024-11-22 05:25:16'),
(65, 19, 2, 'Xanh Lơ', 1, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732253114/Images_Product/tso7tpq822z2hlhhg6hp.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732253114/Images_Product/hgddwf5igtiiqkon8zqo.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732253114/Images_Product/aawf8hp5vlsj4m0bkoop.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732253114/Images_Product/uhymfqbdrakir2og1ncx.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732253114/Images_Product/m7lnhpn3vnjrmrsdwcuv.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732253114/Images_Product/ewzqc5ybuoiplutv71wl.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732253115/Images_Product/frmrde0wuzzlnv8udkju.webp', 10, 0, '2024-11-22 05:25:23', '2024-11-22 05:25:23'),
(66, 19, 3, 'Xanh Lơ', 1, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732253114/Images_Product/tso7tpq822z2hlhhg6hp.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732253114/Images_Product/hgddwf5igtiiqkon8zqo.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732253114/Images_Product/aawf8hp5vlsj4m0bkoop.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732253114/Images_Product/uhymfqbdrakir2og1ncx.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732253114/Images_Product/m7lnhpn3vnjrmrsdwcuv.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732253114/Images_Product/ewzqc5ybuoiplutv71wl.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732253115/Images_Product/frmrde0wuzzlnv8udkju.webp', 10, 0, '2024-11-22 05:25:28', '2024-11-22 05:25:28'),
(68, 21, 1, 'Hồng', 1, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732253431/Images_Product/ztwaizehk07ybbajglpa.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732253431/Images_Product/mzmnt5kzgypsqn48284y.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732253431/Images_Product/gbduxoyx14fhnato3di7.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732253431/Images_Product/m9vswtrtvzqxrqqmabs4.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732253431/Images_Product/kls3buetqsnmp5gqk3xn.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732253431/Images_Product/euwrfemcsteupjov6l1t.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732253432/Images_Product/mqq7mgncesb9uqeolqpb.webp', 12, 0, '2024-11-22 05:30:33', '2024-11-22 05:30:33'),
(69, 22, 1, 'Rêu', 1, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732299689/Images_Product/ctqnoyuvg8nrvu8fpz3x.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732299689/Images_Product/ukekqjjcdu9cgzk02ur4.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732299691/Images_Product/qxyolcysn6tvdfo5hdkc.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732299689/Images_Product/u2jugm8zeleegxsblz76.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732299693/Images_Product/scoapbbhzftzaccpvbeu.webp', 5, 5, '2024-11-22 18:21:35', '2024-12-13 15:55:33'),
(70, 23, 1, 'Đen', 2, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732300281/Images_Product/o1lv0besbumitutgook4.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732300280/Images_Product/j9q9a9u1owauxgewd20s.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732300280/Images_Product/cuhavqd8gcal9crswjge.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732300282/Images_Product/vgdf5b9hsj7nxmi3uksr.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732300285/Images_Product/qfmz499eeeu1a8dszy29.webp', 3, 7, '2024-11-22 18:31:26', '2024-12-13 03:57:11'),
(72, 22, 1, 'Cát Cháy', 1, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732302775/Images_Product/jhyn0o8uhm2qllxxvj27.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732302775/Images_Product/ayvrlie6d5r9a8e4ypdo.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732302775/Images_Product/g6rlumgqy2krohpd4sg1.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732302775/Images_Product/jx9uivevrj9inbofeqyw.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732302775/Images_Product/ymfg4tpjmp085qg28ufa.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732302776/Images_Product/jqqvkjhl62dzqtt5obtm.webp', 8, 2, '2024-11-22 19:12:58', '2024-12-13 16:44:10'),
(73, 22, 2, 'Cát Cháy', 1, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732302775/Images_Product/jhyn0o8uhm2qllxxvj27.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732302775/Images_Product/ayvrlie6d5r9a8e4ypdo.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732302775/Images_Product/g6rlumgqy2krohpd4sg1.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732302775/Images_Product/jx9uivevrj9inbofeqyw.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732302775/Images_Product/ymfg4tpjmp085qg28ufa.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732302776/Images_Product/jqqvkjhl62dzqtt5obtm.webp', 11, 1, '2024-11-22 19:54:31', '2024-12-05 05:44:45'),
(74, 24, 1, 'Tím Than', 2, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732309454/Images_Product/wzoo6xhowmc3j5gnsytc.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732309454/Images_Product/b1rvxuq0rwc3cv5noffs.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732309456/Images_Product/vo3e7f81plyiessic72g.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732309454/Images_Product/ctbsche3exnyrr1jcfvc.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732309454/Images_Product/otbxhe1t0y5hozhstnc1.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732309454/Images_Product/hkasob4p7yi3bozyhgwp.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732309458/Images_Product/docar7mkqiegkxuyvcy5.webp', 12, 0, '2024-11-22 21:04:20', '2024-11-22 21:04:20'),
(75, 24, 2, 'Tím Than', 2, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732309454/Images_Product/wzoo6xhowmc3j5gnsytc.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732309454/Images_Product/b1rvxuq0rwc3cv5noffs.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732309456/Images_Product/vo3e7f81plyiessic72g.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732309454/Images_Product/ctbsche3exnyrr1jcfvc.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732309454/Images_Product/otbxhe1t0y5hozhstnc1.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732309454/Images_Product/hkasob4p7yi3bozyhgwp.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732309458/Images_Product/docar7mkqiegkxuyvcy5.webp', 12, 0, '2024-11-22 21:04:29', '2024-11-22 21:04:29'),
(76, 24, 3, 'Tím Than', 2, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732309454/Images_Product/wzoo6xhowmc3j5gnsytc.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732309454/Images_Product/b1rvxuq0rwc3cv5noffs.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732309456/Images_Product/vo3e7f81plyiessic72g.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732309454/Images_Product/ctbsche3exnyrr1jcfvc.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732309454/Images_Product/otbxhe1t0y5hozhstnc1.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732309454/Images_Product/hkasob4p7yi3bozyhgwp.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732309458/Images_Product/docar7mkqiegkxuyvcy5.webp', 12, 0, '2024-11-22 21:04:34', '2024-11-22 21:04:34'),
(77, 24, 4, 'Tím Than', 2, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732309454/Images_Product/wzoo6xhowmc3j5gnsytc.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732309454/Images_Product/b1rvxuq0rwc3cv5noffs.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732309456/Images_Product/vo3e7f81plyiessic72g.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732309454/Images_Product/ctbsche3exnyrr1jcfvc.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732309454/Images_Product/otbxhe1t0y5hozhstnc1.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732309454/Images_Product/hkasob4p7yi3bozyhgwp.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732309458/Images_Product/docar7mkqiegkxuyvcy5.webp', 12, 0, '2024-11-22 21:04:38', '2024-11-22 21:04:38'),
(78, 24, 4, 'Trắng', 2, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732309541/Images_Product/p9wsdbk1v09dnm8hz5dr.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732309541/Images_Product/mwb7gdcpyokyh81olcmq.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732309541/Images_Product/y8kebblvzdibbb1bfcrf.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732309541/Images_Product/ir4o8bgsbwqfviphi9du.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732309541/Images_Product/xli7jvcb6cikylh7wbzr.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732309541/Images_Product/r2auwejgrojhcmioi325.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732309542/Images_Product/iszdpmf3zblhvnvrkwud.webp', 11, 1, '2024-11-22 21:05:45', '2024-12-03 17:50:20'),
(79, 24, 2, 'Trắng', 2, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732309541/Images_Product/p9wsdbk1v09dnm8hz5dr.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732309541/Images_Product/mwb7gdcpyokyh81olcmq.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732309541/Images_Product/y8kebblvzdibbb1bfcrf.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732309541/Images_Product/ir4o8bgsbwqfviphi9du.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732309541/Images_Product/xli7jvcb6cikylh7wbzr.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732309541/Images_Product/r2auwejgrojhcmioi325.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732309542/Images_Product/iszdpmf3zblhvnvrkwud.webp', 12, 0, '2024-11-22 21:05:50', '2024-11-22 21:05:50'),
(80, 24, 2, 'Nâu', 2, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732309651/Images_Product/dt5g3pxohvtybwbu5ddt.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732309650/Images_Product/dprip2h4mjcdetr1jqex.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732309653/Images_Product/qwu1xt3son3vsnloaqmg.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732309650/Images_Product/nhou7slejtcjx0ithwtv.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732309651/Images_Product/yvnibf86pcb5jbng2o3t.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732309654/Images_Product/mwtjwyg4yovkqwltcnoe.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732309656/Images_Product/stqhhpe0djk8arnvqhob.webp', 12, 0, '2024-11-22 21:07:38', '2024-11-22 21:07:38'),
(81, 25, 1, 'Đen', 2, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732547786/Images_Product/rpi7zsto1jg7htjnfkw8.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732547783/Images_Product/xpoyep6a45moas6priqa.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732547786/Images_Product/rcvcvobsnsll88aykbeq.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732547786/Images_Product/yiil5izms2eztgfhg5tw.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732547783/Images_Product/sxk0czqmxfuagbsdqsrc.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732547784/Images_Product/ge7c8uqgqdo1aldjlrzl.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732547788/Images_Product/f8mm8fuiajgae0vqp9sj.webp', 10, 0, '2024-11-25 15:16:29', '2024-11-25 15:16:29'),
(82, 25, 2, 'Đen', 2, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732547786/Images_Product/rpi7zsto1jg7htjnfkw8.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732547783/Images_Product/xpoyep6a45moas6priqa.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732547786/Images_Product/rcvcvobsnsll88aykbeq.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732547786/Images_Product/yiil5izms2eztgfhg5tw.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732547783/Images_Product/sxk0czqmxfuagbsdqsrc.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732547784/Images_Product/ge7c8uqgqdo1aldjlrzl.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732547788/Images_Product/f8mm8fuiajgae0vqp9sj.webp', 10, 0, '2024-11-25 15:16:42', '2024-11-25 15:16:42'),
(83, 25, 3, 'Đen', 2, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732547786/Images_Product/rpi7zsto1jg7htjnfkw8.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732547783/Images_Product/xpoyep6a45moas6priqa.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732547786/Images_Product/rcvcvobsnsll88aykbeq.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732547786/Images_Product/yiil5izms2eztgfhg5tw.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732547783/Images_Product/sxk0czqmxfuagbsdqsrc.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732547784/Images_Product/ge7c8uqgqdo1aldjlrzl.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732547788/Images_Product/f8mm8fuiajgae0vqp9sj.webp', 10, 0, '2024-11-25 15:16:47', '2024-11-25 15:16:47'),
(84, 25, 1, 'Trắng', 2, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548004/Images_Product/a4kejcck66mj2fkixv5e.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548004/Images_Product/dd7su5p5ckdralafwo4x.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548004/Images_Product/sn97yk0w1tu05n8bg5hp.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548003/Images_Product/lshj75acghypfhshfkmv.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548005/Images_Product/pjumfhjfv3uebgviue1i.webp', 10, 0, '2024-11-25 15:20:07', '2024-11-25 15:20:07'),
(85, 25, 2, 'Trắng', 2, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548004/Images_Product/a4kejcck66mj2fkixv5e.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548004/Images_Product/dd7su5p5ckdralafwo4x.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548004/Images_Product/sn97yk0w1tu05n8bg5hp.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548003/Images_Product/lshj75acghypfhshfkmv.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548005/Images_Product/pjumfhjfv3uebgviue1i.webp', 10, 0, '2024-11-25 15:20:14', '2024-11-25 15:20:14'),
(86, 25, 3, 'Trắng', 2, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548004/Images_Product/a4kejcck66mj2fkixv5e.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548004/Images_Product/dd7su5p5ckdralafwo4x.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548004/Images_Product/sn97yk0w1tu05n8bg5hp.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548003/Images_Product/lshj75acghypfhshfkmv.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548005/Images_Product/pjumfhjfv3uebgviue1i.webp', 10, 0, '2024-11-25 15:20:20', '2024-11-25 15:20:20'),
(87, 26, 1, 'Xanh Đậm', 1, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548222/Images_Product/h1e2lmj1jqhweufvtefr.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548221/Images_Product/ne3kk5kvafb2g5srznrh.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548221/Images_Product/exdkulgeyt9nbf4kom6g.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548221/Images_Product/kxgjbb29k3y1dykjas2j.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548222/Images_Product/eufqww4rwlw5gers9xrw.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548224/Images_Product/xq7trkd7tcw72ng35ihk.webp', 10, 0, '2024-11-25 15:23:46', '2024-11-25 15:23:46'),
(88, 26, 2, 'Xanh Đậm', 1, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548222/Images_Product/h1e2lmj1jqhweufvtefr.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548221/Images_Product/ne3kk5kvafb2g5srznrh.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548221/Images_Product/exdkulgeyt9nbf4kom6g.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548221/Images_Product/kxgjbb29k3y1dykjas2j.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548222/Images_Product/eufqww4rwlw5gers9xrw.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548224/Images_Product/xq7trkd7tcw72ng35ihk.webp', 10, 0, '2024-11-25 15:24:00', '2024-11-25 15:24:00'),
(89, 26, 3, 'Xanh Đậm', 1, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548222/Images_Product/h1e2lmj1jqhweufvtefr.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548221/Images_Product/ne3kk5kvafb2g5srznrh.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548221/Images_Product/exdkulgeyt9nbf4kom6g.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548221/Images_Product/kxgjbb29k3y1dykjas2j.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548222/Images_Product/eufqww4rwlw5gers9xrw.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548224/Images_Product/xq7trkd7tcw72ng35ihk.webp', 10, 0, '2024-11-25 15:24:08', '2024-11-25 15:24:08'),
(90, 26, 4, 'Xanh Đậm', 1, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548222/Images_Product/h1e2lmj1jqhweufvtefr.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548221/Images_Product/ne3kk5kvafb2g5srznrh.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548221/Images_Product/exdkulgeyt9nbf4kom6g.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548221/Images_Product/kxgjbb29k3y1dykjas2j.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548222/Images_Product/eufqww4rwlw5gers9xrw.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548224/Images_Product/xq7trkd7tcw72ng35ihk.webp', 10, 0, '2024-11-25 15:24:14', '2024-11-25 15:24:14'),
(91, 26, 1, 'Trắng', 1, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548335/Images_Product/vvadfyyr7ubatrdfshsf.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548336/Images_Product/bgdzlwbdfjnsl8uxcwdi.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548335/Images_Product/bdhknjtmmc6s89sfir5b.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548336/Images_Product/h223gueu6aiv0tgkp21y.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548336/Images_Product/z1anlkzbpmql39j0mric.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548338/Images_Product/qev1ektnkbitxzjqtkwv.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548340/Images_Product/lka2z3j0tbwkh1zxkix0.webp', 10, 0, '2024-11-25 15:25:41', '2024-11-25 15:25:41'),
(92, 26, 2, 'Trắng', 1, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548335/Images_Product/vvadfyyr7ubatrdfshsf.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548336/Images_Product/bgdzlwbdfjnsl8uxcwdi.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548335/Images_Product/bdhknjtmmc6s89sfir5b.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548336/Images_Product/h223gueu6aiv0tgkp21y.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548336/Images_Product/z1anlkzbpmql39j0mric.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548338/Images_Product/qev1ektnkbitxzjqtkwv.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548340/Images_Product/lka2z3j0tbwkh1zxkix0.webp', 10, 0, '2024-11-25 15:25:44', '2024-11-25 15:25:44'),
(93, 26, 3, 'Trắng', 1, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548335/Images_Product/vvadfyyr7ubatrdfshsf.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548336/Images_Product/bgdzlwbdfjnsl8uxcwdi.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548335/Images_Product/bdhknjtmmc6s89sfir5b.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548336/Images_Product/h223gueu6aiv0tgkp21y.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548336/Images_Product/z1anlkzbpmql39j0mric.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548338/Images_Product/qev1ektnkbitxzjqtkwv.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548340/Images_Product/lka2z3j0tbwkh1zxkix0.webp', 10, 0, '2024-11-25 15:25:49', '2024-11-25 15:25:49'),
(94, 26, 4, 'Trắng', 1, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548335/Images_Product/vvadfyyr7ubatrdfshsf.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548336/Images_Product/bgdzlwbdfjnsl8uxcwdi.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548335/Images_Product/bdhknjtmmc6s89sfir5b.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548336/Images_Product/h223gueu6aiv0tgkp21y.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548336/Images_Product/z1anlkzbpmql39j0mric.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548338/Images_Product/qev1ektnkbitxzjqtkwv.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548340/Images_Product/lka2z3j0tbwkh1zxkix0.webp', 10, 0, '2024-11-25 15:25:53', '2024-11-25 15:25:53'),
(95, 26, 4, 'Đen', 1, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548445/Images_Product/t517ipw1oadd5d6lzeaf.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548445/Images_Product/f0pbyxu5a1jgxvtolqfl.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548447/Images_Product/k8cgmhj5c9pnzijrqh7m.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548447/Images_Product/ayz12rqjiadao0y4bmqr.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548449/Images_Product/aufxs0t7wf1h4yyodhvu.webp', 10, 0, '2024-11-25 15:27:31', '2024-11-25 15:27:31'),
(96, 26, 1, 'Đen', 1, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548445/Images_Product/t517ipw1oadd5d6lzeaf.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548445/Images_Product/f0pbyxu5a1jgxvtolqfl.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548447/Images_Product/k8cgmhj5c9pnzijrqh7m.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548447/Images_Product/ayz12rqjiadao0y4bmqr.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548449/Images_Product/aufxs0t7wf1h4yyodhvu.webp', 10, 0, '2024-11-25 15:27:31', '2024-11-25 15:27:31'),
(97, 26, 2, 'Đen', 1, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548445/Images_Product/t517ipw1oadd5d6lzeaf.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548445/Images_Product/f0pbyxu5a1jgxvtolqfl.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548447/Images_Product/k8cgmhj5c9pnzijrqh7m.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548447/Images_Product/ayz12rqjiadao0y4bmqr.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548449/Images_Product/aufxs0t7wf1h4yyodhvu.webp', 10, 0, '2024-11-25 15:27:35', '2024-11-25 15:27:35'),
(98, 26, 3, 'Đen', 1, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548445/Images_Product/t517ipw1oadd5d6lzeaf.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548445/Images_Product/f0pbyxu5a1jgxvtolqfl.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548447/Images_Product/k8cgmhj5c9pnzijrqh7m.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548447/Images_Product/ayz12rqjiadao0y4bmqr.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732548449/Images_Product/aufxs0t7wf1h4yyodhvu.webp', 10, 0, '2024-11-25 15:27:40', '2024-11-25 15:27:40'),
(99, 27, 1, 'Xanh Trung', 2, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557131/Images_Product/vxjhjcuckjaezf9lh3b0.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557135/Images_Product/sulab8clbwonrxcekng5.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557130/Images_Product/tfqkchmwqpk6ji2sahab.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557135/Images_Product/nwj8autgmw9chvlg2xaz.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557131/Images_Product/tznhn4qrgzlvtmwedbmt.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557135/Images_Product/wkjkgzbsj16esa0egdkh.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557137/Images_Product/kcn89ldofrrq0b8cwvnx.webp', 9, 1, '2024-11-25 17:52:19', '2024-12-13 16:02:00'),
(100, 27, 2, 'Xanh Trung', 2, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557131/Images_Product/vxjhjcuckjaezf9lh3b0.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557135/Images_Product/sulab8clbwonrxcekng5.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557130/Images_Product/tfqkchmwqpk6ji2sahab.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557135/Images_Product/nwj8autgmw9chvlg2xaz.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557131/Images_Product/tznhn4qrgzlvtmwedbmt.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557135/Images_Product/wkjkgzbsj16esa0egdkh.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557137/Images_Product/kcn89ldofrrq0b8cwvnx.webp', 10, 0, '2024-11-25 17:52:23', '2024-11-25 17:52:23'),
(101, 27, 3, 'Xanh Trung', 2, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557131/Images_Product/vxjhjcuckjaezf9lh3b0.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557135/Images_Product/sulab8clbwonrxcekng5.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557130/Images_Product/tfqkchmwqpk6ji2sahab.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557135/Images_Product/nwj8autgmw9chvlg2xaz.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557131/Images_Product/tznhn4qrgzlvtmwedbmt.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557135/Images_Product/wkjkgzbsj16esa0egdkh.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557137/Images_Product/kcn89ldofrrq0b8cwvnx.webp', 10, 0, '2024-11-25 17:52:28', '2024-11-25 17:52:28'),
(102, 27, 4, 'Xanh Trung', 2, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557131/Images_Product/vxjhjcuckjaezf9lh3b0.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557135/Images_Product/sulab8clbwonrxcekng5.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557130/Images_Product/tfqkchmwqpk6ji2sahab.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557135/Images_Product/nwj8autgmw9chvlg2xaz.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557131/Images_Product/tznhn4qrgzlvtmwedbmt.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557135/Images_Product/wkjkgzbsj16esa0egdkh.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557137/Images_Product/kcn89ldofrrq0b8cwvnx.webp', 10, 0, '2024-11-25 17:52:31', '2024-11-25 17:52:31'),
(103, 27, 1, 'Xanh Đậm', 2, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557257/Images_Product/ay0ywfpxykowacfeafzu.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557255/Images_Product/bz4521j10tapmlc5fktg.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557255/Images_Product/ahdbsyhrqvvdzmxiy5aj.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557255/Images_Product/f5erthsb5hgu9sintcix.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557255/Images_Product/wfr5yrsrf34x9ugx4z1a.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557259/Images_Product/dbofvsv4ocfv1lsdxxmm.webp', 10, 0, '2024-11-25 17:54:21', '2024-11-25 17:54:21'),
(104, 27, 2, 'Xanh Đậm', 2, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557257/Images_Product/ay0ywfpxykowacfeafzu.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557255/Images_Product/bz4521j10tapmlc5fktg.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557255/Images_Product/ahdbsyhrqvvdzmxiy5aj.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557255/Images_Product/f5erthsb5hgu9sintcix.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557255/Images_Product/wfr5yrsrf34x9ugx4z1a.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557259/Images_Product/dbofvsv4ocfv1lsdxxmm.webp', 10, 0, '2024-11-25 17:54:58', '2024-11-25 17:54:58'),
(105, 27, 3, 'Xanh Đậm', 2, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557257/Images_Product/ay0ywfpxykowacfeafzu.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557255/Images_Product/bz4521j10tapmlc5fktg.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557255/Images_Product/ahdbsyhrqvvdzmxiy5aj.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557255/Images_Product/f5erthsb5hgu9sintcix.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557255/Images_Product/wfr5yrsrf34x9ugx4z1a.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557259/Images_Product/dbofvsv4ocfv1lsdxxmm.webp', 10, 0, '2024-11-25 17:55:02', '2024-11-25 17:55:02'),
(106, 27, 4, 'Xanh Đậm', 2, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557257/Images_Product/ay0ywfpxykowacfeafzu.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557255/Images_Product/bz4521j10tapmlc5fktg.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557255/Images_Product/ahdbsyhrqvvdzmxiy5aj.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557255/Images_Product/f5erthsb5hgu9sintcix.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557255/Images_Product/wfr5yrsrf34x9ugx4z1a.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557259/Images_Product/dbofvsv4ocfv1lsdxxmm.webp', 10, 0, '2024-11-25 17:55:08', '2024-11-25 17:55:08'),
(107, 28, 1, 'Xanh Đậm', 1, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557449/Images_Product/lppvqrat5gue5sh5fcyh.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557453/Images_Product/pmqnl5jcwdxctrmudekx.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557450/Images_Product/cishak1qf1ecsurpgpva.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557454/Images_Product/dgtgesso9bn7syyn72fl.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557449/Images_Product/iizkgtngpumayruoohf4.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557449/Images_Product/frigjrflvmvgbalzwnfa.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557455/Images_Product/o0ta5qov8iqbb75metsz.webp', 10, 0, '2024-11-25 17:57:37', '2024-11-25 17:57:37'),
(108, 28, 2, 'Xanh Đậm', 1, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557449/Images_Product/lppvqrat5gue5sh5fcyh.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557453/Images_Product/pmqnl5jcwdxctrmudekx.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557450/Images_Product/cishak1qf1ecsurpgpva.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557454/Images_Product/dgtgesso9bn7syyn72fl.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557449/Images_Product/iizkgtngpumayruoohf4.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557449/Images_Product/frigjrflvmvgbalzwnfa.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557455/Images_Product/o0ta5qov8iqbb75metsz.webp', 10, 0, '2024-11-25 17:57:39', '2024-11-25 17:57:39'),
(109, 28, 3, 'Xanh Đậm', 1, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557449/Images_Product/lppvqrat5gue5sh5fcyh.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557453/Images_Product/pmqnl5jcwdxctrmudekx.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557450/Images_Product/cishak1qf1ecsurpgpva.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557454/Images_Product/dgtgesso9bn7syyn72fl.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557449/Images_Product/iizkgtngpumayruoohf4.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557449/Images_Product/frigjrflvmvgbalzwnfa.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557455/Images_Product/o0ta5qov8iqbb75metsz.webp', 10, 0, '2024-11-25 17:57:44', '2024-11-25 17:57:44'),
(110, 28, 4, 'Xanh Đậm', 1, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557449/Images_Product/lppvqrat5gue5sh5fcyh.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557453/Images_Product/pmqnl5jcwdxctrmudekx.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557450/Images_Product/cishak1qf1ecsurpgpva.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557454/Images_Product/dgtgesso9bn7syyn72fl.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557449/Images_Product/iizkgtngpumayruoohf4.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557449/Images_Product/frigjrflvmvgbalzwnfa.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732557455/Images_Product/o0ta5qov8iqbb75metsz.webp', 10, 0, '2024-11-25 17:57:48', '2024-11-25 17:57:48'),
(111, 29, 1, 'Be', 1, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562537/Images_Product/yixy6wrkudrtgokt9kfo.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562537/Images_Product/uhfandyexev0tuyf6vat.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562537/Images_Product/xzqpbqyceliaahr0ivbu.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562535/Images_Product/xm0k7qfbrzwontkjhsec.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562537/Images_Product/ccogzfe0i1bodlwbecbm.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562535/Images_Product/pdpfle0ltua2xuit68e9.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562535/Images_Product/jnhuvm9i6xfggbrqff6c.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562539/Images_Product/fmmzyrgdarwouukkcx5j.webp', 12, 0, '2024-11-25 19:22:20', '2024-11-25 19:22:20'),
(112, 29, 2, 'Be', 1, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562537/Images_Product/yixy6wrkudrtgokt9kfo.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562537/Images_Product/uhfandyexev0tuyf6vat.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562537/Images_Product/xzqpbqyceliaahr0ivbu.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562535/Images_Product/xm0k7qfbrzwontkjhsec.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562537/Images_Product/ccogzfe0i1bodlwbecbm.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562535/Images_Product/pdpfle0ltua2xuit68e9.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562535/Images_Product/jnhuvm9i6xfggbrqff6c.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562539/Images_Product/fmmzyrgdarwouukkcx5j.webp', 12, 0, '2024-11-25 19:22:22', '2024-11-25 19:22:22'),
(113, 29, 3, 'Be', 1, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562537/Images_Product/yixy6wrkudrtgokt9kfo.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562537/Images_Product/uhfandyexev0tuyf6vat.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562537/Images_Product/xzqpbqyceliaahr0ivbu.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562535/Images_Product/xm0k7qfbrzwontkjhsec.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562537/Images_Product/ccogzfe0i1bodlwbecbm.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562535/Images_Product/pdpfle0ltua2xuit68e9.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562535/Images_Product/jnhuvm9i6xfggbrqff6c.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562539/Images_Product/fmmzyrgdarwouukkcx5j.webp', 12, 0, '2024-11-25 19:22:26', '2024-11-25 19:22:26'),
(114, 29, 4, 'Be', 1, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562537/Images_Product/yixy6wrkudrtgokt9kfo.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562537/Images_Product/uhfandyexev0tuyf6vat.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562537/Images_Product/xzqpbqyceliaahr0ivbu.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562535/Images_Product/xm0k7qfbrzwontkjhsec.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562537/Images_Product/ccogzfe0i1bodlwbecbm.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562535/Images_Product/pdpfle0ltua2xuit68e9.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562535/Images_Product/jnhuvm9i6xfggbrqff6c.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562539/Images_Product/fmmzyrgdarwouukkcx5j.webp', 12, 0, '2024-11-25 19:22:29', '2024-11-25 19:22:29'),
(115, 29, 1, 'Ghi Đậm', 1, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562643/Images_Product/lv5nhbb1itm28f5pre8e.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562643/Images_Product/tinwjpr2dslvm14sb7us.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562643/Images_Product/ptpvcqywzbhe90cwoy1e.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562641/Images_Product/dkahk3ehi3zjr4eadood.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562641/Images_Product/mvw8o4dbg0khecvn8fiy.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562645/Images_Product/lnl3479un9vvzadex9x3.webp', 12, 0, '2024-11-25 19:24:07', '2024-11-25 19:24:07'),
(116, 29, 2, 'Ghi Đậm', 1, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562643/Images_Product/lv5nhbb1itm28f5pre8e.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562643/Images_Product/tinwjpr2dslvm14sb7us.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562643/Images_Product/ptpvcqywzbhe90cwoy1e.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562641/Images_Product/dkahk3ehi3zjr4eadood.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562641/Images_Product/mvw8o4dbg0khecvn8fiy.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562645/Images_Product/lnl3479un9vvzadex9x3.webp', 12, 0, '2024-11-25 19:24:08', '2024-11-25 19:24:08'),
(117, 29, 3, 'Ghi Đậm', 1, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562643/Images_Product/lv5nhbb1itm28f5pre8e.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562643/Images_Product/tinwjpr2dslvm14sb7us.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562643/Images_Product/ptpvcqywzbhe90cwoy1e.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562641/Images_Product/dkahk3ehi3zjr4eadood.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562641/Images_Product/mvw8o4dbg0khecvn8fiy.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562645/Images_Product/lnl3479un9vvzadex9x3.webp', 12, 0, '2024-11-25 19:24:13', '2024-11-25 19:24:13'),
(118, 30, 1, 'Ghi', 1, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562795/Images_Product/offrcwzfiq28hjcl892j.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562795/Images_Product/ohgt8sppwqhvjug3sk5o.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562795/Images_Product/pehtv5qgdosej8b4xhif.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562795/Images_Product/h3oty3ksrvuyzcg1m5i2.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562795/Images_Product/l4fdruqqqyyb3utcbcsq.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562796/Images_Product/k1kaxxqd4hcrljiz7nss.webp', 12, 0, '2024-11-25 19:26:38', '2024-11-25 19:26:38'),
(119, 30, 2, 'Ghi', 1, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562795/Images_Product/offrcwzfiq28hjcl892j.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562795/Images_Product/ohgt8sppwqhvjug3sk5o.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562795/Images_Product/pehtv5qgdosej8b4xhif.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562795/Images_Product/h3oty3ksrvuyzcg1m5i2.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562795/Images_Product/l4fdruqqqyyb3utcbcsq.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562796/Images_Product/k1kaxxqd4hcrljiz7nss.webp', 12, 0, '2024-11-25 19:26:42', '2024-11-25 19:26:42'),
(120, 30, 3, 'Ghi', 1, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562795/Images_Product/offrcwzfiq28hjcl892j.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562795/Images_Product/ohgt8sppwqhvjug3sk5o.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562795/Images_Product/pehtv5qgdosej8b4xhif.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562795/Images_Product/h3oty3ksrvuyzcg1m5i2.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562795/Images_Product/l4fdruqqqyyb3utcbcsq.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562796/Images_Product/k1kaxxqd4hcrljiz7nss.webp', 12, 0, '2024-11-25 19:26:47', '2024-11-25 19:26:47'),
(121, 31, 1, 'Đen', 1, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562935/Images_Product/zfvyw7j5rrnuornbvjsx.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562935/Images_Product/cwuytj98o50p7fsbkrsj.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562935/Images_Product/lv4qyqabf5r1zaktchrf.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562935/Images_Product/hjnjbaxmyapb06qarbzf.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562935/Images_Product/ca1b9pdbxm9frx1ji6ky.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562937/Images_Product/nvjcish16hy5xljm26sv.webp', 12, 0, '2024-11-25 19:28:59', '2024-11-25 19:28:59'),
(122, 31, 2, 'Đen', 1, '[\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562935/Images_Product/zfvyw7j5rrnuornbvjsx.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562935/Images_Product/cwuytj98o50p7fsbkrsj.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562935/Images_Product/lv4qyqabf5r1zaktchrf.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562935/Images_Product/hjnjbaxmyapb06qarbzf.webp\",\"http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562935/Images_Product/ca1b9pdbxm9frx1ji6ky.webp\"]', 'http://res.cloudinary.com/dzgo7u5ti/image/upload/v1732562937/Images_Product/nvjcish16hy5xljm26sv.webp', 12, 0, '2024-11-25 19:29:00', '2024-11-25 19:29:00');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `roles`
--

INSERT INTO `roles` (`id`, `name`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', 'admin', '2024-12-01 17:42:22', '2024-12-01 17:42:22'),
(2, 'nhanvien', 'nhanvien', '2024-12-01 17:42:22', '2024-12-01 17:42:22');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `role_permissions`
--

CREATE TABLE `role_permissions` (
  `id` int(11) NOT NULL,
  `roleId` int(11) NOT NULL,
  `url` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `role_permissions`
--

INSERT INTO `role_permissions` (`id`, `roleId`, `url`, `createdAt`, `updatedAt`) VALUES
(1, 1, '/product/manage_products', '2024-12-01 17:46:28', '2024-12-01 17:46:28'),
(2, 1, '/product/manage_categories', '2024-12-01 19:50:32', '2024-12-01 19:50:32'),
(3, 1, '/product/manage_sizes', '2024-12-01 21:01:14', '2024-12-01 21:01:14'),
(4, 1, '/product/manage_colors', '2024-12-01 21:01:14', '2024-12-01 21:01:14'),
(5, 1, '/orders/mangae_orders', '2024-12-05 06:46:20', '2024-12-05 06:46:20');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sales`
--

CREATE TABLE `sales` (
  `id` int(11) NOT NULL,
  `productVariantId` int(11) NOT NULL,
  `count` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20241121194725-change-colorId-to-color.js'),
('20241122174015-add-isNew-to-products.js'),
('accountManagement_migrations.js'),
('category_migrations.js'),
('color_migrations.js'),
('gender_migrations.js'),
('order_migrations.js'),
('orderItem_migrations.js'),
('product_migrations.js'),
('ProductVariants_migrations.js'),
('role_migrations.js'),
('role_permissions_migrations.js'),
('sales_migrations.js'),
('shoppingCart_migrations.js'),
('size_migrations.js');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `shoppingcarts`
--

CREATE TABLE `shoppingcarts` (
  `id` int(11) NOT NULL,
  `productvariantsId` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sizes`
--

CREATE TABLE `sizes` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `sizes`
--

INSERT INTO `sizes` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'S', '2024-11-03 17:52:18', '2024-11-03 17:52:18'),
(2, 'M', '2024-11-03 17:52:18', '2024-11-03 17:52:18'),
(3, 'L', '2024-11-03 17:52:56', '2024-11-03 17:52:56'),
(4, 'XL', '2024-11-03 17:52:56', '2024-11-03 17:52:56'),
(5, '2XL', '2024-11-04 17:58:52', '2024-11-04 17:58:52'),
(6, '4XL', '2024-11-05 10:03:15', '2024-11-05 10:03:15'),
(7, '3XL', '2024-11-05 10:03:42', '2024-11-05 10:03:42'),
(8, '5XL', '2024-12-10 18:02:18', '2024-12-10 18:02:18');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `accountmanagements`
--
ALTER TABLE `accountmanagements`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `colors`
--
ALTER TABLE `colors`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `genders`
--
ALTER TABLE `genders`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `orderitems`
--
ALTER TABLE `orderitems`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `productvariants`
--
ALTER TABLE `productvariants`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Chỉ mục cho bảng `role_permissions`
--
ALTER TABLE `role_permissions`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Chỉ mục cho bảng `shoppingcarts`
--
ALTER TABLE `shoppingcarts`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `sizes`
--
ALTER TABLE `sizes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `accountmanagements`
--
ALTER TABLE `accountmanagements`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT cho bảng `colors`
--
ALTER TABLE `colors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT cho bảng `genders`
--
ALTER TABLE `genders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `orderitems`
--
ALTER TABLE `orderitems`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT cho bảng `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT cho bảng `productvariants`
--
ALTER TABLE `productvariants`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=132;

--
-- AUTO_INCREMENT cho bảng `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `role_permissions`
--
ALTER TABLE `role_permissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `sales`
--
ALTER TABLE `sales`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `shoppingcarts`
--
ALTER TABLE `shoppingcarts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT cho bảng `sizes`
--
ALTER TABLE `sizes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
