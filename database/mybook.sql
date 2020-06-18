-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost:3306
-- Thời gian đã tạo: Th6 16, 2020 lúc 10:35 AM
-- Phiên bản máy phục vụ: 10.3.23-MariaDB-log-cll-lve
-- Phiên bản PHP: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `maitrong_mybook`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `banner_slide_show`
--

CREATE TABLE `banner_slide_show` (
  `id` int(11) NOT NULL,
  `imagesLink` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `categories`
--

CREATE TABLE `categories` (
  `CateId` int(11) NOT NULL,
  `CateName` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `categories`
--

INSERT INTO `categories` (`CateId`, `CateName`) VALUES
(1, 'Sách Tiếng Anh'),
(2, 'Sách Tiếng Việt'),
(3, 'Văn phòng phẩm'),
(4, 'Quà lưu niệm');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `groups`
--

CREATE TABLE `groups` (
  `GroupId` int(11) NOT NULL,
  `GroupName` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `groups`
--

INSERT INTO `groups` (`GroupId`, `GroupName`) VALUES
(1, 'Admin'),
(2, 'Moder'),
(3, 'Khách hàng');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orderitems`
--

CREATE TABLE `orderitems` (
  `OrderId` int(11) NOT NULL,
  `ProdId` int(11) NOT NULL,
  `Quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders`
--

CREATE TABLE `orders` (
  `OrderId` int(11) NOT NULL,
  `UserId` int(11) NOT NULL,
  `AddedDate` date NOT NULL,
  `Address` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `Phone` int(11) NOT NULL,
  `Sum` float NOT NULL,
  `Status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `orders`
--

INSERT INTO `orders` (`OrderId`, `UserId`, `AddedDate`, `Address`, `Phone`, `Sum`, `Status`) VALUES
(1, 3, '0000-00-00', '351 LLQ', 904735110, 299000, 1),
(4, 3, '2020-06-16', '351 llq', 904735110, 199000, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `ProdId` int(11) NOT NULL,
  `ProdName` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Des` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `Price` double NOT NULL,
  `Discount` double NOT NULL,
  `Quantity` int(11) NOT NULL,
  `Rate` double NOT NULL,
  `ImageURL` text COLLATE utf8_unicode_ci NOT NULL,
  `CateId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`ProdId`, `ProdName`, `Des`, `Price`, `Discount`, `Quantity`, `Rate`, `ImageURL`, `CateId`) VALUES
(1, 'Cân bằng cảm xúc', 'Cân bằng cảm xúc', 65000, 0, 20, 5, 'upload/products/can_bang_cam_xuc.jpg', 2),
(2, 'Bộ đánh dấu sách kim loại', 'Bộ đánh dấu sách kim loại', 29000, 0, 20, 5, 'upload/products/bo_danh_dau_sach_kim_loai.jpg', 3),
(3, 'Móc khóa mèo con ngoi ngóp', 'Móc khóa mèo con ngoi ngóp', 19000, 0, 20, 5, 'upload/products/moc_khoa_meo_con_ngoi_ngop.jpg', 4),
(4, 'oxford lerner s pocket dictiontary', 'oxford lerner s pocket dictiontary', 199000, 0, 20, 5, 'upload/products/oxford-lerner_s-pocket-dictiontary.jpg', 1),
(5, 'Len Milk cotton cao cấp', 'Len Milk cotton cao cấp', 129000, 0, 20, 5, 'upload/products/len_milk_cotton_cao_cap.jpg', 3),
(6, 'Tony Buổi sáng', 'Tony buổi sáng', 129000, 0, 20, 5, 'upload/products/tony_buoi_sang.jpg', 2),
(7, 'Nhà giả Kim', 'Nhà giả Kim', 159000, 0, 20, 5, 'upload/products/nha_gia_kim.jpg', 2),
(11, 'Nóng Giận Là Bản Năng , Tĩnh Lặng Là Bản Lĩnh', 'Nóng Giận Là Bản Năng , Tĩnh Lặng Là Bản Lĩnh', 67000, 0, 20, 5, 'upload/products/e6d54019a2079b9565114bce93b245b7.jpg', 2),
(12, 'Bảng Vẽ Điện Tử Thông Minh Xóa Được Màn Hình LCD 8.5 Inch (Giao Màu Ngẫu Nhiên)', 'Bảng Vẽ Điện Tử Thông Minh Xóa Được Màn Hình LCD 8.5 Inch (Giao Màu Ngẫu Nhiên)', 84000, 0, 20, 5, 'upload/products/b7548e31ab2cca74a2df4b3fbf5a1fa1.jpg', 3),
(13, '21 Bài Học Cho Thế Kỷ 21', '21 Bài Học Cho Thế Kỷ 21', 190000, 0, 20, 5, 'upload/products/anh_2.jpg', 1),
(14, 'Sapiens: Lược Sử Loài Người (Tái Bản Có Chỉnh Sửa)', 'Sapiens: Lược Sử Loài Người (Tái Bản Có Chỉnh Sửa)', 99000, 0, 20, 5, 'upload/products/f4e6621e69775643d22604bccef281bf.jpg', 2),
(15, 'The Subtle Art Of Not Giving A F*Ck', 'About the Book  #1 International Bestseller and #1 New York Times Bestseller  Over 2 million copies sold  In this generation-defining self-help guide, a superstar blogger cuts through the crap to show us how to stop trying to be &quot;positive&quot; all the time so that we can truly become better, happier people.  For decades, we’ve been told that positive thinking is the key to a happy, rich life. &quot;F**k positivity,&quot; Mark Manson says. &quot;Let’s be honest, shit is f**ked and we have to live with it.&quot; In his wildly popular Internet blog, Manson doesn’t sugarcoat or equivocate. He tells it like it is—a dose of raw, refreshing, honest truth that is sorely lacking today. The Subtle Art of Not Giving a F**k is his antidote to the coddling, let’s-all-feel-good mindset that has infected American society and spoiled a generation, rewarding them with gold medals just for showing up.', 269000, 10, 20, 5, 'upload/products/89381b5d1e438dffbdf76b493e8607d2.jpg', 1),
(16, '21 Lessons For The 21st Century', 'The bestselling phenomenon returns with 21 bite-sized lessons to help us understand our troubled times.  **THE NUMBER ONE BESTSELLER**  The future is here. Learn to live in it.  In twenty-one bite-sized lessons, Yuval Noah Harari explores what it means to be human in an age of bewilderment.  How can we protect ourselves from nuclear war, ecological cataclysms and technological disruptions? What can we do about the epidemic of fake news or the threat of terrorism? What should we teach our children?  Yuval Noah Harari takes us on a thrilling journey through today’s most urgent issues. The golden thread running through his exhilarating new book is the challenge of maintaining our collective and individual focus in the face of constant and disorienting change. Are we still capable of understanding the world we have created?', 171000, 10, 20, 5, 'upload/products/09d62f181c6800ee60bce4c6754f45ac.jpg', 1),
(17, 'Sống Thực Tế Giữa Đời Thực Dụng', 'THỰC DỤNG Ư? KHÔNG HỀ, TÔI CHỈ RẤT THỰC TẾ THÔI!  Con người muốn trưởng thành đều phải trải qua ba lần lột xác “phá kén hóa bướm”. Lần đầu tiên là khi nhận ra mình không phải trung tâm thế giới. Lần thứ hai là khi phát hiện ra dù cố gắng đến đâu vẫn có những việc cảm thấy thật bất lực. Lần thứ ba là khi biết rõ có những việc bản thân không thể làm được nhưng vẫn cố tranh đấu đến cùng.  Trưởng thành là khi chúng ta hiểu ra rằng, không thể sống quá thật thà, quá trong sáng giữa cuộc đời đầy biến cố này. Thay vì kêu than “Thế giới này thực tế đến thực dụng!”, sao bạn không tự hỏi “Thực tế có gì không tốt?” Ít nhất, thực tế sẽ giúp bạn mạnh mẽ hơn, bản lĩnh hơn, dạy bạn cách vượt qua nghịch cảnh, trung thực với chính mình.  Khi bạn chưa đủ mạnh mẽ, cơ hội dù là nhỏ nhất cũng không đến với bạn. Khi bạn đủ tài giỏi, bạn chẳng thể ngăn nổi hàng vạn cơ hội đến với mình, mọi thứ bạn muốn đều chủ động chạy về phía bạn.  Thế giới này làm gì có đưa than ngày tuyết rơi, chỉ có dệt hoa lên gấm thôi.', 58000, 10, 20, 5, 'upload/products/f88080bba78a779fb78e1b76b73a9813.jpg', 1),
(18, 'Bookmark Đánh Dấu Sách Cổ Trang (Có Hộp Giấy Đựng)', 'Bookmark Đánh Dấu Sách Cổ Trang Bookmark đánh dấu trang được làm từ kim loại vàng đồng miếng có thiết kế tinh tế, mềm mại trong từng chi tiết nhỏ. Có hình dáng giống như cành lá, bông hoa ép khô giữa các trang sách', 45000, 10, 20, 5, 'upload/products/58b34a8220a5e1da801f6e6e5e3dafc8.jpg', 2),
(19, 'Bộ 10 Băng Keo Giấy Trang Trí Washi Tape ( Trang Trí Sổ, Chia Dòng)', 'Bộ 10 Băng Keo Giấy Trang Trí Washi Tape ( Trang Trí Sổ, Chia Dòng) có nhiều màu sắc khác nhau, bạn có thể lựa chọn màu sắc bạn yêu thích.  Sản phẩm giúp bạn trang trí sổ tay, nhật kế kế hoạch, tập ghi chép lung linh hay bạn có thể thể hiện sự khéo tay sáng tạo đồ handmade cùng những cuộn băng keo này', 39000, 10, 20, 5, 'upload/products/0683be4621fc7c16d66943dea2b64973.jpg', 3),
(20, 'Móc Khóa Ô Tô Xe Máy OMUDA 3754', 'Móc Khóa OMUDA 3754 Mạ Bạc - Móc Khóa Cao Cấp Kiểu Dáng Cổ Điển Âu Mỹ Móc Khóa Ô Tô Xe Máy , giúp bạn thể hiện sự khác biệt cho chùm chìa khóa của mình. Sử dụng móc treo khóa sẽ đem đến cho bạn sự tiện lợi và dễ dàng hơn khi cất giữ, mang theo bên mình, hạn chế thất lạc hay rơi mất chìa.', 47000, 10, 30, 5, 'upload/products/1267f4a7009cf12bb0fa4f33ec935c55.png', 4),
(21, 'Ống Heo Két Sắt Mini Tiết Kiệm Tiền Mẫu Mới Có Khóa Đáng Yêu Cho Bé (Màu Ngẫu Nhiên)', 'Thông tin sản phẩm két sắt mini thông minh:  – Tên sản phẩm: Két sắt mini bank dạy trẻ rèn luyện tính tiết kiệm  – Màu sắc: Nhiều màu được giao ngẫu nhiên  – Kích thước: 11x10x9,5cm.  – Bên trong có 1 ngăn nhỏ.  – Hệ thống khóa với ổ khóa 2 chìa an toàn.  – Máy nhét được hơn 30.000.000 VNĐ  – Trọng lượng: 169g     Đặc điểm nổi bật:  - Phù hợp với hầu hết tất cả các loại tiền tiêu chuẩn, khuyến khích trẻ em tiết kiệm với chiếc nồi này để lưu trữ tiền xu.  - Ngân hàng tiền xu đáng yêu này nằm hoàn hảo trên bất kỳ bàn hoặc kệ sách nào.  - Trẻ em sẽ thích bỏ tiền vào con heo đất mới của mình và thấy tiền tiết kiệm của chúng tăng lên.  - Sản phẩm là vật trang trí tuyệt vời cho phòng ngủ, phòng khách.  - Thiết kế hình hoạt hình dễ thương, đồ trang trí đáng yêu.  – An toàn, dễ sử dụng, cho thủ quỹ, thâu ngân, bảo vệ.  – Thích hợp cho việc di chuyển hoặc xách tay hoặc cố định bên trong tủ hoặc trên tường, chống dịch chuyển hộp khóa', 53000, 10, 50, 5, 'upload/products/b59fde33169d3608160e0d696c773420.jpg', 4),
(22, 'Kẹp Từ Tính Plus Nhỏ', 'Kẹp Từ Tính Plus Nhỏ với lực từ mạnh, có thể treo được trên bảng từ và kẹp được nhiều giấy tờ hơn. Sản phẩm đa dạng màu sắc: Xanh Nước Biển, Xanh Lá, Vàng, Đỏ, Trắng..., dễ dàng sử dụng. Kẹp Từ Tính Plus được sản xuất bằng dây chuyền hiện đại, được sử dụng rộng rãi trong các cơ sở kinh doanh, doanh nghiệp lớn nhỏ...', 23000, 10, 100, 5, 'upload/products/80-568nd--1-.u5102.d20170414.t010607.176148.jpg', 3),
(24, 'Vinh', 'Vinh', 99000, 10, 55, 5, 'xxx', 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `UserId` int(11) NOT NULL,
  `GroupId` int(11) NOT NULL,
  `FullName` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `UserName` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `PassWord` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Email` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`UserId`, `GroupId`, `FullName`, `UserName`, `PassWord`, `Email`) VALUES
(1, 3, 'Mai Trọng Vinh', 'maivinh', 'maivinh', 'test@test.com'),
(2, 3, 'Hello', 'hello', 'hello', 'hello@hello.com'),
(3, 1, 'admin', 'admin', 'admin', 'admin@admin.com'),
(5, 3, 'Mai Vinh', 'vinhmai570', 'vinh123', 'vinhmai570'),
(10, 3, 'Mai VInh', 'kellyvinh', 'vinh123', 'kellyvinh570@gmail.com'),
(11, 3, 'Mai trọng vinh', 'vinh123', 'vinh123', 'vinh123'),
(13, 3, 'Mai vinh', 'Vinh1234', 'Vinh123', 'vinh123@gmail.com');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `banner_slide_show`
--
ALTER TABLE `banner_slide_show`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`CateId`);

--
-- Chỉ mục cho bảng `groups`
--
ALTER TABLE `groups`
  ADD PRIMARY KEY (`GroupId`);

--
-- Chỉ mục cho bảng `orderitems`
--
ALTER TABLE `orderitems`
  ADD PRIMARY KEY (`OrderId`),
  ADD KEY `fk_OrderID` (`OrderId`),
  ADD KEY `fk_ProdID` (`ProdId`);

--
-- Chỉ mục cho bảng `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`OrderId`),
  ADD KEY `fk_UserId` (`UserId`);

--
-- Chỉ mục cho bảng `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`ProdId`),
  ADD KEY `fk_CateId` (`CateId`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`UserId`),
  ADD UNIQUE KEY `unique_UserName` (`UserName`),
  ADD UNIQUE KEY `unique_Email` (`Email`),
  ADD KEY `fk_GroupId` (`GroupId`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `banner_slide_show`
--
ALTER TABLE `banner_slide_show`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `groups`
--
ALTER TABLE `groups`
  MODIFY `GroupId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `orderitems`
--
ALTER TABLE `orderitems`
  MODIFY `OrderId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `orders`
--
ALTER TABLE `orders`
  MODIFY `OrderId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `ProdId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `UserId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `orderitems`
--
ALTER TABLE `orderitems`
  ADD CONSTRAINT `fk_OrderId` FOREIGN KEY (`OrderId`) REFERENCES `orders` (`OrderId`),
  ADD CONSTRAINT `fk_ProdId` FOREIGN KEY (`ProdId`) REFERENCES `products` (`ProdId`);

--
-- Các ràng buộc cho bảng `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `fk_UserId` FOREIGN KEY (`UserId`) REFERENCES `users` (`UserId`);

--
-- Các ràng buộc cho bảng `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `fk_CateId` FOREIGN KEY (`CateId`) REFERENCES `categories` (`CateId`);

--
-- Các ràng buộc cho bảng `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `fk_GroupId` FOREIGN KEY (`GroupId`) REFERENCES `groups` (`GroupId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
