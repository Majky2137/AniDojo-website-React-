<?php
    class DataBase {
        private $server = 'localhost';
        private $dbname = 'hexanime';
        private $user = 'root';
        private $pass = '';

        public function connect() {
            try {
                $dbh = new PDO('mysql:host=' .$this->server .';dbname=' .  $this->dbname, $this->user, $this->pass);
                $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                $dbh->setAttribute(PDO::ATTR_EMULATE_PREPARES, FALSE);
                return $dbh;

            } catch (\Exception $e) {
                echo "Database Error: " . $e->getMessage();
            }
        }
    }
?>