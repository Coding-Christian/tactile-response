<?php

if ($request['method'] === 'GET') {
  $link = get_db_link();
  $response['body'] = check_products($link);
  send($response);
}

function check_products($link) {
  $sql = 'SELECT `productId`, `name`, `price`, `image`, `shortDescription`
    FROM `products`';
  $result = mysqli_query($link, $sql);
  if (!mysqli_num_rows($result)) { $products = []; }
  else { $products = mysqli_fetch_all($result, MYSQLI_ASSOC); }
  return $products;
}
