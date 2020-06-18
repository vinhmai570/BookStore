
<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Order extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
	}

	public function index()
	{
		$this->load->model('Getdata_modal');
		$kq =$this->Getdata_modal->getAllOrders();
		$kq=json_encode($kq,JSON_PRETTY_PRINT);
	    echo $kq;
	}
	public function getOrderByUserId($userid)
	{
		$this->load->model('Getdata_modal');
		$kq =$this->Getdata_modal->getOrders($userid);
		$kq=json_encode($kq,JSON_PRETTY_PRINT);
	    echo $kq;
	}
		public function getOrderItems($orderId)
	{
		$this->load->model('Getdata_modal');
		$kq =$this->Getdata_modal->getOrderItems($orderId);
		$kq=json_encode($kq,JSON_PRETTY_PRINT);
	    echo $kq;
	}
	public function insertOrder(){
	    $data=json_decode(file_get_contents('php://input'),true);
		$userid=$data['UserId'];
		$addeddate=$data['AddedDate'];
		$address=$data['Address'];
		$phone=$data['Phone'];
		$sum=$data['Sum'];
		
		$this->load->model('User_model');
		if($address!=''&&$phone!=''){
		    $orderId=$this->User_model->InsertOrder($userid,$addeddate,$address,$phone,$sum);
		    if($orderId)
    		{
    		    $message=array('message'=>'true',
    		                    'orderid'=>$orderId
    		                    );
                echo json_encode($message,JSON_PRETTY_PRINT);
    		}
    		else{
    			$message=array('message'=>'false',
    		                    );
                echo json_encode($message,JSON_PRETTY_PRINT);
    		}
		}
		else{
		    echo "Vui lòng nhập đủ thông tin!";
		}
	}
	
	public function insertItemOrder(){
	    $data=json_decode(file_get_contents('php://input'),true);
		$orderId=$data['OrderId'];
		$quantity=$data['Quantity'];
		$prodId=$data['ProdId'];
		if($orderId!=''&&$prodId!=''&&$quantity!='')
		{
		    $this->load->model('User_model');
    	    if($this->User_model->InsertOrderItem($orderId,$prodId,$quantity))
    		{
    		    $message=array('message'=>'true');
                echo json_encode($message,JSON_PRETTY_PRINT);
    		}
    		else{
    			$message=array('message'=>'false');
                echo json_encode($message,JSON_PRETTY_PRINT);
    		}
		}
		else{
		    $message=array('message'=>'false');
            echo json_encode($message,JSON_PRETTY_PRINT);
		}
		
	}
   
}

/* End of file getData.php */
/* Location: ./application/controllers/getData.php */