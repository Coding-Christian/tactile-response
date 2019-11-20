<?php

$link = get_db_link();

if ($request['method'] === 'GET') {
  if (!isset($_SESSION['cart_id'])) { $response['body'] = []; }
  send($response);
} else if ($request['method'] === 'POST') {
  $productId = intval($request['body']['productId']);
  if ($productId <= 0) { throw new ApiError('Valid product ID required', 400); }
}
