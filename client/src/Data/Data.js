const list = [
  {
    id: 1,
    tieude: "[KHAI TRƯƠNG 149K-219K] Chuỗi Balo, Túi xách được giảm giá đặc biệt nhân ngày mở bán", // ko được dùng kí tự đặt biệt
    img: "https://images.unsplash.com/photo-1604176424472-17cd740f74e9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDE4MzQ1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800", // https://source.unsplash.com/800x850/?bag
    pic1: "https://images.unsplash.com/photo-1604176424472-17cd740f74e9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDE4MzQ1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic2: "https://images.unsplash.com/photo-1604176424472-17cd740f74e9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDE4MzQ1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic3: "https://images.unsplash.com/photo-1604176424472-17cd740f74e9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDE4MzQ1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic4: "https://images.unsplash.com/photo-1604176424472-17cd740f74e9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDE4MzQ1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic5: "https://images.unsplash.com/photo-1604176424472-17cd740f74e9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDE4MzQ1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    loai: "Balo", // Có thể chia nhiều loại tùy sở thích của bạn 5 loai
    sao: 5.0, // 1 <= sao <= 5, có thể nhận giá trị như 3.8, 2.7 ,4.9
    danhgia: 78,
    daban: 251,
    gia_goc: "1.396.000",
    gia_moi: "266.000",
    price: 266000, // price = gia_moi nhung convert sang int de gui len server (price phai la int)
    discount: "33%", // discount = (gia_goc - gia_moi) / gia_goc
    tonkho: 1100, // sản phẩm còn lại
    liked: 2100,
    danhmuc: "Balo",
    thuonghieu: "Jfla",
    chatlieu: "Vải siêu bền",
    xuatxu: "USA",
    guitu: "Quận Hoàng Mai, Hà Nội",
    mota1:
      "🎉 Balo Minecraft creeper backpack là mẫu ba lô siêu hot mới ra mắt năm 2017. Chất liệu: 100% polyester 🎉 *** Kích thước: 43x30x14cm *** 🌼 Sản xuất bởi J!NX 🌼 Hàng chính hãng USA",
    mota2:
      "🌼 Ba lô được thiết kế dựa trên hoa văn của creeper, với màu xanh làm chủ đạo, bên ngoài là màu xanh nền cỏ của creeper. 🌼 Ngăn chính gồm các hoa văn in mặt của creeper màu ghi, nhìn xa giống như một hang đá vậy 🌼 Ngăn phụ bên ngoài in hình TNT giống như khối thuốc nổ chứa trong người con creeper ^^",
    mota3:
      "Phần phía lưng cũng có hình creeper được may vào lớp đệm, mỗi khóa kéo đều là một khuôn mặt của creeper 🌼 Trọng lượng của ba lô rất nhẹ chỉ hơn 300g",
    shop: {
      ten: "toykids",
      online: "28 Phút Trước",
      danhgia: 220,
      sanpham: 12,
      phanhoi: "95%",
      thamgia: "6 tháng trước",
      follower: "1.5k",
    },
  },
  {
    id: 2,
    tieude: "SALE Vest nam uy tín chất lượng 2 lớp, thiết kế 2 khuy phong cách hàn quốc",
    img: "https://images.unsplash.com/photo-1617113930975-f9c7243ae527?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDE4ODgz&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic1: "https://images.unsplash.com/photo-1617113930975-f9c7243ae527?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDE4ODgz&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic2: "https://images.unsplash.com/photo-1617113930975-f9c7243ae527?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDE4ODgz&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic3: "https://images.unsplash.com/photo-1617113930975-f9c7243ae527?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDE4ODgz&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic4: "https://images.unsplash.com/photo-1617113930975-f9c7243ae527?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDE4ODgz&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic5: "https://images.unsplash.com/photo-1617113930975-f9c7243ae527?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDE4ODgz&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    sao: 3.2,
    danhgia: 36,
    daban: 45,
    gia_goc: "866.200",
    gia_moi: "428.600",
    price: 428600,
    discount: "50%", // discount = (gia_goc - gia_moi) / gia_goc
    tonkho: 11, // sản phẩm còn lại
    liked: 61, // nếu lớn hơn 1000 thì ghi là 1k / 2,1k / 6,9k
    danhmuc: "Áo",
    thuonghieu: "Dior",
    chatlieu: "Vải cao cấp",
    xuatxu: "USA",
    guitu: "Quận Hoàng Mai, Hà Nội",
    mota1: "Men 's alma mater blazer",
    mota2: "Size: M - xl",
    mota3: "Receiving direct orders for embroidery & screen printing",
    shop: {
      ten: "khabanh",
      online: "2 năm trước",
      danhgia: 50,
      sanpham: 21,
      phanhoi: "80%",
      thamgia: "2 năm trước",
      follower: "1.1k",
    },
  },
  {
    id: 3,
    tieude: "Quần Jean Nam Rách Gối Thời Trang AKUBA Form Slimfit",
    img: "https://images.unsplash.com/photo-1520432348192-9cdc52574c87?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDE5NzI0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic1: "https://images.unsplash.com/photo-1520432348192-9cdc52574c87?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDE5NzI0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic2: "https://images.unsplash.com/photo-1520432348192-9cdc52574c87?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDE5NzI0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic3: "https://images.unsplash.com/photo-1520432348192-9cdc52574c87?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDE5NzI0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic4: "https://images.unsplash.com/photo-1520432348192-9cdc52574c87?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDE5NzI0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic5: "https://images.unsplash.com/photo-1520432348192-9cdc52574c87?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDE5NzI0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    sao: 4.2,
    danhgia: 96,
    daban: 105,
    gia_goc: "600.450",
    gia_moi: "390.200",
    price: 390200,
    discount: "35%", // discount = (gia_goc - gia_moi) / gia_goc
    tonkho: 12, // sản phẩm còn lại
    liked: 81, // nếu lớn hơn 1000 thì ghi là 1k / 2,1k / 6,9k
    danhmuc: "Quần",
    thuonghieu: "Gucci",
    chatlieu: "Vải cao cấp",
    xuatxu: "USA",
    guitu: "Quận Tân Bình, TP HCM",
    mota1: "Quần Jean Nam Rách Gối Thời Trang AKUBA - thiết kế theo mẫu mã & kỹ thuật thời trang hiện đại. ",
    mota2:
      "Chất liệu jean dày dặn vừa phải, giúp lên chuẩn form mà vẫn có tính co giãn. Hệ thống túi rộng & tiện lợi. Món đồ được nhiều khách hàng tin dùng lựa chọn.",
    mota3:
      "AKUBA Official Store cảm ơn quý khách hàng đã tin tưởng sản phẩm và mua hàng tại shop, chúc bạn có một ngày mua sắm thật thoải mái cùng AKUBA nhé.",
    shop: {
      ten: "huanrose",
      online: "2 tiếng trước",
      danhgia: 90,
      sanpham: 29,
      phanhoi: "89%",
      thamgia: "1 năm trước",
      follower: "6.1k",
    },
  },
  {
    id: 4,
    tieude: "Mũ Len MG STUDIO Kiểu Dệt Kim Thiết Kế Đơn Giản Hợp Thời Trang Cho Nữ",
    img: "https://images.unsplash.com/photo-1586390044557-2cfbe1a9944b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDIwNTM3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic1: "https://images.unsplash.com/photo-1586390044557-2cfbe1a9944b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDIwNTM3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic2: "https://images.unsplash.com/photo-1586390044557-2cfbe1a9944b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDIwNTM3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic3: "https://images.unsplash.com/photo-1586390044557-2cfbe1a9944b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDIwNTM3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic4: "https://images.unsplash.com/photo-1586390044557-2cfbe1a9944b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDIwNTM3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic5: "https://images.unsplash.com/photo-1586390044557-2cfbe1a9944b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDIwNTM3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    sao: 4.8,
    danhgia: 166,
    daban: 234,
    gia_goc: "100.750",
    gia_moi: "60.570",
    price: 60570,
    discount: "40%", // discount = (gia_goc - gia_moi) / gia_goc
    tonkho: 5, // sản phẩm còn lại
    liked: 181, // nếu lớn hơn 1000 thì ghi là 1k / 2,1k / 6,9k
    danhmuc: "Mũ",
    thuonghieu: "Russi",
    chatlieu: "Cotton",
    xuatxu: "Nga",
    guitu: "Quận Tân Bình, TP HCM",
    mota1: "KÍCH THƯỚC: M (55-59cm) ",
    mota2: " Màu sắc: XANH DƯƠNG/ XANH LÁ/XÁM/ĐỎ RƯỢU/ĐỎ/VÀNG",
    mota3: "Cảm ơn bạn rất nhiều vì đã mua hàng từ chúng tôi",
    shop: {
      ten: "ngango",
      online: "53 phút trước",
      danhgia: 130,
      sanpham: 233,
      phanhoi: "93%",
      thamgia: "14 tháng trước",
      follower: "14.5k",
    },
  },
  {
    id: 5,
    tieude: "Kính mát thời trang Aoron mới 2021 gọng tròn mắt tròng phân cực phiên bản Hàn Quốc nam và nữ AK001",
    img: "https://images.unsplash.com/photo-1531380096452-2c5fa9bb9589?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDIxMDM3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic1: "https://images.unsplash.com/photo-1531380096452-2c5fa9bb9589?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDIxMDM3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic2: "https://images.unsplash.com/photo-1531380096452-2c5fa9bb9589?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDIxMDM3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic3: "https://images.unsplash.com/photo-1531380096452-2c5fa9bb9589?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDIxMDM3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic4: "https://images.unsplash.com/photo-1531380096452-2c5fa9bb9589?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDIxMDM3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic5: "https://images.unsplash.com/photo-1531380096452-2c5fa9bb9589?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDIxMDM3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    sao: 4.9,
    danhgia: 43,
    daban: 93,
    gia_goc: "209.600",
    gia_moi: "185.000",
    price: 60570,
    discount: "11%", // discount = (gia_goc - gia_moi) / gia_goc
    tonkho: 26, // sản phẩm còn lại
    liked: 163, // nếu lớn hơn 1000 thì ghi là 1k / 2,1k / 6,9k
    danhmuc: "Kính",
    thuonghieu: "Aoron",
    chatlieu: "Nhựa",
    xuatxu: "Hàn Quốc",
    guitu: "Quận Thanh Xuân, Hà Nội",
    mota1:
      "Kính mát tuyệt vời trong việc ngăn chặn ánh nắng mặt trời. Bảo vệ đôi mắt nhạy cảm của bạn khỏi các tia cực tím có hại sẽ làm nhăn da mí mắt và làm hỏng thị lực. ",
    mota2: "Giữ cho đôi mắt của bạn khỏe mạnh, tươi sáng và quyến rũ. Hoàn hảo cho kỳ nghỉ ở bãi biển sắp tới của bạn.",
    mota3: "Thích hợp sử dụng khi lái xe, đi bộ, câu cá, và các hoạt động vui chơi, ngoài trời ! Một món quà tuyệt vời cho bạn bè và gia đình",
    shop: {
      ten: "ahihidongok",
      online: "6 phút trước",
      danhgia: 230,
      sanpham: 178,
      phanhoi: "88%",
      thamgia: "22 tháng trước",
      follower: "7.3k",
    },
  },
  {
    id: 6,
    tieude: "Nhẫn đeo tay đính đá kiểu hình học độc lạ sang trọng cho nam",
    img: "https://images.unsplash.com/photo-1575863062476-51cd2be1af0f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDIxNjQ5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic1: "https://images.unsplash.com/photo-1575863062476-51cd2be1af0f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDIxNjQ5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic2: "https://images.unsplash.com/photo-1575863062476-51cd2be1af0f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDIxNjQ5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic3: "https://images.unsplash.com/photo-1575863062476-51cd2be1af0f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDIxNjQ5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic4: "https://images.unsplash.com/photo-1575863062476-51cd2be1af0f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDIxNjQ5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic5: "https://images.unsplash.com/photo-1575863062476-51cd2be1af0f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDIxNjQ5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    sao: 4.5,
    danhgia: 48,
    daban: 273,
    gia_goc: "355.700",
    gia_moi: "215.500",
    price: 215500,
    discount: "39%", // discount = (gia_goc - gia_moi) / gia_goc
    tonkho: 63, // sản phẩm còn lại
    liked: 133, // nếu lớn hơn 1000 thì ghi là 1k / 2,1k / 6,9k
    danhmuc: "Nhẫn",
    thuonghieu: "Venus",
    chatlieu: "Saphire",
    xuatxu: "Đan Mạch",
    guitu: "Quận Thanh Khê, Đà Nẵng",
    mota1: "Thời gian giao hàng dự kiến cho sản phẩm này là từ 7-9 ngày ",
    mota2:
      " Màu sắc thực có thể hơi khác so với hình ảnh do độ phân giải, độ sáng, độ tương phản của màn hình máy tính, ... Mong các bạn thông cảm. Chúc một ngày mua sắm vui vẻ!",
    mota3: "Nếu có câu hỏi hoặc vấn đề với sản phẩm của chúng tôi, bạn có thể gửi cho chúng tôi một tin nhắn.",
    shop: {
      ten: "ahuhudongu",
      online: "1 tiếng trước",
      danhgia: 108,
      sanpham: 298,
      phanhoi: "98%",
      thamgia: "21 tháng trước",
      follower: "3.3k",
    },
  },
  {
    id: 7,
    tieude: "Dây Chuyền Mạ Vàng 925 Đính Ngọc Trai Nhân Tạo Thiết Kế Đơn Giản",
    img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDIyMzEy&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic1: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDIyMzEy&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic2: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDIyMzEy&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic3: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDIyMzEy&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic4: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDIyMzEy&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic5: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDIyMzEy&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    sao: 4.9,
    danhgia: 3600,
    daban: 10100,
    gia_goc: "10.200",
    gia_moi: "5.800",
    price: 5800,
    discount: "43%", // discount = (gia_goc - gia_moi) / gia_goc
    tonkho: 63, // sản phẩm còn lại
    liked: 1900, // nếu lớn hơn 1000 thì ghi là 1k / 2,1k / 6,9k
    danhmuc: "Dây chuyền",
    thuonghieu: "Vengeance",
    chatlieu: "Nhựa",
    xuatxu: "Trung Quốc",
    guitu: "Quận Cẩm Lệ, Đà Nẵng",
    mota1: "Thời gian giao hàng dự kiến cho sản phẩm này là từ 7-9 ngày ",
    mota2: "  Hàng mới 100% và chất lượng cao!",
    mota3: "Do sự khác biệt giữa các màn hình khác nhau, hình ảnh có thể không phản ánh màu sắc thực tế của sản phẩm.",
    shop: {
      ten: "ahahadongon",
      online: "3 tiếng trước",
      danhgia: 158,
      sanpham: 301,
      phanhoi: "68%",
      thamgia: "21 tháng trước",
      follower: "13.3k",
    },
  },
  {
    id: 8,
    tieude: "Giày thể thao - Sneaker đệm khí - air max 90",
    img: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDIzMDk0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic1: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDIzMDk0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic2: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDIzMDk0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic3: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDIzMDk0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic4: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDIzMDk0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic5: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDIzMDk0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    sao: 4.8,
    danhgia: 26,
    daban: 62,
    gia_goc: "1.000.900",
    gia_moi: "700.000",
    price: 700000,
    discount: "30%", // discount = (gia_goc - gia_moi) / gia_goc
    tonkho: 43, // sản phẩm còn lại
    liked: 271, // nếu lớn hơn 1000 thì ghi là 1k / 2,1k / 6,9k
    danhmuc: "Giày",
    thuonghieu: "Nike",
    chatlieu: "Cao su cao cấp",
    xuatxu: "USA",
    guitu: "Quận 1, TP HCM",
    mota1:
      "Năm 2020 đánh dấu kỷ niệm 30 năm Air Max 90 mang tính biểu tượng, vì vậy thương hiệu này đã mang trở lại đôi giày sneaker yêu thích của mình trong một số phối màu theo phong cách OG ba trong số đó là“Hyper Turquoise,” “Hyper Grape” và “Volt”",
    mota2: " Điều đó làm cho đôi sneaker này có một kiểu dáng đẹp hơn một chút so với các phiên bản khác được đưa ra thị trường trong những năm qua.",
    mota3: "Sneaker Soul - PTMEN - Sneaker365",
    shop: {
      ten: "vuagiay",
      online: "45 phút trước",
      danhgia: 655,
      sanpham: 113,
      phanhoi: "97%",
      thamgia: "13 tháng trước",
      follower: "5.7k",
    },
  },
  {
    id: 9,
    tieude: "Quần tây âu công sở nữ đẹp BUTTERFLY cạp lưng cao, dáng Baggy HAREM dễ mặc",
    img: "https://images.unsplash.com/photo-1603344797033-f0f4f587ab60?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDMwODA1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic1: "https://images.unsplash.com/photo-1603344797033-f0f4f587ab60?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDMwODA1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic2: "https://images.unsplash.com/photo-1603344797033-f0f4f587ab60?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDMwODA1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic3: "https://images.unsplash.com/photo-1603344797033-f0f4f587ab60?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDMwODA1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic4: "https://images.unsplash.com/photo-1603344797033-f0f4f587ab60?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDMwODA1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic5: "https://images.unsplash.com/photo-1603344797033-f0f4f587ab60?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDMwODA1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    sao: 4.5,
    danhgia: 176,
    daban: 225,
    gia_goc: "219.000",
    gia_moi: "109.000",
    price: 109000,
    discount: "50%", // discount = (gia_goc - gia_moi) / gia_goc
    tonkho: 47, // sản phẩm còn lại
    liked: 131, // nếu lớn hơn 1000 thì ghi là 1k / 2,1k / 6,9k
    danhmuc: "Quần",
    thuonghieu: "Butterfly",
    chatlieu: "Vải cao cấp",
    xuatxu: "Ý",
    guitu: "Quận Ba Đình, Hà Nội",
    mota1: "Quần tây âu công sở nữ đẹp BUTTERFLY cạp lưng cao, dáng Baggy HAREM - Q03",
    mota2: " Size S (45-50kg) - Size M (50-55kg) - Size L (55-60kg) - Size XL (60-65kg)",
    mota3:
      "Bảng Size Chart chỉ mang tính chất ước lượng, tùy thuộc vào số đo cơ thể mỗi người hay kiểu dáng sản phẩm và chất liệu vải khác nhau sẽ có sự chênh lệch nhất định",
    shop: {
      ten: "pekhoc",
      online: "33 phút trước",
      danhgia: 696,
      sanpham: 69,
      phanhoi: "96%",
      thamgia: "3 tháng trước",
      follower: "6.9k",
    },
  },
  {
    id: 10,
    tieude: "Túi Prada Milano - Super Fullbox Size 26 - Túi Xách Da Đeo Vai Nữ",
    img: "https://images.unsplash.com/photo-1620999586298-cb742bdb7e40?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDMxNzc0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic1: "https://images.unsplash.com/photo-1620999586298-cb742bdb7e40?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDMxNzc0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic2: "https://images.unsplash.com/photo-1620999586298-cb742bdb7e40?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDMxNzc0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic3: "https://images.unsplash.com/photo-1620999586298-cb742bdb7e40?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDMxNzc0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic4: "https://images.unsplash.com/photo-1620999586298-cb742bdb7e40?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDMxNzc0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic5: "https://images.unsplash.com/photo-1620999586298-cb742bdb7e40?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDMxNzc0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    sao: 5,
    danhgia: 27,
    daban: 30,
    gia_goc: "80.450.000",
    gia_moi: "69.990.000",
    price: 69990000,
    discount: "13%", // discount = (gia_goc - gia_moi) / gia_goc
    tonkho: 2, // sản phẩm còn lại
    liked: 29, // nếu lớn hơn 1000 thì ghi là 1k / 2,1k / 6,9k
    danhmuc: "Túi",
    thuonghieu: "Prada",
    chatlieu: "Vải cao cấp",
    xuatxu: "Ý",
    guitu: "Quận Sơn Trà, Đà Nẵng",
    mota1:
      "Khóa từ tính nhạy bén: Để không làm tốn thời gian và giúp chị em đóng mở nắp gập nhanh nhất thì Prada đã trang bị khóa từ tính nhạy bén. Phần khóa này được xử lý tinh tế nên có độ nhạy cao và rất tiện lợi khi sử dụng. ",
    mota2:
      "Tay cầm túi linh hoạt: Phần tay cầm của túi xách Prada Cleo brushed leather shoulder bag with flap chính hãng được tạo nên từ da cao cấp. Tay cầm được gắn vào túi bằng chi tiết kim loại đẹp mắt. ",
    mota3:
      "Tất Cả Các Sản Phẩm Trước Khi Giao Tới Tay Khách Hàng Đều Được Kiểm Tra Chất Lượng Sản Phẩm Để Tránh Trường Hợp Sản Phẩm Bị Lỗi Và Đảm Bảo Đạt Chất Lượng Tốt Nhất Cho Khách Hàng",
    shop: {
      ten: "datker",
      online: "5 tiếng trước",
      danhgia: 22,
      sanpham: 14,
      phanhoi: "95%",
      thamgia: "1 tháng trước",
      follower: "1.4k",
    },
  },
  {
    id: 11,
    tieude: "Áo Blazer Caro Form Rông Dài Tay BZ09, Áo Khoác Vest",
    img: "https://images.unsplash.com/photo-1609840170480-4c440bcd5d8f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDMxMzk2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic1: "https://images.unsplash.com/photo-1609840170480-4c440bcd5d8f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDMxMzk2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic2: "https://images.unsplash.com/photo-1609840170480-4c440bcd5d8f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDMxMzk2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic3: "https://images.unsplash.com/photo-1609840170480-4c440bcd5d8f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDMxMzk2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic4: "https://images.unsplash.com/photo-1609840170480-4c440bcd5d8f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDMxMzk2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic5: "https://images.unsplash.com/photo-1609840170480-4c440bcd5d8f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDMxMzk2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    sao: 3.5,
    danhgia: 7,
    daban: 10,
    gia_goc: "450.000",
    gia_moi: "299.000",
    price: 299000,
    discount: "34%", // discount = (gia_goc - gia_moi) / gia_goc
    tonkho: 22, // sản phẩm còn lại
    liked: 2, // nếu lớn hơn 1000 thì ghi là 1k / 2,1k / 6,9k
    danhmuc: "Áo",
    thuonghieu: "BZ09",
    chatlieu: "Vải thường",
    xuatxu: "Trung Quốc",
    guitu: "Quận Ngũ Hành Sơn, Đà Nẵng",
    mota1: "Ưu đãi 10% cho các sản phẩm đặt trước với 5 khách hàng, inbox shop để lấy mã giảm giá nha.",
    mota2:
      "Áo blazer nam BZ09 thiết kế basic dáng ngắn, form rộng phù hợp với nhiều dáng người,dễ phối đồ khi mặc. Thiết kế unisex thích hợp với cả nam và nữ",
    mota3: "Shop rất mong nhận được sự góp ý của các bạn về trải nghiệm mua hàng để chúng mình ngày càng nâng cấp phục vụ tốt hơn.",
    shop: {
      ten: "FPT_DN Prime",
      online: "33 phút trước",
      danhgia: 22,
      sanpham: 14,
      phanhoi: "75%",
      thamgia: "1 tháng trước",
      follower: "400",
    },
  },
  {
    id: 12,
    tieude: "Đồng hồ đeo tay xi mạ vàng sang trọng",
    img: "https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDMyODg1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic1: "https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDMyODg1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic2: "https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDMyODg1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic3: "https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDMyODg1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic4: "https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDMyODg1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic5: "https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDMyODg1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    sao: 3.7,
    danhgia: 17,
    daban: 39,
    gia_goc: "102.920",
    gia_moi: "72.044",
    price: 72044,
    discount: "30%", // discount = (gia_goc - gia_moi) / gia_goc
    tonkho: 12, // sản phẩm còn lại
    liked: 9, // nếu lớn hơn 1000 thì ghi là 1k / 2,1k / 6,9k
    danhmuc: "Đồng hồ",
    thuonghieu: "Casio",
    chatlieu: "Hợp kim",
    xuatxu: "Trung Quốc",
    guitu: "Quận 3, TP HCM",
    mota1: "Thời gian giao hàng dự kiến cho sản phẩm này là từ 7-9 ngày",
    mota2: "Hàng mới 100%, chất lượng cao ",
    mota3: " Các sản phẩm có chất liệu vàng, kim cương, đá quý trong shop đều là xi mạ/ nhân tạo.",
    shop: {
      ten: "CuongWjbu",
      online: "23 phút trước",
      danhgia: 37,
      sanpham: 19,
      phanhoi: "85%",
      thamgia: "2 tháng trước",
      follower: "900",
    },
  },
  {
    id: 13,
    tieude: "Mũ cói mềm, nón cói đi biển nhỏ mẹ và bé vành rộng phối nơ ren phong cách vintage chống nắng",
    img: "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDMzMzE3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic1: "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDMzMzE3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic2: "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDMzMzE3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic3: "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDMzMzE3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic4: "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDMzMzE3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic5: "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDMzMzE3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    sao: 4.9,
    danhgia: 388,
    daban: 1100,
    gia_goc: "125.000",
    gia_moi: "57.000",
    price: 57000,
    discount: "54%", // discount = (gia_goc - gia_moi) / gia_goc
    tonkho: 28, // sản phẩm còn lại
    liked: 964, // nếu lớn hơn 1000 thì ghi là 1k / 2,1k / 6,9k
    danhmuc: "Mũ",
    thuonghieu: "Nonson",
    chatlieu: "Vải siêu bền",
    xuatxu: "Việt Nam",
    guitu: "Huyện Ba Vì, Hà Nội",
    mota1: "MŨ CÓI MỀM, NÓN CÓI ĐI BIỂN NHỎ MẸ VÀ BÉ VÀNH RỘNG PHỐI NƠ REN PHONG CÁCH VINTAGE CHỐNG NẮNG",
    mota2: "Hàng mới 100%, chất lượng cao ",
    mota3: " Sản phẩm 100% giống hình ảnh và mô tả ",
    shop: {
      ten: "KhanhSky",
      online: "47 phút trước",
      danhgia: 807,
      sanpham: 703,
      phanhoi: "95%",
      thamgia: "10 tháng trước",
      follower: "43.3k",
    },
  },
  {
    id: 14,
    tieude: "Kính Gọng Đen Cá Tính NOBITA Dễ Thương ",
    img: "https://images.unsplash.com/photo-1518655061710-5ccf392c275a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDMzODMx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic1: "https://images.unsplash.com/photo-1518655061710-5ccf392c275a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDMzODMx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic2: "https://images.unsplash.com/photo-1518655061710-5ccf392c275a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDMzODMx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic3: "https://images.unsplash.com/photo-1518655061710-5ccf392c275a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDMzODMx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic4: "https://images.unsplash.com/photo-1518655061710-5ccf392c275a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDMzODMx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic5: "https://images.unsplash.com/photo-1518655061710-5ccf392c275a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDMzODMx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    sao: 4.8,
    danhgia: 743,
    daban: 2300,
    gia_goc: "18.000",
    gia_moi: "12.000",
    price: 12000,
    discount: "33%", // discount = (gia_goc - gia_moi) / gia_goc
    tonkho: 128, // sản phẩm còn lại
    liked: 580, // nếu lớn hơn 1000 thì ghi là 1k / 2,1k / 6,9k
    danhmuc: "Kính",
    thuonghieu: "Doraemon",
    chatlieu: "Nhựa tổng hợp",
    xuatxu: "Trung Quốc",
    guitu: "Quận Hoàng Mai, Hà Nội",
    mota1: "Kính gọng nhiều kiểu: vuông - tròn sang trọng",
    mota2: "Form kính ôm vào sống mũi làm nổi bật mũi cao",
    mota3: " Thích hợp cho việc sử dụng khi đi đường, dã ngoại, để tránh được bụi bặm hoặc ánh nắng mặt trời, giúp bảo vệ đôi mắt của bạn",
    shop: {
      ten: "TienBip",
      online: "17 phút trước",
      danhgia: 1107,
      sanpham: 903,
      phanhoi: "95%",
      thamgia: "5 tháng trước",
      follower: "73.3k",
    },
  },
  {
    id: 15,
    tieude: "Nhẫn Mạ Vàng Hồng Đính Đá Ruby Thời Trang S925",
    img: "https://images.unsplash.com/photo-1588821507072-a33b02ec7081?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDM0MjE0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic1: "https://images.unsplash.com/photo-1588821507072-a33b02ec7081?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDM0MjE0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic2: "https://images.unsplash.com/photo-1588821507072-a33b02ec7081?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDM0MjE0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic3: "https://images.unsplash.com/photo-1588821507072-a33b02ec7081?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDM0MjE0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic4: "https://images.unsplash.com/photo-1588821507072-a33b02ec7081?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDM0MjE0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic5: "https://images.unsplash.com/photo-1588821507072-a33b02ec7081?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDM0MjE0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    sao: 3.8,
    danhgia: 3,
    daban: 5,
    gia_goc: "57.000",
    gia_moi: "22.000",
    price: 22000,
    discount: "61%", // discount = (gia_goc - gia_moi) / gia_goc
    tonkho: 28, // sản phẩm còn lại
    liked: 580, // nếu lớn hơn 1000 thì ghi là 1k / 2,1k / 6,9k
    danhmuc: "Nhẫn",
    thuonghieu: "Fekar",
    chatlieu: "Nhựa tổng hợp",
    xuatxu: "Trung Quốc",
    guitu: "Huyện Ba Vì, Hà Nội",
    mota1: "Dear customers, welcome to CHENXIAM & Jewelry.",
    mota2: "The products in the store are all in stock, you can place an order at any time",
    mota3: "Send within 48 hours after placing the order, and it will be delivered in about 7 days.",
    shop: {
      ten: "ChuaHe",
      online: "27 tiếng trước",
      danhgia: 7,
      sanpham: 10,
      phanhoi: "65%",
      thamgia: "1 tháng trước",
      follower: "0",
    },
  },
  {
    id: 16,
    tieude: "Dây chuyền may mắn handmade thổ cẩm đính đá lấp lánh",
    img: "https://images.unsplash.com/photo-1562947429-2a6546643e8d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDM0NTgw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic1: "https://images.unsplash.com/photo-1562947429-2a6546643e8d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDM0NTgw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic2: "https://images.unsplash.com/photo-1562947429-2a6546643e8d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDM0NTgw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic3: "https://images.unsplash.com/photo-1562947429-2a6546643e8d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDM0NTgw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic4: "https://images.unsplash.com/photo-1562947429-2a6546643e8d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDM0NTgw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic5: "https://images.unsplash.com/photo-1562947429-2a6546643e8d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NDM0NTgw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    sao: 4.6,
    danhgia: 13,
    daban: 25,
    gia_goc: "92.800",
    gia_moi: "62.000",
    price: 62000,
    discount: "33%", // discount = (gia_goc - gia_moi) / gia_goc
    tonkho: 35, // sản phẩm còn lại
    liked: 18, // nếu lớn hơn 1000 thì ghi là 1k / 2,1k / 6,9k
    danhmuc: "Dây chuyền",
    thuonghieu: "Hoohoo",
    chatlieu: "Đá biển",
    xuatxu: "Việt Nam",
    guitu: "Phú Quốc, Việt Nam",
    mota1: "Make you elegant and charming.",
    mota2: "Wonderful gift for you, lover, family and friend.",
    mota3: "A nice ornaments for some special occasion such as dinner party, banquet, festival.",
    shop: {
      ten: "Anonymous",
      online: "31 phút trước",
      danhgia: 77,
      sanpham: 34,
      phanhoi: "86%",
      thamgia: "2 tháng trước",
      follower: "200",
    },
  },
  {
    id: 17,
    tieude: "Máy ảnh Samsung Vluu EX1 màn hình xoay lật quay phim tốt",
    img: "https://images.unsplash.com/photo-1495745966610-2a67f2297e5e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTE5Mzc0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic1: "https://images.unsplash.com/photo-1495745966610-2a67f2297e5e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTE5Mzc0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic2: "https://images.unsplash.com/photo-1495745966610-2a67f2297e5e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTE5Mzc0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic3: "https://images.unsplash.com/photo-1495745966610-2a67f2297e5e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTE5Mzc0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic4: "https://images.unsplash.com/photo-1495745966610-2a67f2297e5e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTE5Mzc0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic5: "https://images.unsplash.com/photo-1495745966610-2a67f2297e5e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTE5Mzc0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    sao: 4.4,
    danhgia: 12,
    daban: 18,
    gia_goc: "6.892.800",
    gia_moi: "5.970.000",
    price: 5970000,
    discount: "13%", // discount = (gia_goc - gia_moi) / gia_goc
    tonkho: 4, // sản phẩm còn lại
    liked: 10, // nếu lớn hơn 1000 thì ghi là 1k / 2,1k / 6,9k
    danhmuc: "Máy ảnh",
    thuonghieu: "Samsung",
    chatlieu: "Hợp kim",
    xuatxu: "Hàn Quốc",
    guitu: "Sơn Trà, Đà Nẵng",
    mota1: "Máy họat động hoàn hảo mọi chức năng",
    mota2: "đủ pin sạc thẻ nhớ và dây đeo",
    mota3: "Hàng có sẵn tại Shop, ảnh vừa mới chụp tại cửa hàng, SL có hạn",
    shop: {
      ten: "Anonymous",
      online: "41 phút trước",
      danhgia: 23,
      sanpham: 24,
      phanhoi: "88%",
      thamgia: "2 tháng trước",
      follower: "98",
    },
  },
  {
    id: 18,
    tieude: "Túi tote Vải canvas mềm Đẹp Cực Hot có khóa miệng đựng vừa a4 tặng quà xinh",
    img: "https://images.unsplash.com/photo-1599261452748-85ec9f3465d5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTE5OTM5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic1: "https://images.unsplash.com/photo-1599261452748-85ec9f3465d5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTE5OTM5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic2: "https://images.unsplash.com/photo-1599261452748-85ec9f3465d5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTE5OTM5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic3: "https://images.unsplash.com/photo-1599261452748-85ec9f3465d5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTE5OTM5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic4: "https://images.unsplash.com/photo-1599261452748-85ec9f3465d5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTE5OTM5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic5: "https://images.unsplash.com/photo-1599261452748-85ec9f3465d5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTE5OTM5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    sao: 4.9,
    danhgia: 3900,
    daban: 9879,
    gia_goc: "85.000",
    gia_moi: "50000",
    price: 50000,
    discount: "41%", // discount = (gia_goc - gia_moi) / gia_goc
    tonkho: 992, // sản phẩm còn lại
    liked: 2800, // nếu lớn hơn 1000 thì ghi là 1k / 2,1k / 6,9k
    danhmuc: "Túi",
    thuonghieu: "Tote",
    chatlieu: "Vải canvas",
    xuatxu: "Hàn Quốc",
    guitu: "Huyện Ba Vì, Hà Nội",
    mota1: "Túi tote vải canvas đa dạng họa tiết tha hồ lựa chọn, là món đồ ưa chuộng nhất của giới trẻ hiện nay ",
    mota2: "Kích thước (37X33X6cm)",
    mota3: "Cảm ơn quý khách đã quan tâm đến sản phẩm bên Shop.Chúc quý khách có một trải nghiệm mua hàng tuyệt vời ",
    shop: {
      ten: "Anonymous",
      online: "26 phút trước",
      danhgia: 22223,
      sanpham: 148,
      phanhoi: "97%",
      thamgia: "13 tháng trước",
      follower: "32898",
    },
  },
  {
    id: 19,
    tieude: "Đồ Chơi Lắp Ráp Kiểu LEGO, Lắp Ghép Mô Hình",
    img: "https://images.unsplash.com/photo-1612355524120-462e49e4ffe6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTIwNTMx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic1: "https://images.unsplash.com/photo-1612355524120-462e49e4ffe6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTIwNTMx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic2: "https://images.unsplash.com/photo-1612355524120-462e49e4ffe6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTIwNTMx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic3: "https://images.unsplash.com/photo-1612355524120-462e49e4ffe6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTIwNTMx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic4: "https://images.unsplash.com/photo-1612355524120-462e49e4ffe6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTIwNTMx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic5: "https://images.unsplash.com/photo-1612355524120-462e49e4ffe6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTIwNTMx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    sao: 5.0,
    danhgia: 23,
    daban: 87,
    gia_goc: "385.000",
    gia_moi: "250.000",
    price: 250000,
    discount: "35%", // discount = (gia_goc - gia_moi) / gia_goc
    tonkho: 31, // sản phẩm còn lại
    liked: 180, // nếu lớn hơn 1000 thì ghi là 1k / 2,1k / 6,9k
    danhmuc: "Đồ chơi",
    thuonghieu: "Lego",
    chatlieu: "Nhựa tổng hợp",
    xuatxu: "Trung Quốc",
    guitu: "Quận Thanh Xuân, Hà Nội",
    mota1: "Các khối xây dựng được thiết kế đặc biệt cho bé. Chúng có kích thước trung bình và được làm tròn ở các góc, rất an toàn cho bé.",
    mota2:
      "Nó đã thông qua chứng nhận hệ thống chất lượng ISO 9001 và đáp ứng các tiêu chuẩn an toàn đồ chơi nghiêm ngặt của Trung Quốc, Hoa Kỳ và Cộng đồng Châu Âu.",
    mota3:
      "Đồ chơi lắp ráp là một đồ chơi tốt cho cha mẹ và trẻ em, giúp nuôi dưỡng cảm xúc của cha mẹ và trẻ nhỏ , và trẻ nhỏ cũng rất vui và thích thú  khi được thỏa sức sáng tạo trong trò chơi",
    shop: {
      ten: "mykingdom",
      online: "52 phút trước",
      danhgia: 323,
      sanpham: 48,
      phanhoi: "87%",
      thamgia: "23 tháng trước",
      follower: "2898",
    },
  },
  {
    id: 20,
    tieude: "iPhone 8 64GB cũ",
    img: "https://images.unsplash.com/photo-1563902494-d672b2637eb5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTIxMDIz&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic1: "https://images.unsplash.com/photo-1563902494-d672b2637eb5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTIxMDIz&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic2: "https://images.unsplash.com/photo-1563902494-d672b2637eb5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTIxMDIz&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic3: "https://images.unsplash.com/photo-1563902494-d672b2637eb5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTIxMDIz&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic4: "https://images.unsplash.com/photo-1563902494-d672b2637eb5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTIxMDIz&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic5: "https://images.unsplash.com/photo-1563902494-d672b2637eb5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTIxMDIz&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    sao: 4.5,
    danhgia: 10,
    daban: 27,
    gia_goc: "6.885.000",
    gia_moi: "4.980.000",
    price: 4980000,
    discount: "28%", // discount = (gia_goc - gia_moi) / gia_goc
    tonkho: 27, // sản phẩm còn lại
    liked: 18, // nếu lớn hơn 1000 thì ghi là 1k / 2,1k / 6,9k
    danhmuc: "Điện thoại",
    thuonghieu: "Apple",
    chatlieu: "Kim loại",
    xuatxu: "Trung Quốc",
    guitu: "Quận Hải Châu, Đà Nẵng",
    mota1:
      "iPhone 8 kết hợp giữa những đường nét đã làm nên chuẩn mực, thương hiệu với sự thời thượng và hiện đại của mặt lưng phủ kính cường lực thay vì nguyên khối kim loại",
    mota2:
      "Phong cách mới cũng đồng thời loại bỏ hoàn toàn những chi tiết thừa như phần anten trên mặt lưng để đưa thiết kế iPhone 8 đến độ hoàn hảo.",
    mota3: "Camera trước vẫn có độ phân giải 7 MP cùng khẩu độ F/2.2 cho hình ảnh chân thực, sắc nét mà không hề quá ảo diệu.",
    shop: {
      ten: "lmaooooo",
      online: "3 tiếng trước",
      danhgia: 43,
      sanpham: 36,
      phanhoi: "87%",
      thamgia: "3 tháng trước",
      follower: "28",
    },
  },
  {
    id: 21,
    tieude: "Kem Chống Nắng EVERY HUMANS Không Gây Nhờn Rít Không Màu",
    img: "https://images.unsplash.com/photo-1598662972299-5408ddb8a3dc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTIyMTU5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic1: "https://images.unsplash.com/photo-1598662972299-5408ddb8a3dc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTIyMTU5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic2: "https://images.unsplash.com/photo-1598662972299-5408ddb8a3dc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTIyMTU5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic3: "https://images.unsplash.com/photo-1598662972299-5408ddb8a3dc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTIyMTU5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic4: "https://images.unsplash.com/photo-1598662972299-5408ddb8a3dc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTIyMTU5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic5: "https://images.unsplash.com/photo-1598662972299-5408ddb8a3dc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTIyMTU5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    sao: 4.9,
    danhgia: 90,
    daban: 186,
    gia_goc: "885.000",
    gia_moi: "480.000",
    price: 4980000,
    discount: "46%", // discount = (gia_goc - gia_moi) / gia_goc
    tonkho: 57, // sản phẩm còn lại
    liked: 102, // nếu lớn hơn 1000 thì ghi là 1k / 2,1k / 6,9k
    danhmuc: "Mỹ phẩm",
    thuonghieu: "EVERY HUMANS",
    chatlieu: "Kem",
    xuatxu: "USA",
    guitu: "Quận Bình Thạnh, TP HCM",
    mota1: "Giá của shop thấp hơn giá niêm yết của nhà sản xuất từ 5-15%",
    mota2: " Chúng tôi cam kết hoàn tiền 300% nếu phát hiện hàng giả tại shop",
    mota3: "Thích hợp cho mọi loại da, kể cả da nhạy cảm, da nhờn, mụn, lỗ chân lông to...",
    shop: {
      ten: "lmeooooo",
      online: "1 tiếng trước",
      danhgia: 143,
      sanpham: 76,
      phanhoi: "89%",
      thamgia: "10 tháng trước",
      follower: "578",
    },
  },
  {
    id: 22,
    tieude: "Tai nghe airpods bluetooth cao cấp định vị Đổi tên dùng cho IOS và Androi",
    img: "https://images.unsplash.com/photo-1606741965429-8d76ff50bb2f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTIyNjc2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic1: "https://images.unsplash.com/photo-1606741965429-8d76ff50bb2f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTIyNjc2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic2: "https://images.unsplash.com/photo-1606741965429-8d76ff50bb2f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTIyNjc2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic3: "https://images.unsplash.com/photo-1606741965429-8d76ff50bb2f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTIyNjc2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic4: "https://images.unsplash.com/photo-1606741965429-8d76ff50bb2f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTIyNjc2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic5: "https://images.unsplash.com/photo-1606741965429-8d76ff50bb2f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTIyNjc2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    sao: 4.7,
    danhgia: 520,
    daban: 2859,
    gia_goc: "299.000",
    gia_moi: "205.000",
    price: 205000,
    discount: "31%", // discount = (gia_goc - gia_moi) / gia_goc
    tonkho: 2357, // sản phẩm còn lại
    liked: 599, // nếu lớn hơn 1000 thì ghi là 1k / 2,1k / 6,9k
    danhmuc: "Tai nghe",
    thuonghieu: "Apple",
    chatlieu: "Nhựa",
    xuatxu: "Trung Quốc",
    guitu: "Quận Thanh Xuân, Hà Nội",
    mota1: "Thiết kế đơn giản, thời trang và nhỏ gọn",
    mota2: "Trang bị chip mới, cho tốc độ kết nối, chuyển đổi giữa các thiết bị nhanh chóng",
    mota3: "Chất âm cho ra dải bass, mid, treble vô cùng tuyệt vời",
    shop: {
      ten: "omggggggg",
      online: "24 phút trước",
      danhgia: 4300,
      sanpham: 57,
      phanhoi: "91%",
      thamgia: "22 tháng trước",
      follower: "7578",
    },
  },
  {
    id: 23,
    tieude: "Áo Khoác Chống Nắng Vải Lụa Lạnh Thoáng Khí Thời Trang Mùa Hè Cho Nam ",
    img: "https://images.unsplash.com/photo-1511107426995-9f2a136ea788?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTIzMzU0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic1: "https://images.unsplash.com/photo-1511107426995-9f2a136ea788?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTIzMzU0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic2: "https://images.unsplash.com/photo-1511107426995-9f2a136ea788?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTIzMzU0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic3: "https://images.unsplash.com/photo-1511107426995-9f2a136ea788?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTIzMzU0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic4: "https://images.unsplash.com/photo-1511107426995-9f2a136ea788?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTIzMzU0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic5: "https://images.unsplash.com/photo-1511107426995-9f2a136ea788?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTIzMzU0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    sao: 4.8,
    danhgia: 20,
    daban: 25,
    gia_goc: "567.000",
    gia_moi: "234.000",
    price: 234000,
    discount: "59%", // discount = (gia_goc - gia_moi) / gia_goc
    tonkho: 35, // sản phẩm còn lại
    liked: 29, // nếu lớn hơn 1000 thì ghi là 1k / 2,1k / 6,9k
    danhmuc: "Áo",
    thuonghieu: "Adidas",
    chatlieu: "Nỉ",
    xuatxu: "Trung Quốc",
    guitu: "Quận Thanh Xuân, Hà Nội",
    mota1: "Size M: dưới 55kg, Cao dưới 1m60",
    mota2: "Size L: từ 56-65kg , Cao 1m61 - 1m70",
    mota3: "Size XL: từ 66-75 kg, Cao : 1m71 trở lên",
    shop: {
      ten: "blueeeeee",
      online: "22 phút trước",
      danhgia: 60,
      sanpham: 40,
      phanhoi: "90%",
      thamgia: "20 tháng trước",
      follower: "278",
    },
  },
  {
    id: 24,
    tieude: "Nhẫn bạc Tlee, nhẫn tròn trơn basic cá tinh, đơn giản ",
    img: "https://images.unsplash.com/photo-1535916474714-c8b1a0d55d2e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTIzOTcx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic1: "https://images.unsplash.com/photo-1535916474714-c8b1a0d55d2e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTIzOTcx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic2: "https://images.unsplash.com/photo-1535916474714-c8b1a0d55d2e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTIzOTcx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic3: "https://images.unsplash.com/photo-1535916474714-c8b1a0d55d2e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTIzOTcx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic4: "https://images.unsplash.com/photo-1535916474714-c8b1a0d55d2e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTIzOTcx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic5: "https://images.unsplash.com/photo-1535916474714-c8b1a0d55d2e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTIzOTcx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    sao: 4.9,
    danhgia: 4300,
    daban: 7050,
    gia_goc: "67.000",
    gia_moi: "34.000",
    price: 34000,
    discount: "49%", // discount = (gia_goc - gia_moi) / gia_goc
    tonkho: 6635, // sản phẩm còn lại
    liked: 2900, // nếu lớn hơn 1000 thì ghi là 1k / 2,1k / 6,9k
    danhmuc: "Nhẫn",
    thuonghieu: "Tlee",
    chatlieu: "Bạc",
    xuatxu: "Việt Nam",
    guitu: "Quận Ba Đình, Hà Nội",
    mota1: "Mẫu nhẫn nữ bạc được thiết kế thanh lịch, trẻ trung phù hợp với mọi lứa tuổi. ",
    mota2: "đeo thời trang hàng ngày, làm quà tặng người thân, bạn bè, người yêu ....",
    mota3: " Size nhẫn : Bạn đo size tay theo hướng dẫn trên ảnh sản phẩm rồi chọn kích thước thích hợp",
    shop: {
      ten: "reddddddddd",
      online: "12 phút trước",
      danhgia: 26660,
      sanpham: 440,
      phanhoi: "96%",
      thamgia: "29 tháng trước",
      follower: "71200",
    },
  },
  {
    id: 25,
    tieude: "Máy Ảnh Canon EOS M200 KIT",
    img: "https://images.unsplash.com/photo-1551728715-941acefa8a3d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTgzODQ1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic1: "https://images.unsplash.com/photo-1551728715-941acefa8a3d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTgzODQ1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic2: "https://images.unsplash.com/photo-1551728715-941acefa8a3d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTgzODQ1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic3: "https://images.unsplash.com/photo-1551728715-941acefa8a3d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTgzODQ1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic4: "https://images.unsplash.com/photo-1551728715-941acefa8a3d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTgzODQ1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic5: "https://images.unsplash.com/photo-1551728715-941acefa8a3d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTgzODQ1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    sao: 4.9,
    danhgia: 13,
    daban: 25,
    gia_goc: "13.670.000",
    gia_moi: "10.994.000",
    price: 10944000,
    discount: "20%", // discount = (gia_goc - gia_moi) / gia_goc
    tonkho: 25, // sản phẩm còn lại
    liked: 10, // nếu lớn hơn 1000 thì ghi là 1k / 2,1k / 6,9k
    danhmuc: "Máy ảnh",
    thuonghieu: "Canon",
    chatlieu: "Hợp kim",
    xuatxu: "Nhật Bản",
    guitu: "Quận Ba Đình, Hà Nội",
    mota1: "Sản phẩm mới nguyên hộp và phụ kiện từ nhà sản xuất",
    mota2:
      "Vượt trội hơn smartphone với khả năng chụp nhiều ảnh đạt chất lượng cao hơn, để bạn ghi lại mọi khoảnh khắc quan trọng và thể hiện chủ thể của mình một cách hoàn chỉnh nhất.",
    mota3:
      "Thể hiện tài năng sáng tạo của bạn với bạn bè và những người mến mộ bạn với EOS M200, bằng cách kết nối máy ảnh đến thiết bị thông minh của bạn qua Wi-Fi hoặc Bluetooth để thực hiện truyền tải ảnh tự động, chia sẻ trực tuyến hay là điều khiển máy ảnh từ xa.",
    shop: {
      ten: "bruhhhhhh",
      online: "10 phút trước",
      danhgia: 46,
      sanpham: 24,
      phanhoi: "97%",
      thamgia: "3 tháng trước",
      follower: "51",
    },
  },
  {
    id: 26,
    tieude: "Mô hình nhân vật Starwars - Lego",
    img: "https://images.unsplash.com/photo-1608889825271-9696283ab804?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTg0NTcy&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic1: "https://images.unsplash.com/photo-1608889825271-9696283ab804?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTg0NTcy&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic2: "https://images.unsplash.com/photo-1608889825271-9696283ab804?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTg0NTcy&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic3: "https://images.unsplash.com/photo-1608889825271-9696283ab804?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTg0NTcy&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic4: "https://images.unsplash.com/photo-1608889825271-9696283ab804?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTg0NTcy&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic5: "https://images.unsplash.com/photo-1608889825271-9696283ab804?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTg0NTcy&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    sao: 5.0,
    danhgia: 3,
    daban: 7,
    gia_goc: "70.000",
    gia_moi: "40.000",
    price: 40000,
    discount: "43%", // discount = (gia_goc - gia_moi) / gia_goc
    tonkho: 8, // sản phẩm còn lại
    liked: 10, // nếu lớn hơn 1000 thì ghi là 1k / 2,1k / 6,9k
    danhmuc: "Đồ chơi",
    thuonghieu: "Lego",
    chatlieu: "Nhựa tổng hợp",
    xuatxu: "USA",
    guitu: "Quận Ba Đình, Hà Nội",
    mota1: "Kích thước hộp: 15.5cm x 7.5cm x 3.5cm, nhân vật cao khoảng 14cm, xoay được tay, lưng và cổ",
    mota2:
      "Nhân vật được làm bằng nhựa nguyên sinh cao cấp rất nặng tay, có kèm theo phụ kiện, rất chi tiết, sắc nét, bền đẹp và an toàn cho trẻ nhỏ",
    mota3: "Sản phẩm là hàng mới, chưa qua sử dụng và có hộp như hình",
    shop: {
      ten: "kekekekekek",
      online: "13 phút trước",
      danhgia: 34,
      sanpham: 14,
      phanhoi: "96%",
      thamgia: "2 tháng trước",
      follower: "41",
    },
  },
  {
    id: 27,
    tieude: "Mũ cói rộng vành tự nhiên cao cấp Gaucho đóng gói hộp to không bị hỏng form",
    img: "https://images.unsplash.com/photo-1616410991441-48016cb8f9f2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTg1MDIx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic1: "https://images.unsplash.com/photo-1616410991441-48016cb8f9f2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTg1MDIx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic2: "https://images.unsplash.com/photo-1616410991441-48016cb8f9f2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTg1MDIx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic3: "https://images.unsplash.com/photo-1616410991441-48016cb8f9f2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTg1MDIx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic4: "https://images.unsplash.com/photo-1616410991441-48016cb8f9f2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTg1MDIx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic5: "https://images.unsplash.com/photo-1616410991441-48016cb8f9f2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTg1MDIx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    sao: 4.9,
    danhgia: 1800,
    daban: 4700,
    gia_goc: "210.000",
    gia_moi: "140.000",
    price: 40000,
    discount: "33%", // discount = (gia_goc - gia_moi) / gia_goc
    tonkho: 1758, // sản phẩm còn lại
    liked: 3434, // nếu lớn hơn 1000 thì ghi là 1k / 2,1k / 6,9k
    danhmuc: "Mũ",
    thuonghieu: "Gaucho",
    chatlieu: "Vải cao cấp",
    xuatxu: "USA",
    guitu: "Quận Ba Đình, Hà Nội",
    mota1:
      "Những sản phẩm của chúng mình không chỉ phù hợp với mọi lứa tuổi mà còn cực bắt trend. Mỗi món phụ kiện nhỏ xinh đều có thể giúp các bạn nữ trở lên xinh xắn và nổi bật hơn bao giờ hết. ",
    mota2:
      "Chất liệu: Cói tự nhiên cao cấp , được mô phỏng  từ sợi của loài cây có tên Toquilla, một loại sậy rất hiếm và đắt tiền ở đất nước xinh đẹp Ecuador",
    mota3: "Phía trên vành mũ có gắn ruy băng xếp nếp xoắn chéo ở bên hông mũ rất xinh xắn, dễ thương",
    shop: {
      ten: "reeeeeeeeeeeeee",
      online: "8 phút trước",
      danhgia: 12409,
      sanpham: 1200,
      phanhoi: "99%",
      thamgia: "3 năm trước",
      follower: "92.5k",
    },
  },
  {
    id: 28,
    tieude: "Áo sơ mi nam cộc tay cổ tàu chất đũi Thái, form chuẩn mặc mát lạnh, loại dày đẹp",
    img: "https://images.unsplash.com/photo-1541881856704-3c4b2896c0f8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTg5MDIy&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic1: "https://images.unsplash.com/photo-1541881856704-3c4b2896c0f8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTg5MDIy&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic2: "https://images.unsplash.com/photo-1541881856704-3c4b2896c0f8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTg5MDIy&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic3: "https://images.unsplash.com/photo-1541881856704-3c4b2896c0f8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTg5MDIy&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic4: "https://images.unsplash.com/photo-1541881856704-3c4b2896c0f8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTg5MDIy&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic5: "https://images.unsplash.com/photo-1541881856704-3c4b2896c0f8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTg5MDIy&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    sao: 4.2,
    danhgia: 230,
    daban: 700,
    gia_goc: "120.000",
    gia_moi: "65.000",
    price: 65000,
    discount: "46%", // discount = (gia_goc - gia_moi) / gia_goc
    tonkho: 45758, // sản phẩm còn lại
    liked: 434, // nếu lớn hơn 1000 thì ghi là 1k / 2,1k / 6,9k
    danhmuc: "Áo",
    thuonghieu: "Louis Vuiton",
    chatlieu: "Vải thun",
    xuatxu: "Trung Quốc",
    guitu: "Quận Ba Đình, Hà Nội",
    mota1: "Áo sơ mi nam cộc tay cổ tàu chất đũi Thái, form chuẩn mặc mát lạnh, loại dày đẹp( hàng hot trend 2021)",
    mota2:
      "Size quần áo đũi phụ thuộc vào chiều cao cân nặng và các yếu tố khác như vòng bụng,đùi, hông, bắp chân,... Do đó quý khách còn phân vân xin vui lòng nhắn tin trực tiếp để được hỗ trợ tốt nhất",
    mota3: " Cách đặt hàng: Nếu bạn muốn mua 2 sản phẩm khác nhau hoặc 2 size khác nhau, để được freeship",
    shop: {
      ten: "mudamudamudamuda",
      online: "28 phút trước",
      danhgia: 2409,
      sanpham: 112,
      phanhoi: "91%",
      thamgia: "31 tháng trước",
      follower: "32.5k",
    },
  },

  {
    id: 29,
    tieude: "Quần hoa đi biển, chụp kỷ yếu lớp, bán lẻ giá sỉ",
    img: "https://images.unsplash.com/photo-1532179837606-134ddcba689e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTkwMDI0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic1: "https://images.unsplash.com/photo-1532179837606-134ddcba689e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTkwMDI0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic2: "https://images.unsplash.com/photo-1532179837606-134ddcba689e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTkwMDI0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic3: "https://images.unsplash.com/photo-1532179837606-134ddcba689e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTkwMDI0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic4: "https://images.unsplash.com/photo-1532179837606-134ddcba689e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTkwMDI0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic5: "https://images.unsplash.com/photo-1532179837606-134ddcba689e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTkwMDI0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    sao: 4.8,
    danhgia: 257,
    daban: 1700,
    gia_goc: "50.000",
    gia_moi: "35.000",
    price: 35000,
    discount: "30%", // discount = (gia_goc - gia_moi) / gia_goc
    tonkho: 1058, // sản phẩm còn lại
    liked: 234, // nếu lớn hơn 1000 thì ghi là 1k / 2,1k / 6,9k
    danhmuc: "Quần",
    thuonghieu: "Chanel",
    chatlieu: "Vải cao cấp",
    xuatxu: "Trung Quốc",
    guitu: "Quận Ba Đình, Hà Nội",
    mota1:
      "Một mùa hè nữa đang về, mùa của những chuyến du lịch biển. Bạn đang lựa chọn cho mình style đi biển cực chất cùng lũ bạn thân, bạn đang băn khoăn không biết chọn thời trang đi biển nào cho mùa teambuilding cùng công ty mùa hè này?",
    mota2: "NamyShop xin giới thiệu mẫu Quần hoa đi biển, chụp kỷ yếu lớp, đồng phục team....",
    mota3: "Đi biển, đi chơi, đi du lịch Siêu gọn - nhẹ - siêu mát mẻ - ko nhăn ko lo nóng, bí!",
    shop: {
      ten: "NamyShop",
      online: "11 giờ trước",
      danhgia: 1409,
      sanpham: 132,
      phanhoi: "94%",
      thamgia: "3 năm trước",
      follower: "1.5k",
    },
  },
  {
    id: 30,
    tieude: "Kính Gentle Monster South Side Kính gm thời trang nam nữ",
    img: "https://images.unsplash.com/photo-1516714819001-8ee7a13b71d7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTkwMzk2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic1: "https://images.unsplash.com/photo-1516714819001-8ee7a13b71d7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTkwMzk2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic2: "https://images.unsplash.com/photo-1516714819001-8ee7a13b71d7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTkwMzk2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic3: "https://images.unsplash.com/photo-1516714819001-8ee7a13b71d7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTkwMzk2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic4: "https://images.unsplash.com/photo-1516714819001-8ee7a13b71d7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTkwMzk2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic5: "https://images.unsplash.com/photo-1516714819001-8ee7a13b71d7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTkwMzk2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    sao: 4.8,
    danhgia: 297,
    daban: 770,
    gia_goc: "150.000",
    gia_moi: "85.000",
    price: 35000,
    discount: "43%", // discount = (gia_goc - gia_moi) / gia_goc
    tonkho: 2058, // sản phẩm còn lại
    liked: 204, // nếu lớn hơn 1000 thì ghi là 1k / 2,1k / 6,9k
    danhmuc: "Kính",
    thuonghieu: "South Side",
    chatlieu: "Nhựa tổng hợp",
    xuatxu: "Trung Quốc",
    guitu: "Quận Ba Đình, Hà Nội",
    mota1: "CAM KẾT sản phẩm giống với mô tả, tất cả ảnh và video đều do shop tự chụp",
    mota2: "Thiết kế tinh xảo với độ hoàn thiện chính xác, gọng kính đẹp và ấn tượng, các chi tiết đều được hoàn thiện cực tốt và hoàn hảo. ",
    mota3: "THỜI GIAN SHIP CHỈ TỪ 3-4 NGÀY Ở TỈNH, KHU VỰC HCM BẠN CÓ THỂ CHỌN VẬN CHUYỂN NOW SHIP NHẬN HÀNG SAU 1-2 TIẾNG.",
    shop: {
      ten: "boboboi",
      online: "46 phút trước",
      danhgia: 2109,
      sanpham: 32,
      phanhoi: "94%",
      thamgia: "23 tháng trước",
      follower: "15k",
    },
  },
  {
    id: 31,
    tieude: "Giày Cao Gót Nữ Mũi Nhọn Thời Trang Xuân Hè 2021",
    img: "https://images.unsplash.com/photo-1512921929709-6f1ff6aca605?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTkwODQx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic1: "https://images.unsplash.com/photo-1512921929709-6f1ff6aca605?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTkwODQx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic2: "https://images.unsplash.com/photo-1512921929709-6f1ff6aca605?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTkwODQx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic3: "https://images.unsplash.com/photo-1512921929709-6f1ff6aca605?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTkwODQx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic4: "https://images.unsplash.com/photo-1512921929709-6f1ff6aca605?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTkwODQx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic5: "https://images.unsplash.com/photo-1512921929709-6f1ff6aca605?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTkwODQx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    sao: 4.9,
    danhgia: 97,
    daban: 177,
    gia_goc: "654.000",
    gia_moi: "354.000",
    price: 354000,
    discount: "46%", // discount = (gia_goc - gia_moi) / gia_goc
    tonkho: 58, // sản phẩm còn lại
    liked: 104, // nếu lớn hơn 1000 thì ghi là 1k / 2,1k / 6,9k
    danhmuc: "Giày",
    thuonghieu: "Venus",
    chatlieu: "Da",
    xuatxu: "Ý",
    guitu: "Quận Ba Đình, Hà Nội",
    mota1: "when coming to our shop, you are both our customers and close friends.",
    mota2: "100% commitment to quality, prestige and customer first principle ",
    mota3: "Product is the same as the description (photos, videos are taken by the shop, taken by themselves)",
    shop: {
      ten: "yeaheheboi",
      online: "7 phút trước",
      danhgia: 460,
      sanpham: 132,
      phanhoi: "74%",
      thamgia: "5 tháng trước",
      follower: "677",
    },
  },
  {
    id: 32,
    tieude: "Dầu Gội Đầu Serenity loại 192 ML Hàng nhập khẩu chính hãng",
    img: "https://images.unsplash.com/photo-1595458035442-0c43f5470a2c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTkxMTY1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic1: "https://images.unsplash.com/photo-1595458035442-0c43f5470a2c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTkxMTY1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic2: "https://images.unsplash.com/photo-1595458035442-0c43f5470a2c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTkxMTY1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic3: "https://images.unsplash.com/photo-1595458035442-0c43f5470a2c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTkxMTY1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic4: "https://images.unsplash.com/photo-1595458035442-0c43f5470a2c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTkxMTY1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic5: "https://images.unsplash.com/photo-1595458035442-0c43f5470a2c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTkxMTY1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    sao: 4.9,
    danhgia: 267,
    daban: 577,
    gia_goc: "266.000",
    gia_moi: "182.000",
    price: 354000,
    discount: "32%", // discount = (gia_goc - gia_moi) / gia_goc
    tonkho: 158, // sản phẩm còn lại
    liked: 524, // nếu lớn hơn 1000 thì ghi là 1k / 2,1k / 6,9k
    danhmuc: "Dầu gội",
    thuonghieu: "Serenity",
    chatlieu: "Thảo dược",
    xuatxu: "Pháp",
    guitu: "Quận Ba Đình, Hà Nội",
    mota1:
      "Công dụng: Làm sạch tóc, sạch gầu, trị ngứa da đầu. Ngăn dụng tóc, kích thích tóc mọc tự nhiên, chắc khỏe và suôn mềm. Loại bỏ tóc hư tổn, các hóa chất bám trên tóc.",
    mota2:
      "Hướng dẫn sử dụng dầu gội bồ kết: Tùy vào độ dài của tóc: từ 10 - 15 lần ấn hòa với nước ấm gội, nếu tóc có dầu thêm nửa quả chanh. Sau đó xối sạch lại với nước là được.",
    mota3: "Dầu gội bồ kết hoàn toàn nấu thủ công từ thảo mộc quê, lành tính và an toàn, ai cũng có thể dùng được.",
    shop: {
      ten: "oofffffff",
      online: "27 phút trước",
      danhgia: 3160,
      sanpham: 152,
      phanhoi: "100%",
      thamgia: "25 tháng trước",
      follower: "62.7k",
    },
  },
  {
    id: 33,
    tieude: "Bông tai ngọc trai tự nhiên Bạc ý s925,Ngọc trai thật nuôi nước ngọt thiết kế sang trọng dáng khuyên tròn B1933 Bảo Ngoc",
    img: "https://images.unsplash.com/photo-1596942515068-0daf9cc4fcac?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NjAzMjI3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic1: "https://images.unsplash.com/photo-1596942515068-0daf9cc4fcac?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NjAzMjI3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic2: "https://images.unsplash.com/photo-1596942515068-0daf9cc4fcac?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NjAzMjI3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic3: "https://images.unsplash.com/photo-1596942515068-0daf9cc4fcac?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NjAzMjI3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic4: "https://images.unsplash.com/photo-1596942515068-0daf9cc4fcac?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NjAzMjI3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic5: "https://images.unsplash.com/photo-1596942515068-0daf9cc4fcac?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NjAzMjI3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    sao: 5.0,
    danhgia: 12,
    daban: 27,
    gia_goc: "360.000",
    gia_moi: "342.000",
    price: 342000,
    discount: "5%", // discount = (gia_goc - gia_moi) / gia_goc
    tonkho: 775, // sản phẩm còn lại
    liked: 2384, // nếu lớn hơn 1000 thì ghi là 1k / 2,1k / 6,9k
    danhmuc: "Bông tai",
    thuonghieu: "Bảo Ngọc",
    chatlieu: "Ngọc trai",
    xuatxu: "Việt Nam",
    guitu: "Quận Ba Đình, Hà Nội",
    mota1: " Chất liệu :Ngọc trai thật + Bạc S925 Italy ( 92,5% bạc ) mạ vàng 18k ",
    mota2: "Kích thước : hạt từ 8-9mm x 27mm",
    mota3: "Đóng gói:  Sản phẩm để trong túi zip kèm gói hút ẩm + Hộp đựng + Giấy kiểm định",
    shop: {
      ten: "sussssssssss",
      online: "17 phút trước",
      danhgia: 14860,
      sanpham: 452,
      phanhoi: "82%",
      thamgia: "5 nắm trước",
      follower: "90.7k",
    },
  },
  {
    id: 34,
    tieude: "Đồng hồ đeo tay OLEVS 2871 cơ cấu thạch anh kim chỉ chống nước cho nam",
    img: "https://images.unsplash.com/photo-1591352254932-6d56d9fe295b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NjAzNTYx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic1: "https://images.unsplash.com/photo-1591352254932-6d56d9fe295b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NjAzNTYx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic2: "https://images.unsplash.com/photo-1591352254932-6d56d9fe295b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NjAzNTYx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic3: "https://images.unsplash.com/photo-1591352254932-6d56d9fe295b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NjAzNTYx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic4: "https://images.unsplash.com/photo-1591352254932-6d56d9fe295b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NjAzNTYx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic5: "https://images.unsplash.com/photo-1591352254932-6d56d9fe295b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NjAzNTYx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    sao: 4.9,
    danhgia: 402,
    daban: 850,
    gia_goc: "600.000",
    gia_moi: "351.000",
    price: 351000,
    discount: "42%", // discount = (gia_goc - gia_moi) / gia_goc
    tonkho: 375, // sản phẩm còn lại
    liked: 438, // nếu lớn hơn 1000 thì ghi là 1k / 2,1k / 6,9k
    danhmuc: "Đồng hồ",
    thuonghieu: "OLEVS",
    chatlieu: "Thép không gỉ",
    xuatxu: "Trung Quốc",
    guitu: "Quận Ba Đình, Hà Nội",
    mota1: " Thời gian giao hàng dự kiến cho sản phẩm này là từ 7-9 ngày ",
    mota2: "  Chúng tôi cam kết: 100% đồng hồ nguyên bản! Sản phẩm đã sẵn sàng! Chuyển phát nhanh! Bao bì đẹp!",
    mota3: "  Lưu ý: Các sản phẩm có chất liệu vàng, kim cương, đá quý trong shop đều là xi mạ/ nhân tạo.",
    shop: {
      ten: "sussssssssss",
      online: "32 phút trước",
      danhgia: 2360,
      sanpham: 152,
      phanhoi: "97%",
      thamgia: "31 tháng trước",
      follower: "8.7k",
    },
  },
  {
    id: 35,
    tieude: "Túi Vải Tote Đeo Vai Form Lớn XinhStore",
    img: "https://images.unsplash.com/photo-1606820049407-03c1821c99ec?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NjA0Nzk1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic1: "https://images.unsplash.com/photo-1606820049407-03c1821c99ec?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NjA0Nzk1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic2: "https://images.unsplash.com/photo-1606820049407-03c1821c99ec?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NjA0Nzk1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic3: "https://images.unsplash.com/photo-1606820049407-03c1821c99ec?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NjA0Nzk1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic4: "https://images.unsplash.com/photo-1606820049407-03c1821c99ec?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NjA0Nzk1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic5: "https://images.unsplash.com/photo-1606820049407-03c1821c99ec?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NjA0Nzk1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    sao: 5.0,
    danhgia: 1,
    daban: 2,
    gia_goc: "65.000",
    gia_moi: "52.000",
    price: 52000,
    discount: "20%", // discount = (gia_goc - gia_moi) / gia_goc
    tonkho: 8, // sản phẩm còn lại
    liked: 5, // nếu lớn hơn 1000 thì ghi là 1k / 2,1k / 6,9k
    danhmuc: "Túi",
    thuonghieu: "Tote",
    chatlieu: "Vải canvas",
    xuatxu: "Việt Nam",
    guitu: "Quận Ba Đình, Hà Nội",
    mota1: "Túi kích thước là: 35 x 37 cm để được tầm 3 bộ đồ nhé.",
    mota2: "Chất vải Canvas dầy dặn, hàng VN chất lượng cao.",
    mota3: "Túi thiết kế 2 dây đeo quai. Túi có nút gài, có ngăn ngoài",
    shop: {
      ten: "XinhStore",
      online: "12 phút trước",
      danhgia: 35460,
      sanpham: 752,
      phanhoi: "73%",
      thamgia: "6 năm trước",
      follower: "77k",
    },
  },
  {
    id: 36,
    tieude: "Giày Nike AF1 Air Force 1 Trắng Hoa Cúc Sơn Đế Cổ Thấp Thời Trang G03",
    img: "https://images.unsplash.com/photo-1613070120286-98b11cdb9ae2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NjA1MTU1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic1: "https://images.unsplash.com/photo-1613070120286-98b11cdb9ae2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NjA1MTU1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic2: "https://images.unsplash.com/photo-1613070120286-98b11cdb9ae2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NjA1MTU1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic3: "https://images.unsplash.com/photo-1613070120286-98b11cdb9ae2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NjA1MTU1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic4: "https://images.unsplash.com/photo-1613070120286-98b11cdb9ae2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NjA1MTU1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic5: "https://images.unsplash.com/photo-1613070120286-98b11cdb9ae2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NjA1MTU1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    sao: 5.0,
    danhgia: 35,
    daban: 102,
    gia_goc: "399.000",
    gia_moi: "269.000",
    price: 269000,
    discount: "33%", // discount = (gia_goc - gia_moi) / gia_goc
    tonkho: 816, // sản phẩm còn lại
    liked: 6900, // nếu lớn hơn 1000 thì ghi là 1k / 2,1k / 6,9k
    danhmuc: "Giày",
    thuonghieu: "Nike",
    chatlieu: "Cao su cao cấp",
    xuatxu: "USA",
    guitu: "Quận Ba Đình, Hà Nội",
    mota1: "SHOP CAM KẾT 1 ĐỔI 1 NẾU GIÀY LỖI HOẶC MUỐN ĐỔI SIZE GIÀY.",
    mota2: "Về giá cả: Shop chuyên buôn số lượng lớn nên chi phí giày thể thao nam nữ sẽ là SIÊU RẺ nhé ",
    mota3: " Về dịch vụ: Luôn hỗ trợ khách hàng chu đáo, cố gắng trả lời hết những thắc mắc xoay quanh sản phẩm giày AF1 trắng ạ",
    shop: {
      ten: "TranDan",
      online: "44 phút trước",
      danhgia: 880,
      sanpham: 35,
      phanhoi: "83%",
      thamgia: "9 tháng trước",
      follower: "5.7k",
    },
  },
  {
    id: 37,
    tieude: "Dây chuyền choker nhiều lớp màu vàng phối mặt",
    img: "https://duyhien.vn/static/media/images/img/day-chuyen-soi-manh-15k-vang-tay-nu-lm-d%201.jpg",
    pic1: "https://duyhien.vn/static/media/images/img/day-chuyen-soi-manh-15k-vang-tay-nu-lm-d%201.jpg",
    pic2: "https://duyhien.vn/static/media/images/img/day-chuyen-soi-manh-15k-vang-tay-nu-lm-d%201.jpg",
    pic3: "https://duyhien.vn/static/media/images/img/day-chuyen-soi-manh-15k-vang-tay-nu-lm-d%201.jpg",
    pic4: "https://duyhien.vn/static/media/images/img/day-chuyen-soi-manh-15k-vang-tay-nu-lm-d%201.jpg",
    pic5: "https://duyhien.vn/static/media/images/img/day-chuyen-soi-manh-15k-vang-tay-nu-lm-d%201.jpg",
    sao: 4.9,
    danhgia: 813,
    daban: 3600,
    gia_goc: "99.000",
    gia_moi: "69.000",
    price: 69000,
    discount: "30%", // discount = (gia_goc - gia_moi) / gia_goc
    tonkho: 1716, // sản phẩm còn lại
    liked: 1900, // nếu lớn hơn 1000 thì ghi là 1k / 2,1k / 6,9k
    danhmuc: "Dây chuyền",
    thuonghieu: "choker",
    chatlieu: "Hợp kim",
    xuatxu: "Trung Quốc",
    guitu: "Quận Ba Đình, Hà Nội",
    mota1: "Thời gian giao hàng dự kiến cho sản phẩm này là từ 7-9 ngày",
    mota2: "Sản phẩm trong cửa hàng đều là hàng có sẵn, các bạn đặt hàng trực tiếp nhé.",
    mota3: "Do sự khác biệt trong cài đặt màn hình, màu sắc của sản phẩm có thể hơi khác so với hình ảnh.",
    shop: {
      ten: "huydietShop",
      online: "8 phút trước",
      danhgia: 1880,
      sanpham: 335,
      phanhoi: "83%",
      thamgia: "21 tháng trước",
      follower: "11.7k",
    },
  },
  {
    id: 38,
    tieude: "Smart Band 6, Đồng Hồ Thể Thao, Theo Dõi Sức khỏe, Đổi Hình Nền, Chống nước IP67t",
    img: "https://images.unsplash.com/photo-1587901661576-4cf34e4785bb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NjA1ODY1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic1: "https://images.unsplash.com/photo-1587901661576-4cf34e4785bb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NjA1ODY1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic2: "https://images.unsplash.com/photo-1587901661576-4cf34e4785bb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NjA1ODY1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic3: "https://images.unsplash.com/photo-1587901661576-4cf34e4785bb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NjA1ODY1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic4: "https://images.unsplash.com/photo-1587901661576-4cf34e4785bb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NjA1ODY1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic5: "https://images.unsplash.com/photo-1587901661576-4cf34e4785bb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NjA1ODY1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    sao: 5.0,
    danhgia: 13,
    daban: 42,
    gia_goc: "299.000",
    gia_moi: "190.000",
    price: 190000,
    discount: "36%", // discount = (gia_goc - gia_moi) / gia_goc
    tonkho: 716, // sản phẩm còn lại
    liked: 1740, // nếu lớn hơn 1000 thì ghi là 1k / 2,1k / 6,9k
    danhmuc: "Đồng hồ",
    thuonghieu: "Xiaomi",
    chatlieu: "Hợp kim",
    xuatxu: "Trung Quốc",
    guitu: "Quận Ba Đình, Hà Nội",
    mota1: "Màn hình màu 1inch IPS, hiển thị rõ ràng ngay cả dưới ánh sáng mặt trời",
    mota2: "Thể thao và sức khỏe: Đếm bước thể thao (cảm biến 3D), mức tiêu thụ calo, khoảng cách tập thể dục, máy đếm bước chân.",
    mota3:
      "Chức năng camera từ xa: lắc đồng hồ để chụp ảnh sau khi kết nối bluetooth như một thiết bị điều khiển từ xa camera cho điện thoại của bạn.",
    shop: {
      ten: "bomacanhem",
      online: "4 phút trước",
      danhgia: 280,
      sanpham: 13,
      phanhoi: "97%",
      thamgia: "3 tháng trước",
      follower: "3.7k",
    },
  },
  {
    id: 39,
    tieude: "Tai nghe mèo Bluetooth Siêu dễ thương đủ màu sắc pin khủng",
    img: "https://images.unsplash.com/photo-1608280200244-fae9946df695?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NjA2MTc5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic1: "https://images.unsplash.com/photo-1608280200244-fae9946df695?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NjA2MTc5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic2: "https://images.unsplash.com/photo-1608280200244-fae9946df695?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NjA2MTc5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic3: "https://images.unsplash.com/photo-1608280200244-fae9946df695?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NjA2MTc5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic4: "https://images.unsplash.com/photo-1608280200244-fae9946df695?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NjA2MTc5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic5: "https://images.unsplash.com/photo-1608280200244-fae9946df695?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NjA2MTc5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    sao: 4.9,
    danhgia: 153,
    daban: 2442,
    gia_goc: "480.000",
    gia_moi: "258.000",
    price: 258000,
    discount: "46%", // discount = (gia_goc - gia_moi) / gia_goc
    tonkho: 416, // sản phẩm còn lại
    liked: 430, // nếu lớn hơn 1000 thì ghi là 1k / 2,1k / 6,9k
    danhmuc: "Tai nghe",
    thuonghieu: "Chinchon",
    chatlieu: "Nhựa cao cấp",
    xuatxu: "Trung Quốc",
    guitu: "Quận Ba Đình, Hà Nội",
    mota1:
      "Tai nghe mèo bluetooth không chỉ là 1 phụ kiện điện thoại thông thường nó là 1 phụ kiện thời trang vô cùng nữ tính với 5 tông màu đa dạng phù hợp với nhiều cá tính. Rất thích hợp với các nữ streamer hoặc các bạn gái muốn nổi bật hơn khi học trực tuyến :D",
    mota2:
      "Có khả năng gấp gọn lại cũng như kéo dãn ra để vừa mọi cỡ đầu. Ngoài ra phần khung được làm bằng nhựa cao cấp cực bền và không gây mùi khó chịu như các sản phẩm rẻ tiền khác",
    mota3:
      "Hỗ trợ mic đàm thoại khả năng tương thích với các smartphone là 100%. Ngoài ra hỗ trợ kết nối có dây AUX 3.5mm có thể sử dụng với laptop (Hỗ trợ mic)",
    shop: {
      ten: "vietnamvodich",
      online: "5 phút trước",
      danhgia: 406,
      sanpham: 39,
      phanhoi: "87%",
      thamgia: "7 tháng trước",
      follower: "13.7k",
    },
  },
  {
    id: 40,
    tieude: "Nhẫn đính hôn khảm đá nhân tạo sang trọng",
    img: "https://images.unsplash.com/photo-1575343661961-396d02abf317?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NjA2NDY3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic1: "https://images.unsplash.com/photo-1575343661961-396d02abf317?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NjA2NDY3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic2: "https://images.unsplash.com/photo-1575343661961-396d02abf317?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NjA2NDY3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic3: "https://images.unsplash.com/photo-1575343661961-396d02abf317?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NjA2NDY3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic4: "https://images.unsplash.com/photo-1575343661961-396d02abf317?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NjA2NDY3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    pic5: "https://images.unsplash.com/photo-1575343661961-396d02abf317?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=850&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NjA2NDY3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    sao: 5.0,
    danhgia: 53,
    daban: 124,
    gia_goc: "72.000",
    gia_moi: "36.000",
    price: 36000,
    discount: "50%", // discount = (gia_goc - gia_moi) / gia_goc
    tonkho: 23416, // sản phẩm còn lại
    liked: 113, // nếu lớn hơn 1000 thì ghi là 1k / 2,1k / 6,9k
    danhmuc: "Nhẫn",
    thuonghieu: "Victoria",
    chatlieu: "Nhựa cao cấp",
    xuatxu: "Trung Quốc",
    guitu: "Quận Ba Đình, Hà Nội",
    mota1: "Thời gian giao hàng dự kiến cho sản phẩm này là từ 7-9 ngày",
    mota2: "Chào mừng bạn đến với cửa hàng trang sức của chúng tôi! Hãy Like sản phẩm của chúng tôi và theo dõi chúng tôi.",
    mota3:
      "Khuyên nghị không tiếp xúc trực tiếp với hóa chất mạn (Nước hoa, nước rửa chén, xà phòng, vv), nước và mồ hôi. Nên giữ khô và sạch sẽ sau mỗi lần đeo để tránh trang sức nhanh chóng mờ và đổi màu. Tất cả đồ trang sức, ngoại trừ vàng đều được khuyên là phải làm sạch và giữ khô.",
    shop: {
      ten: "uigioioi",
      online: "13 phút trước",
      danhgia: 2806,
      sanpham: 2500,
      phanhoi: "85%",
      thamgia: "22 tháng trước",
      follower: "6.7k",
    },
  },
];

