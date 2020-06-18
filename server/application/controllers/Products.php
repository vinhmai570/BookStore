<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Products extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
	}

	public function index()
	{
			$this->load->view('Addproduct_view');
	}
	public function test_input($data) {
	  $data = trim($data);
	  $data = stripslashes($data);
	  $data = htmlspecialchars($data);
	  return $data;
	}
	public function addproduct()
	{
		// $nameproductErr=$priceErr=$quantityErr=$desErr=$discountErr=$rateErr=$imageUrlErr="";
		$nameproduct=$this->test_input($this->input->post('nameproduct'));
		$price=$this->test_input($this->input->post('price'));
		$quantity=$this->test_input($this->input->post('quantity'));
		// $category=$this->input->post('category');
		$des=$this->test_input($this->input->post('des'));
		$discount=$this->test_input($this->input->post('discount'));
		$rate=$this->test_input($this->input->post('rate'));
		$cateID=1;
		if ($this->input->post('cateName')=='viBook') {
			$cateID=2;
		}
		else if($this->input->post('cateName')=='stationery') {
			$cateID=3;
		}
		else if($this->input->post('cateName')=='souvenir') {
			$cateID=4;
		}
		//  xử lý ảnh	
		$target_dir = "upload/products/";
		$target_file = $target_dir . basename($_FILES["imageUrl"]["name"]);
		$uploadOk = 1;
		$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
		
		// Check if image file is a actual image or fake image
		if(isset($_POST["submit"])) {
		  $check = getimagesize($_FILES["imageUrl"]["tmp_name"]);
		  if($check !== false) {
		    echo "File is an image - " . $check["mime"] . ".";
		    $uploadOk = 1;
		  } else {
		    echo "File is not an image.";
		    $uploadOk = 0;
		  }
		}

		// Check if file already exists
		if (file_exists($target_file)) {
		  echo "Fie đã tồn tại";
		  $uploadOk = 0;
		}

		// Check file size
		if ($_FILES["imageUrl"]["size"] > 500000) {
		  echo "Kích thước file quá lớn";
		  $uploadOk = 0;
		}

		// Allow certain file formats
		if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
		&& $imageFileType != "gif" ) {
		  echo "Chỉ chấp nhận file JPG, JPEG, PNG & GIF";
		  $uploadOk = 0;
		}

		// Check if $uploadOk is set to 0 by an error
		if ($uploadOk == 0) {
		  // echo "Lỗi !!! File chưa được upload";
		// if everything is ok, try to upload file
		} else {
		  if (move_uploaded_file($_FILES["imageUrl"]["tmp_name"], $target_file)) {
		    // echo "Thành công";
		  } else {
		    echo "Lỗi !!! Vui lòng nhập lại";
		  }
		}
		//end xử lý ảnh


		// echo"Tên sản phẩm: $nameproduct <br> Giá sản phẩm: $price <br> Số lượng: $quantity <br> Phân loại: $cateID <br> Thông tin sản phẩm: $des <br> $discount<br> $rate <br> ".base_url()."uploads/products/".basename($_FILES["imageUrl"]["name"]);

		$imageUrl="upload/products/".basename($_FILES["imageUrl"]["name"]);

		if(empty($nameproduct)||empty($cateID)||empty($des)||empty($quantity)||empty($rate)||empty($imageUrl)||empty($price))
		{
			echo "<h2 class='container text-warning'>Vui lòng nhập đầy đủ các trường!!!</h2><br>";
			// echo "Tên sản phẩm: $nameproduct <br> Giá sản phẩm: $price <br> Số lượng: $quantity <br> Phân loại: $cateID <br> Thông tin sản phẩm: $des <br> $discount<br> $rate <br> ".base_url()."uploads/products/".basename($_FILES["imageUrl"]["name"]);		
	// $this->load->Products();
		}
		else{
			$this->load->model('Products_model');
			if($this->Products_model->insertProduct($cateID,$nameproduct,$des,$price,$discount,$quantity,$rate,$imageUrl))
			{
				$this->load->view('Addsuccess_view');
			}
			else{
				echo "Lỗi";
			}
		}
	}
	
}

/* End of file Addproducts.php */
/* Location: ./application/controllers/Addproducts.php */