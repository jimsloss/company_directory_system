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

	$current = 'SELECT id, name, locationID From department';
	$currentresult = $conn->query($current);

	if (!$currentresult) {

		$output['status']['code'] = "400";
		$output['status']['name'] = "executed";
		$output['status']['description'] = "query failed";	
		$output['data'] = [];

		mysqli_close($conn);

		echo json_encode($output); 

		exit;

	}

	$departments = [];

	while ($row = mysqli_fetch_assoc($currentresult)) {
		array_push($departments, $row);
	}

	// $departmentID = 50;
    // $departmentName = "Human Resources";
	// $locationID = 2;

	$departmentID = $_REQUEST['departmentID'];
    $departmentName = $_REQUEST['departmentName'];
	$locationID = $_REQUEST['locationID'];


	foreach ($departments as $d) {
		if( $d['name'] == $departmentName && $d['locationID'] == $locationID ){
			$output['status']['code'] = "200";
			$output['status']['name'] = "exists";
			$output['status']['description'] = "location already exists";	
			$output['data'] = [];

			mysqli_close($conn);

			echo json_encode($output); 

			exit;
		}
	}


	// first query - SQL statement accepts parameters and so is prepared to avoid SQL injection.
	// $_REQUEST used for development / debugging. Remember to change to $_POST for production

	$update = $conn->prepare("UPDATE department SET name=?, locationID=? WHERE id=?");

	$update->bind_param('sii', $departmentName, $locationID, $departmentID);
  
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