const getListOfProduct = () => {
  return list;
};

const sortBySao = (v) => {
  let arr = pagination(v);
  arr.sort((a, b) => {
    return b.sao - a.sao;
  });
  return arr;
};

const sortByDaBan = (v) => {
  let arr = pagination(v);
  arr.sort((a, b) => {
    return b.daban - a.daban;
  });
  return arr;
};

const sortThapDenCao = (v) => {
  let arr = pagination(v);
  arr.sort((a, b) => {
    return a.price - b.price;
  });
  return arr;
};

const sortCaoDenThap = (v) => {
  let arr = pagination(v);
  arr.sort((a, b) => {
    return b.price - a.price;
  });
  return arr;
};

const sortGiamGia = (v) => {
  let arr = pagination(v);
  arr.sort((a, b) => {
    return parseFloat(b.discount) - parseFloat(a.discount);
  });
  return arr;
};

const getProductByTieuDe = (tieude) => {
  return list.find((x) => x.tieude === tieude);
};

const searchByKey = (tieude) => {
  let arr = [];
  arr = list.filter((x) => {
    return x.tieude.toLowerCase().match(tieude.toLowerCase());
  });
  return arr;
};

const searchTrangPhuc = () => {
  let arr = [];
  let arr1 = list.filter((x) => {
    return x.tieude.toLowerCase().match("áo");
  });
  let arr2 = list.filter((x) => {
    return x.tieude.toLowerCase().match("quần");
  });
  arr = [...arr1, ...arr2];
  return arr;
};

