<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Getdata_modal extends CI_Model {

	public $variable;

	public function __construct()
	{
		parent::__construct();
		
	}
	public function getDatabase()
	{
		$this->db->select('*');
		$kq=$this->db->get('products');
		$kq=$kq->result_array();
		return $kq;
	}
	public function getProductsByCate($cateid)
	{
		$this->db->select('*');
		$this->db->where('CateId', $cateid);
		$kq=$this->db->get('products');
		$kq=$kq->result_array();
		return $kq;
	}
    public function getProductById($id){
		$this->db->select('*');
		$this->db->where('ProdId', $id);
		$data=$this->db->get('products');
		$data=$data->result_array();
		return $data;
	}
	public function getProductsByDiscount(){
	    $this->db->select('*');
		$this->db->where('Discount');
		$data=$this->db->get('products');
		$data=$data->result_array();
		return $data;
	}
	public function searchProduct($name){
	    $this->db->select('*');
	    $this->db->like('ProdName', $name);
	    $data=$this->db->get('products');
		$data=$data->result_array();
		return $data;
	}
	public function getOrders($userid){
	    $this->db->select('*');
	    $this->db->where('UserId', $userid);
	    $data=$this->db->get('orders');
		$data=$data->result_array();
		return $data;
	}
	public function getAllOrders(){
	    $this->db->select('*');
	    $data=$this->db->get('orders');
		$data=$data->result_array();
		return $data;
	}
	public function getOrderItems($orderId){
	    $this->db->select('*');
	    $this->db->where('OrderId', $orderId);
	    $data=$this->db->get('orderitems');
		$data=$data->result_array();
		return $data;
	}
	
}

/* End of file getData_modal.php */
/* Location: ./application/models/getData_modal.php */