<?php 
/*
			id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
			uname VARCHAR(30) NOT NULL COMMENT 'name' , 
			gender INT(1) NOT NULL COMMENT 'gender: 0 female, 1 male' , 
			tagender INT(1) NOT NULL COMMENT 'their gender: 0 female, 1 male' , 
			utime TIMESTAMP NOT NULL COMMENT 'update time' , 
			agegroup VARCHAR(30) NOT NULL COMMENT 'age group' , 
			hobbies TEXT COMMENT 'hobbies') CHARACTER SET utf8 COLLATE utf8_general_ci";
			$sql = "INSERT INTO user_info (uname, gender, tagender, date, agegroup, hobbies, utime) VALUES ('$uname', $gender, $tagender, 'july', '123', 'asdfasdf', CURRENT_TIMESTAMP)";
 */


include 'conn.php';


$uname = $_GET["uname"];
$gender = $_GET["gender"];
$tagender = $_GET["tagender"];
$agegroup = $_GET["agegroup"];
$hobbies = $_GET["hobbies"];
$date = $_GET["date"];

//检查非空状态
if ($uname != '' && $gender != '' && $agegroup != '') {


	$sql = "INSERT INTO user_info (uname, gender, tagender, date, agegroup, hobbies, utime) VALUES ('$uname', 1, 1, 'july', '123', 'asdfasdf', CURRENT_TIMESTAMP)";

	if (mysqli_query($conn, $sql)) {
		echo "1201";
		// echo mysql_error();
	}else {
		echo "1200";
		// echo "成功插入一条记录: ".$uname.$uid.$isSick.date('Y-m-d H:i:s').$remark;
	}
	
}else {
	echo "1202";
}

mysqli_close($conn);

 ?>