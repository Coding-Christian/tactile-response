<?php

if ($request['method'] === 'GET') {
  $link = get_db_link();
  if (array_key_exists('productId', $request['query'])) {
    $productId = intval($request['query']['productId']);
    if ($productId <= 0) { throw new ApiError('Invalid product ID.', 400); }
    $filter = "`productId` = $productId";
  } else { $filter = 1; }
  $response['body'] = check_products($link, $filter);
  send($response);
}

function check_products($link, $filter) {
  if ($filter !== 1) { $selector = '*'; }
  else { $selector = '`productId`, `name`, `price`, `image`, `shortDescription`'; }
  $sql = "SELECT $selector FROM `products` WHERE $filter";
  $result = mysqli_query($link, $sql);
  if (!mysqli_num_rows($result)) { throw new ApiError('Page not Found', 400); }
  $products = mysqli_fetch_all($result, MYSQLI_ASSOC);
  return $products;
}
