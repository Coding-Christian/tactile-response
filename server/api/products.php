<?php

if ($request['method'] === 'GET') {
  $link = get_db_link();
  if (array_key_exists('productId', $request['query'])) {
    $productId = intval($request['query']['productId']);
    if ($productId <= 0) { throw new ApiError('Invalid product ID.', 400); }
    $response['body'] = check_product_details($link, $productId);
  } else { $response['body'] = check_all_products($link); }
  send($response);
}

function check_all_products($link) {
  $sql = 'SELECT `productId`, `name`, `price`, `image`, `shortDescription`
    FROM `products`';
  $result = mysqli_query($link, $sql);
  if (!mysqli_num_rows($result)) { $products = []; }
  else { $products = mysqli_fetch_all($result, MYSQLI_ASSOC); }
  return $products;
}

function check_product_details($link, $productId) {
  $sql = "SELECT `productId`, `name`, `price`, `image`, `shortDescription`, `longDescription`
  FROM `products`
  WHERE `productId` = $productId";
  $result = mysqli_query($link, $sql);
  if (!mysqli_num_rows($result)) { throw new ApiError('Page not found.', 404); }
  else { $products = mysqli_fetch_all($result, MYSQLI_ASSOC); }
  return $products;
}
