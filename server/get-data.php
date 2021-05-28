<?php
  if ($_SERVER['REQUEST_METHOD'] === 'GET') {

    $response = [
      'poslovi' => [
        'current_week' => [
          ["FirstName LastName", 1, 1, 0, 0, 1, -1, -1],
          ["FirstName LastName", 1, 1, 0, 0, 0, -1, -1]
        ],
        'next_week' => [
          ["FirstName LastName", 1, 1, 0, 0, 0, -1, -1],
          ["FirstName LastName", 1, 1, 1, 0, 1, -1, -1]
        ]],
      'polovni_automobili' => [
        'current_week' => [
          ["FirstName LastName", 1, 1, 0, 0, 1, -1, -1],
          ["FirstName LastName", 1, 1, 0, 0, 0, -1, -1]
        ],
        'next_week' => [
          ["FirstName LastName", 1, 1, 0, 0, 0, -1, -1],
          ["FirstName LastName", 1, 1, 1, 0, 1, -1, -1]
        ]],
      'fourzida' => [
        'current_week' => [
          ["FirstName LastName", 1, 1, 0, 0, 1, -1, -1],
          ["FirstName LastName", 1, 1, 0, 0, 0, -1, -1]
        ],
        'next_week' => [
          ["FirstName LastName", 1, 1, 0, 0, 0, -1, -1],
          ["FirstName LastName", 1, 1, 1, 0, 1, -1, -1]
        ]],
    ];

    echo json_encode($response);
  }
?>