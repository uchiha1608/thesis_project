<?php
include 'connectDB.php';
if($_POST["type"] == 1){
    $username = $_POST["username"];
    $password = $_POST["password"];
    $email = $_POST["email"];
    $role = 3;
    $check_dup = mysqli_query($ccon, "SELECT * from users WHERE username='$username'");
    if (mysqli_num_rows($check_dup) > 0){
		echo json_encode(array("statusCode"=>201));
	} else {
		$sql = "INSERT  INTO `users`(`username`,`password`,`email`,`role`) VALUES ('$username','$password','$email','$role')";
		if (mysqli_query($conn, $sql)){
			$_SESSION["username"] = $username;
			echo json_encode(array("statusCode"=>200));
		}else {
			echo json_encode(array("statusCode"=>202));
		}
		mysqli_close($conn);
	}
}
if($_POST["type"] == 2){
    $username = $_POST["username"];
    $password = $_POST["password"];
    $validCheck = mysqli_query($conn, "SELECT * FROM users WHERE username='$username' AND password='$password'");
	if($validCheck && mysqli_num_rows($validCheck) > 0){
		$_SESSION["username"] = $username;
		echo json_encode(array("statusCode"=>200));
	}
	else{
		echo json_encode(array("statusCode"=>201));
	}
}
if($_POST["type"] == 3){
	$username = $_POST["username"];
	$password = $_POST["password"];
	$role = 3;
	$checkAuth = mysqli_query($conn, "SELECT * from users WHERE role='$role'");
	if(1){}
}

$sql = mysqli_query($conn,"SELECT * FROM users WHERE username='admin'");
if($sql && mysqli_num_rows($sql) > 0){
	echo "oh boiz";
}
?>