const searchLamDep = () => {
  let arr = [];
  let arr1 = list.filter((x) => {
    return x.tieude.toLowerCase().match("nhẫn");
  });
  let arr2 = list.filter((x) => {
    return x.tieude.toLowerCase().match("dây");
  });
  arr = [...arr1, ...arr2];
  return arr;
};

const searchPhuKien = () => {
  let arr = [];
  let arr1 = list.filter((x) => {
    return x.tieude.toLowerCase().match("giày");
  });
  let arr2 = list.filter((x) => {
    return x.tieude.toLowerCase().match("hồ");
  });
  arr = [...arr1, ...arr2];
  return arr;
};

const pagination = (value) => {
  if (value > 8) value = value - 8;
  if (value > 4) value = value - 4;
  let arr = [];
  if (value === 1) {
    for (let i = 0; i < 10; i++) {
      arr.push(list[i]);
    }
  }
  if (value === 2) {
    for (let i = 10; i < 20; i++) {
      arr.push(list[i]);
    }
  }
  if (value === 3) {
    for (let i = 20; i < 30; i++) {
      arr.push(list[i]);
    }
  }
  if (value === 4) {
    for (let i = 30; i < 40; i++) {
      arr.push(list[i]);
    }
  }
  return arr;
};

const findById = (productId) => {
  return list.find((x) => x.id == parseInt(productId));
};

export {
  getListOfProduct,
  getProductByTieuDe,
  sortBySao,
  sortByDaBan,
  sortThapDenCao,
  sortCaoDenThap,
  searchByKey,
  sortGiamGia,
  searchTrangPhuc,
  searchLamDep,
  searchPhuKien,
  pagination,
  findById,
  list,
};
