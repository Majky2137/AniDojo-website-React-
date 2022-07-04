<?PHP
require_once('config.php');


class API{

    protected $connection = null;

    public function __construct()
    {
         $dbh = new DataBase();
         $this->connection = $dbh->connect();
    }

    public function select($query = "" , $params = [])
    {
 
        try {
            $stmt = $this->executeStatement($query , $params);
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);               
            $dbh = null;

            return $result;

        } catch(Exception $e) {
            throw New Exception($e->getMessage(), $e->getError);
        }
        return false;
    }

    private function executeStatement($query = "" , $params = [])
    {
        try {
            $stmt = $this->connection->prepare($query);

            if($stmt === false)
                throw New Exception("Unable to do prepared statement: " . $query);

            $stmt->execute($params);

            return $stmt;

        } catch(Exception $e) {
            throw New Exception($e->getMessage() );
        }   
    }
}