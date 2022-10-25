<?php

/* these three will need to be moved to lab14a-db-classes.inc.php */

function getGallerySQL() {
   $sql = 'SELECT GalleryID, GalleryName, GalleryNativeName, GalleryCity, GalleryCountry, Latitude, Longitude, GalleryWebSite FROM Galleries';
   $sql .= " ORDER BY GalleryName";
   return $sql;
}

function getPaintingSQL() {
    $sql = "SELECT PaintingID, Paintings.ArtistID AS ArtistID, FirstName, LastName, GalleryID, ImageFileName, Title, ShapeID, MuseumLink, AccessionNumber, CopyrightText, Description, Excerpt, YearOfWork, Width, Height, Medium, Cost, MSRP, GoogleLink, GoogleDescription, WikiLink, JsonAnnotations FROM Paintings INNER JOIN Artists ON Paintings.ArtistID = Artists.ArtistID  ";
    return $sql;
}

function addSortAndLimit($sqlOld) {
    $sqlNew = $sqlOld . " ORDER BY YearOfWork limit 20";
    return $sqlNew;
}


function makeArtistName($first, $last) {
    return utf8_encode($first . ' ' . $last);
}


/*
  You will likely need to implement functions such as these ...
*/
function getAllGalleries($connection) {
  
}

function getAllPaintings($connection) {
      
}

function getPaintingsByGallery($connection, $gallery) {
     
}



?>