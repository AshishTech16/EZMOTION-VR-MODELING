<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$file = 'data.xlsx';

$current_data = file_get_contents($file);

$data = array(
    'name' => $name,
    'email' => $email,
    'message' => $message
);

$current_data .= implode("\t", $data) . "\n";

file_put_contents($file, $current_data);
?>
