<?php

if (isset($_GET['site']) && $_GET['site'] == 'Home'){
    require_once("AnimeController.php");
 
    $objFeedController = new AnimeController();
    echo json_encode($objFeedController->listNewestAnime());

}


if (isset($_GET['site']) && $_GET['site'] == 'anime'){
    require_once("AnimeController.php");
 
    $objFeedController = new AnimeController();
    echo json_encode($objFeedController->listEpisodesAnime($_GET['id']));

}

?>