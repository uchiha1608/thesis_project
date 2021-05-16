<?php
//Please create users database inside phpmysql admin and create userdetails tabel and create id, email and username fields
include 'connectDB.php';
 
    $sql = "INSERT INTO users (username,password)
        VALUES ('".$_POST['myEmail']."', '".$_POST['myUsername']."')";
    if (mysqli_query($conn,$sql)) {
    $data = array("data" => "You Data added successfully");
        echo json_encode($data);
    } else {
        $data = array("data" => "Error: " . $sql . "<br>" . $conn->error);
        echo json_encode($data);
        
    }
?>