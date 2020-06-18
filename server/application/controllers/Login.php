<?php
require APPPATH . '/libraries/CreatorJwt.php';

class Login extends CI_Controller
{
    public function __construct()
    {
        
        parent::__construct();
        $this->objOfJwt = new CreatorJwt();
        header('Content-Type: application/json');
    }

    /*************Ganerate token this function use**************/

    public function LoginToken()
    {
    	$data=json_decode(file_get_contents('php://input'),true);
    	$username=$data['UserName'];
    	$password=$data['PassWord'];
    	$this->load->model('User_model');
    	$userdata=$this->User_model->LoginModel($username,$password);

    	$userdata=$this->User_model->LoginModel($username,$password);
    	// echo count($userdata);
    	if(count($userdata)==1){
    		// Login Dung
    		$token = array();
    		$token['UserName'] = $userdata[0]['UserName'];
	        $token['FullName'] = $userdata[0]['FullName'];
	        $token['Email'] = $userdata[0]['Email'];
	        $token['GroupId'] = $userdata[0]['GroupId'];
	        $token['UserId'] = $userdata[0]['UserId'];
	        $jwtToken = $this->objOfJwt->GenerateToken($token);
	        $info=[
	        	'token'=>$jwtToken,
	        	'id'=>$token['UserId'],
	        	'username'=>$token['UserName'] ,
	        	'email'=>$token['Email'],
	        	'groupid'=>$token['GroupId'],
	        	'fullname'=>$token['FullName']
	        ];
	        echo json_encode($info);
    	}
    	else{
			//login sai
			echo '{"token":"ERROR"}';
		}
        
    }
     
   /*************Use for token then fetch the data**************/
     
    public function GetTokenData($token)
    {
    	$received_Token = $this->input->request_headers('Authorization');
        try
        {
            $jwtData = $this->objOfJwt->DecodeToken($token);
            echo json_encode($jwtData);
        }
        catch (Exception $e)
            {
            http_response_code('401');
            echo json_encode(array( "status" => false, "message" => $e->getMessage()));exit;
        }
    }
}
        