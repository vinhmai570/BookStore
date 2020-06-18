<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
     <link rel="stylesheet" href="<?php echo base_url()?>css/bootstrap.min.css">
    <!-- FONTAWESOME LIBRARY -->
    <link rel="stylesheet" href="<?php echo base_url()?>css/fontawesome-pro.min.css">
    <link rel="stylesheet" href="<?php echo base_url()?>css/admin.css">
</head>

<body>
    <div class="col-8 pt-2" style="margin-top: 80px;">
                <main>
                    <div class="container">
                      <h2>Thêm sản phẩm</h2>
                <form action="<?php echo base_url()?>index.php/products/addproduct" method="post" enctype="multipart/form-data">           
                            <div class="row">
                              <div class="col">
                                <label for="">Tên Sản Phẩm</label>
                                <input type="text" class="form-control" id="nameproduct" placeholder="Nhập tên" name="nameproduct" value="">
                              </div>
                              <div class="col">
                                <label for="">Giá Sản Phẩm</label>
                                <input type="text" class="form-control" placeholder="Nhập Giá" name="price" value="">
                              </div>
                              <div class="col">
                                <label for="">Phân loại</label><br>
                                <select name="cateN" style="margin-top: 5px">
                                  <option value="enBook" selected>Sách Tiếng Anh</option>
                                  <option value="viBook">Sách Tiếng Việt</option>
                                  <option value="stationery">Văn phòng phẩm</option>
                                  <option value="souvenir" >Quà lưu niệm</option>
                                </select>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col">
                                <br><br>
                                <label for="">Số lượng</label>
                                <input type="number" class="form-control" id="quantity" placeholder="Nhập số lượng" name="quantity" min="1" value="">
                              </div>
                              <div class="col" style="margin-top: 5px">
                                <br><br>
                                <label for="">Ảnh</label> <br>
                                <input type="file" name="imageUrl" >
                              </div>
                            </div>
                            <div class="row">
                              <div class="col">
                                <br><br>
                                <label for="">Mô tả</label>
                                <input type="text" class="form-control" id="category" placeholder="Phân loại" name="des" value="">
                              </div>
                              <div class="col">
                                <br><br>
                                <label for="">Giảm giá</label> <br>
                                <input type="text" class="form-control" name="discount" value="0" placeholder="Giảm giá">
                              </div>
                              <div class="col">
                                <br><br>
                                <label for="">Đánh giá (Số sao)</label> <br>
                                <input type="text" class="form-control" name="rate" value="5" placeholder="Đánh giá">
                              </div>
                            </div>
                        <button type="submit" class="btn btn-primary mt-3">Lưu</button>
                        <button type="reset" class="btn btn-danger mt-3">Nhập lại</button>
                      </form>
                    </div>
                </main>
            </div>
    <script type="text/javascript" src="<?php echo base_url()?>js/jquery-3.4.1.min.js"></script>
    <!-- OWL CAROUSEL LIBRARY -->

    <!-- BOOTSTRAP LIBRARY -->
    <script src="<?php echo base_url()?>js/bootstrap.min.js">
    <script type="text/javascript">
        
    </script>
</body>

</html>