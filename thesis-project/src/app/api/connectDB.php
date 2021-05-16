<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json; charset=UTF-8");
include_once './configurations/db.php';
$servername = "localhost";
$username = "root";
$password = "abcdef1234";
$dbname = "thesis_project";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
  die("Connection failed: " .$con->connect_error);
}
if($conn){
  echo "Connect success!";
  echo "this is good my man";
}
?>