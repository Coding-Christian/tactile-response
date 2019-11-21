<?php

if ($request['method'] === 'POST') {
  $link = get_db_link();
  if (!isset($_SESSION['cart_id'])) { throw new ApiError('No cart Found', 400); }
  $name = $request['body']['name'];
  $card = $request['body']['creditCard'];
  $address = $request['body']['shippingAddress'];
  if (!isset($name)) { $missing = 'Name'; }
  else if (!isset($card)) {$missing = 'Credit Card'; }
  else if (!isset($address)) {$missing = 'Shipping Address'; }
  if (isset($missing)) {throw new ApiError("Missing $missing from request", 400); }
  $stmt = prep_query($link);
  mysqli_stmt_bind_param($stmt, 'dsss', $_SESSION['cart_id'], $name, $card, $address);
  mysqli_execute($stmt);
  $response['body'] = [
    'orderId' => mysqli_insert_id($link),
    'name' => $name,
    'creditCard' => $card,
    'shippingAddress' => $address
  ];
  unset($_SESSION['cart_id']);
  send($response);
}

function prep_query($link) {
  $sql = "INSERT INTO `orders` (`orderId`,`cartId`,`name`,`creditCard`,`ShippingAddress`,`createdAt`)
    VALUES (NULL, ?, ?, ?, ?, CURRENT_TIMESTAMP);";
  $stmt = mysqli_prepare($link, $sql);
  return $stmt;
}
