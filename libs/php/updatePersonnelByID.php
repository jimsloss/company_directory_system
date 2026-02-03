<?php

	// example use from browser
	// http://localhost/companydirectory/libs/php/getPersonnelByID.php?id=<id>
	
	// remove next two lines for production
	
	ini_set('display_errors', 'On');
	error_reporting(E_ALL);

	$executionStartTime = microtime(true);

	include("config.php");

	// header('Content-Type: application/json; charset=UTF-8');

	$conn = $link;

	if (mysqli_connect_errno()) {
		
		$output['status']['code'] = "300";
		$output['status']['name'] = "failure";
		$output['status']['description'] = "database unavailable";
		$output['status']['returnedIn'] = (microtime(true) - $executionStartTime) / 1000 . " ms";
		$output['data'] = [];

		mysqli_close($conn);

		echo json_encode($output);

		exit;

	}	

	// guidance on prepared statements
	    // https://www.w3schools.com/php/php_mysql_prepared_statements.asp

	$id = $_REQUEST['id'];
    $firstName = $_REQUEST['firstName'];
	$lastName = $_REQUEST['lastName'];
	$jobTitle = $_REQUEST['jobTitle'];
	$email = $_REQUEST['email'];
	$department = $_REQUEST['department'];

	// first query - SQL statement accepts parameters and so is prepared to avoid SQL injection.
	// $_REQUEST used for development / debugging. Remember to change to $_POST for production

	$update = $conn->prepare("UPDATE personnel SET firstName=?, lastName=?, jobTitle=?, email=?, departmentID=? WHERE id=?");

	$update->bind_param('ssssii', $firstName, $lastName, $jobTitle, $email, $department, $id);
  
	$status = $update->execute();
	
	if (false === $status) {

		$output['status']['code'] = "400";
		$output['status']['name'] = "executed";
		$output['status']['description'] = "Error updating record" . $conn->error;
		$output['data'] = [];

		mysqli_close($conn);

		echo json_encode($output); 

		exit;

	}
    
	
	$output['status']['code'] = "200";
	$output['status']['name'] = "ok";
	$output['status']['description'] = "success";
	$output['status']['returnedIn'] = (microtime(true) - $executionStartTime) / 1000 . " ms";
	
	mysqli_close($conn);

	echo json_encode($output); 

?>