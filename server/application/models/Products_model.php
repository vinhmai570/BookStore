<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Products_model extends CI_Model {

	public $variable;

	public function __construct()
	{
		parent::__construct();
		
	}
	public function insertProduct($category,$name,$des,$price,$discount,$quantity,$rate,$imageUrl)
	{	
		$productsItem = array(
			'CateId' => $category,
			'ProdName' => $name, 
			'Des' => $des,
			'Price' => $price, 
			'Discount'=>$discount,
			'Quantity' =>$quantity ,
			'Rate'=>$rate,
			'ImageURL' => $imageUrl,
		);
		$this->db->insert('products',$productsItem);
		return $this->db->insert_id();
	}

}

/* End of file Products_models.php */
/* Location: ./application/models/Products_models.php */