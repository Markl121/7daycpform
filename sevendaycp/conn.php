<?php 
/*
			code
			email
			haveOther
			phone
			special
 */




$DB_HOST = "localhost";
$DB_USER = "root";
$DB_PASS = "";
$DB_NAME = "sevendaycp";

date_default_timezone_set("UTC");

$conn=mysqli_connect($DB_HOST,$DB_USER,$DB_PASS,$DB_NAME);
if (!$conn) {

	$conn = mysqli_connect($DB_HOST,$DB_USER,$DB_PASS);

	if (!$conn) {
		die("Connection failed: " . mysqli_connect_error());
	}

	$sql = "CREATE DATABASE sevendaycp";
	if (mysqli_query($conn, $sql)) {
		echo "Database created successfully";
	} else {
		echo "Error creating database: " . mysqli_error($conn);
	}

	mysqli_close($conn);
	$conn=mysqli_connect($DB_HOST,$DB_USER,$DB_PASS,$DB_NAME);
}

$result = mysqli_query($conn,"SELECT * FROM user_info");
if(!$result){
    echo "该表不存在,准备创建表格:user_info";
    $sql = "CREATE TABLE user_info (
			id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
			uname VARCHAR(30) NOT NULL COMMENT 'name' , 
			gender INT(1) NOT NULL COMMENT 'gender: 0 female, 1 male' , 
			tagender INT(1) NOT NULL COMMENT 'their gender: 0 female, 1 male' , 
			date TIMESTAMP NOT NULL COMMENT 'canada arrival' , 
			agegroup VARCHAR(30) NOT NULL COMMENT 'age group' , 
			hobbies TEXT COMMENT 'hobbies' , 
			utime TIMESTAMP NOT NULL COMMENT 'update time' ) CHARACTER SET utf8 COLLATE utf8_general_ci";

if (mysqli_query($conn, $sql)) {
    echo "Table patient created successfully";
} else {
    echo "Error creating table: " . mysqli_error($conn);
}

//mysqli_close($conn);
}
?>