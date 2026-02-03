<?php

	// example use from browser
	// http://localhost/companydirectory/libs/php/insertDepartment.php?name=New%20Department&locationID=<id>

	// remove next two lines for production
	
	ini_set('display_errors', 'On');
	error_reporting(E_ALL);

	$executionStartTime = microtime(true);
	
	// this includes the login details
	
	include("config.php");

//	header('Content-Type: application/json; charset=UTF-8');

	$conn = new mysqli($cd_host, $cd_user, $cd_password, $cd_dbname, $cd_port, $cd_socket);

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

	$name = ucwords($_REQUEST['name']); 
	$locationName = ucwords($_REQUEST['locationName']);
	$locationID = $_REQUEST['locationID'];

	$departments = [];
	
	$query1 = 'SELECT d.id, d.name, l.name as location FROM department d
	LEFT JOIN location l ON (l.id = d.locationID) ORDER BY d.name, l.name';

	$result1 = $conn->query($query1);
		
	if (!$result1) {

		$output['status']['code'] = "400";
		$output['status']['name'] = "executed";
		$output['status']['description'] = "query failed";	
		$output['data'] = [];

		mysqli_close($conn);

		echo json_encode($output); 

		exit;
	}
	
	
	while ($row = mysqli_fetch_assoc($result1)) {
		array_push($departments, $row);
	}
			
	// check if department name in above

	foreach ($departments as $d) {
		if($d['name'] == $name and $d['location'] == $locationName){
			$output['status']['code'] = "200";
			$output['status']['name'] = "exists";
			$output['status']['description'] = "department alreadyexists in location provided";	
			$output['data'] = [];

			mysqli_close($conn);

			echo json_encode($output); 

			exit;
		}
	}
	
	
	$query = $conn->prepare('INSERT INTO department (name, locationID) VALUES(?,?)');

	$query->bind_param("si", $name, $locationID);

	$query->execute();

	if (false === $query) {

		$output['status']['code'] = "400";
		$output['status']['name'] = "executed";
		$output['status']['description'] = "query failed";	
		$output['data'] = [];

		mysqli_close($conn);

		echo json_encode($output); 

		exit;

	}	
	
	$output['status']['code'] = "200";
	$output['status']['name'] = "ok";
	$output['status']['description'] = "success";
	$output['status']['returnedIn'] = (microtime(true) - $executionStartTime) / 1000 . " ms";
	$output['data'] = [];
	
	mysqli_close($conn);

	echo json_encode($output); 

?>