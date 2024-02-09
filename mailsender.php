<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $name = htmlspecialchars($_POST["feedback-name"]);
    $phone = htmlspecialchars($_POST["feedback-phone"]);

    $source_page = isset($_POST["source_page"]) ? htmlspecialchars($_POST["source_page"]) : "Unknown Page";

    $from_email = "info@pvc-profil.kz"; 
    $to_email = "admin@pvc-profil.kz"; 
    $subject = 'Новая заявка с формы';

    $message = "
        <html>
        <head>
            <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'>
            <title>$subject</title>
        </head>
        <body>
        <div style='background: #ffd700; display:flex; max-width: 100%; padding-left: 160px; height:100px; border-radius: 5px;'>
            <a href='https://pvc-profil.kz'>
                <img class='logotype' src='https://pvc-profil.kz/css/img/logo.png' style='width:100px; height:90px; margin-left:20px; padding:10px; ' alt='Изображение логотипа' title='Компания Ампир'>
            </a>
            <span style='font-weight: bold; color: #434343; font-size: 18px; margin-top: 30px; font-family: Roboto, sans-serif;'>Завяка на обратную связь</span>
        </div>
        <div style='max-width: 100%; background-color: #c2c2c2; padding: 20px; border-radius: 5px;'>
            <h3 style='color: #434343; text-decoration: underline; font-family: Roboto, sans-serif;'>Клиент:</h3>
            <p style='font-family: Roboto, sans-serif; font-weight: bold; color: #434343; font-size: 18px;'><strong>Имя:</strong> $name</p>
            <p style='font-family: Roboto, sans-serif; font-weight: bold; color: #434343; font-size: 18px;'><strong>Телефон:</strong> $phone</p>
            <p style='font-family: Roboto, sans-serif; font-weight: bold; color: #434343; font-size: 18px;'><strong>Отправлено со страницы:</strong> $source_page</p>
        </div>
        <div style='background: #ffd700; display: flex; max-width: 100%; padding-left: 160px; height:100px; border-radius: 5px;'>
            <span style='font-weight: bold; color: #434343; font-size: 18px; display:flex; margin-top: 30px; font-family: Roboto, sans-serif;'>Отправлено с сайта &nbsp; pvc-profil.kz</span>
        </div>
        </body>
        </html>
    ";

    $headers = "From: $from_email\r\n";
    $headers .= "Content-type: text/html; charset=utf-8\r\n";

    if (mail($to_email, $subject, $message, $headers)) {
        header("HTTP/1.1 200 OK");
        echo json_encode(["status" => "success"]);
    } else {
        header("HTTP/1.1 500 Internal Server Error");
        echo json_encode(["status" => "error", "message" => "Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже."]);
    }
} else {
    header("HTTP/1.1 400 Bad Request");
    echo json_encode(["status" => "error", "message" => "Неверный метод запроса"]);
}
?>
