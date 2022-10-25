<?php
class DatabaseHelper {

    /*  This function returns a connection object to a database   */
    public static function createConnection( $values=array() ) {
        $connString = $values[0];
        $user = $values[1];
        $password = $values[2];
        $pdo = new PDO($connString,$user,$password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        return $pdo;
    }

    /*
    This function runs the specified SQL query using the 
    passed connection and the passed array of parameters (null if none)
    */
    public static function runQuery($connection, $sql, $parameters)     {
        // Ensure parameters are in an array
        if (!is_array($parameters)) {
            $parameters = array($parameters);
        }

        $statement = null;
        if (count($parameters) > 0) {
            // Use a prepared statement if parameters 
            $statement = $connection->prepare($sql);
            $executedOk = $statement->execute($parameters);
            if (! $executedOk) throw new PDOException;
        } else {
            // Execute a normal query     
            $statement = $connection->query($sql); 
            if (!$statement) throw new PDOException;
        }
        return $statement;
    }   
	

}

class ArtistDB {
    private static $baseSQL = "SELECT * FROM Artists ORDER BY LastName";

    public function __construct($connection) {
        $this->pdo = $connection;
    }

    public function getAll() {
        $sql = self::$baseSQL;
        $statement = DatabaseHelper::runQuery($this->pdo, $sql, null);
        return $statement->fetchAll();
    }    
}

class PaintingDB {
    //private static $baseSQL = "SELECT * FROM Paintings ";
    private static $baseSQL = "SELECT PaintingID, Paintings.ArtistID, FirstName, LastName, Paintings.GalleryID, GalleryName, ImageFileName, Title, Excerpt, ImageFileName, YearOfWork FROM Galleries INNER JOIN (Artists INNER JOIN Paintings ON Artists.ArtistID = Paintings.ArtistID) ON Galleries.GalleryID = Paintings.GalleryID ";

    public function __construct($connection) {
        $this->pdo = $connection;
    }

    public function getAll() {
        $sql = self::$baseSQL;
        $statement = DatabaseHelper::runQuery($this->pdo, $sql, null);
        return $statement->fetchAll();
    }

	// add additional methods here

}

// add additional classes here


?>