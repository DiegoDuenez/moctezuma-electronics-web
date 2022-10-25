<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!--===== FAVICON =====-->
    <link rel="apple-touch-icon" sizes="180x180" href="resources/favicons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="resources/favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="resources/favicons/favicon-16x16.png">
    <link rel="manifest" href="resources/favicons/site.webmanifest">
    <link rel="mask-icon" href="resources/favicons/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#333333">
    <meta name="theme-color" content="#ffffff">
    <!--===== FONTAWESOME ICONS =====-->
    <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.1.0/css/all.css">
    <!--====== AOS CSS ======-->
    <link rel="stylesheet" href="libs/aos/dist/aos.css">
    <!--====== GLIDER CSS ======-->
    <link rel="stylesheet" href="libs/glider/glider.min.css">
    <!--====== MAIN CSS ======-->
    <link rel="stylesheet" href="css/index.css">
    <!--====== GOOGLE RECAPTCHA ======-->
    <script src="https://www.google.com/recaptcha/api.js"></script>
    <title>Moctezuma Electronics México</title>
    
</head>
<body>

  <!--===== PROGRESS BAR START =====-->
  <?php include_once 'templates/components/progress-bar.php' ?>
  <!--===== PROGRESS BAR END =====-->

  <!--===== BANNER START =====-->
  <?php include_once 'templates/components/banner.php' ?>
  <!--===== BANNER END =====-->

  <!--===== NUESTRA EMPRESA START =====-->
  <?php include_once 'templates/layouts/nuestra-empresa.php' ?>
  <!--===== NUESTRA EMPRESA END =====-->

  <!--===== PRODUCTOS START =====-->
  <?php require_once 'templates/components/tabs.php' ?>
  <!--===== PRODUCTOS END =====-->

  <!--===== NUEVO LANZAMIENTO START =====-->
  <?php include_once 'templates/layoutS/nuevo-lanzamiento.php' ?>
  <!--===== NUEVO LANZAMIENTO END =====-->

  <!--===== GUIAS DEL COMPRADOR START =====-->
  <?php include_once 'templates/layouts/guias_comprador.php' ?>
  <!--===== GUIAS DEL COMPRADOR END =====-->

  <!--===== INDUSTRIAS START =====-->
  <?php include_once 'templates/layouts/industrias.php' ?>
  <!--===== INDUSTRIAS END =====-->

  <!--===== SERVICIOS START =====-->
  <?php include_once 'templates/layouts/servicios.php' ?>
  <!--===== SERVICIOS END =====-->

  <!--===== CONTACTO START =====-->
  <?php include_once 'templates/layouts/contacto.php' ?>
  <!--===== CONTACTO END =====-->

  <!--===== MENU LATERAL DESPLEGABLE START =====-->
  <?php require_once 'templates/components/menu.php' ?>
  <!--===== MENU LATERAL DESPLEGABLE END =====-->

  <!--===== SCRIPTS START =====-->
  <?php include_once 'templates/scripts/scripts.php' ?>
  <!--===== SCRIPTS END =====-->

</body>
</html>