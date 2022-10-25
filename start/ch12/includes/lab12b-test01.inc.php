<?php

/* each element in this associative array contains three values:
       [0] - current temperature
       [1] - current condition
       [2] - 5 day forecast associative array  
*/             
$weatherData = [
    "Chicago" => [ 45, "fog",   [ "Mon" => [44,"fog"], "Tue" => [42,"sleet"], "Wed" => [40,"rain"], "Thu" => [44,"cloudy"], "Fri" => [45,"cloudy"]] ],
    "Paris" =>   [ 73, "sunny", [ "Mon" => [75,"sunny"], "Tue" => [75,"sunny"], "Wed" => [68,"cloudy"], "Thu" => [66,"cloudy"], "Fri" => [60,"rain"]] ],
    "Calgary" => [ -8, "snow",  [ "Mon" => [-7,"snow"], "Tue" => [-10,"snow"], "Wed" => [-3,"sleet"], "Thu" => [0,"cloudy"], "Fri" => [3,"sunny"]] ] 
];


?>