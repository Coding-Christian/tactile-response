<?php

$link = get_db_link();

if ($request['method'] === 'GET') {
  if (!isset($_SESSION['cart_id'])) { $response['body'] = []; }
  else { $response['body'] = get_cart_products($link); }
  send($response);
} else if ($request['method'] === 'POST') {
  $productId = intval($request['body']['productId']);
  if ($productId <= 0) { throw new ApiError('Valid product ID required', 400); }
  $_SESSION['cart_id'] = create_cart($link);
  $price = check_product_price($link, $productId);
  $newCartItemId = add_to_cart($link, $productId, $price);
  $response['body'] = check_product_details($link, $newCartItemId);
  send($response);
}

function create_cart($link) {
  $sql = 'INSERT INTO `carts` (`cartId`, `createdAt`) VALUES (NULL, CURRENT_TIMESTAMP);';
  mysqli_query($link, $sql);
  $insertId = mysqli_insert_id($link);
  return $insertId;
}

function get_cart_products($link) {
  $cartId = $_SESSION['cart_id'];
  $sql = "SELECT * FROM `cartItems` WHERE `cartId` = $cartId;";
  $result = mysqli_query($link, $sql);
  $products = mysqli_fetch_all($result, MYSQLI_ASSOC);
  return $products;
}

function check_product_price($link, $productId) {
  $sql = "SELECT `price` FROM `products` WHERE `productId` = $productId;";
  $result = mysqli_query($link, $sql);
  if (!mysqli_num_rows($result)) { throw new ApiError('Page not found.', 404); }
  else { $price = mysqli_fetch_all($result, MYSQLI_ASSOC); }
  return $price;
}

function add_to_cart($link, $productId, $price) {
  $cartId = $_SESSION['cart_id'];
  $sql = "INSERT INTO `cartItems` (`cartItemId`, `cartId`, `productId`, `price`)
    VALUES (NULL, '$cartId', '$productId', '$price');";
  mysqli_query($link, $sql);
  $insertId = mysqli_insert_id($link);
  return $insertId;
}

function check_product_details($link, $newCartItemId) {
  $sql = "SELECT `cartItemId`, `products`.`productId`, `name`, `products`.`price`, `image`, `shortDescription`
    FROM `cartItems`
    JOIN `products`
      ON `cartItems`.`productId` = `products`.`productId`
    WHERE `cartItemId` = $newCartItemId;";
  $result = mysqli_query($link, $sql);
  $product = mysqli_fetch_all($result, MYSQLI_ASSOC);
  return $product;
}
