<?PHP
header('Access-Control-Allow-Origin: http://localhost:3000');
$data = 'hello';
header('Content-Type: application/json');
echo json_encode($data);
?>