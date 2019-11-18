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
  if (!mysqli_num_rows($result)) {
    $products = 'There are no products to view at this time.';
  } else {
    while ($row = mysqli_fetch_assoc($result)) { $products[] = $row; }
  }
  return $products;
}
