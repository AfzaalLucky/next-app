<?php

	$errorMSG = "";

	// NAME
	if (empty($_POST["name"])) {
		$errorMSG = "Name is required. ";
	} else {
		$name = $_POST["name"];
	}

	// EMAIL
	if (empty($_POST["email"])) {
		$errorMSG .= "Email is required. ";
	} else {
		$email = $_POST["email"];
	}

	// PHONE
	if (empty($_POST["phone"])) {
		$errorMSG .= "Phone is required. ";
	} else {
		$phone = $_POST["phone"];
	}

	// DATE
	if (empty($_POST["date"])) {
		$errorMSG .= "Date is required. ";
	} else {
		$date = $_POST["date"];
	}

	// DISTANCE
	if (empty($_POST["distance"])) {
		$errorMSG = "distance is required. ";
	} else {
		$distance = $_POST["distance"];
	}

	// movetype
	if (empty($_POST["movetype"])) {
		$errorMSG = "movetype is required. ";
	} else {
		$movetype = $_POST["movetype"];
	}

	// SERVICES
	if (empty($_POST["services"])) {
		$errorMSG .= "services is required. ";
	} else {
		$services = $_POST["services"];
	}

	$subject ='Book Appointment from site';

	$EmailTo = "info@yourdomain.com"; // Replace with your email.

	// prepare email body text
	$Body = "";
	$Body .= "name: ";
	$Body .= $name;
	$Body .= "\n";
	$Body .= "Email: ";
	$Body .= $email;
	$Body .= "\n";
	$Body .= "Phone: ";
	$Body .= $phone;
	$Body .= "\n";
	$Body .= "Date: ";
	$Body .= $date;
	$Body .= "\n";
	$Body .= "distance: ";
	$Body .= $distance;
	$Body .= "\n";
	$Body .= "movetype: ";
	$Body .= $movetype;
	$Body .= "\n";
	$Body .= "services: ";
	$Body .= $services;
	$Body .= "\n";	

	// send email
	$success = @mail($EmailTo, $subject, $Body, "From:".$email);

	// redirect to success page
	if ($success && $errorMSG == ""){
	   echo "success";
	}else{
		if($errorMSG == ""){
			echo "Something went wrong :(";
		} else {
			echo $errorMSG;
		}
	}

?>