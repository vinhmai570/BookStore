<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class User_model extends CI_Model {

	public $variable;

	public function __construct()
	{
		parent::__construct();
		
	}
	public function RegisterModel($fullname,$username,$password,$email,$groupid)
	{	
		$user = array(
			'GroupId' => $groupid,
			'FullName' => $fullname, 
			'UserName' => $username,
			'PassWord' => $password, 
			'Email'=>$email
		);
		$this->db->insert('users',$user);
		return $this->db->insert_id();
	}
    public function LoginModel($username,$password){
		$this->db->select('UserName,PassWord,Email,FullName,GroupId,UserId');
		$this->db->where('UserName', $username);
		$this->db->where('PassWord', $password);
		$data=$this->db->get('users');
		$data=$data->result_array();
		return $data;
	}
	public function InsertOrder($userid,$addeddate,$address,$phone,$sum)
	{	
		$order = array(
			'UserId' => $userid,
			'AddedDate' => $addeddate, 
			'Address' => $address,
			'Phone' => $phone, 
			'Sum'=>$sum
		);
		$this->db->insert('orders',$order);
		return $this->db->insert_id();
	}
	public function InsertOrderItem($orderId,$prodId,$quantity)
	{	
		$orderitems = array(
			'OrderId' => $orderId,
			'ProdId' => $prodId, 
			'Quantity'=>$quantity
		);
		$this->db->insert('orderitems',$orderitems);
		return $this->db->insert_id();
	}
}

/* End of file User_model.php */
/* Location: ./application/models/User_model.php */