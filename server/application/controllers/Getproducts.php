<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Getproducts extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
	}

	public function index()
	{
		$this->load->model('Getdata_modal');
		$kq =$this->Getdata_modal->getDatabase();
		$kq=json_encode($kq,JSON_PRETTY_PRINT);
// 		echo "<pre>";
		echo $kq;
// 		echo "</pre>";
		$kq1=json_decode($kq);
		// foreach ($kq1 as $key => $value) {
		// 	// echo $key;
		// 	echo "<br>".$value->ProdID."<br>";
		// 	echo $value->CateID."<br>";
		// 	echo $value->ProdName."<br>";
		// 	echo $value->Des."<br>";
		// 	echo $value->Price."<br>";
		// }
	}
    public function GetProductById($id){
		$this->load->model('Getdata_modal');
		$data=$this->Getdata_modal->getProductById($id);
		echo json_encode($data);
	}
	public function GetProductByCate($cateid){
		$this->load->model('Getdata_modal');
		$data=$this->Getdata_modal->getProductsByCate($cateid);
		echo json_encode($data);
	}
	public function GetProductByDiscount(){
		$this->load->model('Getdata_modal');
		$data=$this->Getdata_modal->getProductsByDiscount();
		echo json_encode($data);
	}
	public function SearchProduct($name){
	    $this->load->model('Getdata_modal');
	    $data=$this->Getdata_modal->searchProduct($name);
	    echo json_encode($data);
	}
}

/* End of file getData.php */
/* Location: ./application/controllers/getData.php */