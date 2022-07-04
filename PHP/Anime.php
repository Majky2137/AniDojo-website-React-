<?php
require_once "API.php";

class Anime extends API{

    public function returnAnime($id){
        return $this->select("SELECT * FROM `anime` WHERE `id` = $id;");
    }
//title, $epsMin, $epsMax, $type, $studio, $limit
    public function returnAnimeList($template){
        return $this->select('SELECT anime.*, s.studio AS nazwa_studia FROM `anime` INNER JOIN `studia` s ON s.id_studia = anime.studio WHERE `anime`.`title` LIKE ? && `episodes` >= ? && `episodes` <= ? && `type` LIKE ? && anime.`studio` LIKE ? GROUP BY `anime`.`title` ORDER BY `anime`.`title` ASC LIMIT ?;', $template);
    }
    
    public function returnEpisodes($id){
        return $this->select("SELECT * FROM `episodes` WHERE `id_anime` = ? ORDER BY `ep_nr`;", $id);
    }
    
    //, $tags = [], $genres = [] , $startDate = null, $endDate = null  && `start` >= $startDate && `end` < = $endDate  `tags` = $tags && `genres` = $genres &&
}//[1, $title], [2, $epsMin], [3, $epsMax], [4, $type], [5, $studio], [6, $limit]
?>