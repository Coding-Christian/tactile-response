<?php

if ($request['method'] === 'GET') {
  $link = get_db_link();
  $message = check_connection($link);
  if (empty($_SESSION['cart_id'])) {
    $response['body'] = [
      'message' => $message,
      "cart" => []
    ];
  } else {
    $response['body'] = [
      'message' => $message
    ];
  }
  send($response);
}

function check_connection($link) {
  $sql = 'select 1';
  $link->query($sql);
  return 'Successfully connected to MySQL!';
}
