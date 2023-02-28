<html>
<head>
<title>Lab 12a</title>
<style>
   img { float:left; width: 200px; }
   div { margin-left: 205px; }
   h1 { margin: 0; font-size: 1.5em;}
   h2 { margin: 0; font-size: 1.25em;}
</style>
</head>
<body>
<?php
   $thumbnail = "134020.jpg";
   $title = "Portrait of Isabella of Portugal";
   $artist = "Rogier van der Weyden";
   $year = 1450;
   $width = 37;
   $height = 46;
   $medium = "Oil on Panel";
   $era = "Renaissance";   
   $dimensions = $width . "cm x " . $height . "cm";      
?> 

<img src="images/<?= $thumbnail ?>"  />
<div>
   <h1> <?= $title ?> (<?= $year ?>) </h1>
   <h2>By  <?= $artist ?></h2>
   <p> <?= $width ?>cm x <?= $height ?>cm
   <br/>
   <?= $medium ?>
   <br/>
   <?= $era ?>
   <br/>
   </p>
</div>


</body>
</html>
