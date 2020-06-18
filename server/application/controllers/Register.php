<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Register extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
	}

	public function index()
	{
		$data=json_decode(file_get_contents('php://input'),true);
		$fullname=$data['FullName'];
		$username=$data['UserName'];
		$password=$data['PassWord'];
		$email=$data['Email'];
		$groupid=3;
		$this->load->model('User_model');
		if($fullname!=''&&$password!=''&&$email!=''&&$username){
		    if($this->User_model->RegisterModel($fullname,$username,$password,$email,$groupid))
    		{
    			echo "Đăng kí thành công";
    		}
    		else{
    			echo "Lỗi";
    		}
		}
		else{
		    echo "Vui lòng nhập đủ thông tin!";
		}
	}

}

/* End of file Register.php */
/* Location: ./application/controllers/Register.php */