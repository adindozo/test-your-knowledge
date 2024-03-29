<?php

include('includes/lab12b-test01.inc.php');

?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <title>Lab 12b</title>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,800" rel="stylesheet">
    <link rel="stylesheet" href="css/weather-icons.min.css">

    <link rel="stylesheet" href="css/lab12b-test01.css">
</head>

<body>
    <main class="grid-container">

        <?php
        foreach ($weatherData as $key => $value) {
            // echo "day[" . $key . "]=" . $value;
        ?>
         <article class="box"> 
            <h1><?= $key ?></h1>
            
            <div class="weather">
                <img src="images/Chicago.jpg"  />
                <div>
                    <h2><?= $value[0] ?></h2>
                    <p><?= $value[1] ?></p>                
                </div>
            </div>
            <section>
            <?php 
                 foreach ($value[2] as $day => $forecast) {
                
            ?>
                  <div>
                    <h3><?= $day ?></h3>
                    <p><i class="wi wi-day-<?= $forecast[1] ?>"></i></p>
                    <p><?= $forecast[0] ?></p>
                </div>
            <?php 
                 }
            ?>
            </section>
              
               
            
        </article>

    <?php 
        }
    ?>


        <article class="box">
            <h1>Paris</h1>

            <div class="weather">
                <img src="images/Paris.jpg" />
                <div>
                    <h2>73</h2>
                    <p>Sunny</p>
                </div>
            </div>
            <section>
                <div>
                    <h3>Mon</h3>
                    <p><i class="wi wi-day-sunny"></i></p>
                    <p>75</p>
                </div>
                <div>
                    <h3>Tue</h3>
                    <p><i class="wi wi-day-sunny"></i></p>
                    <p>75</p>
                </div>
                <div>
                    <h3>Wed</h3>
                    <p><i class="wi wi-day-cloudy"></i></p>
                    <p>68</p>
                </div>
                <div>
                    <h3>Thu</h3>
                    <p><i class="wi wi-day-cloudy"></i></p>
                    <p>66</p>
                </div>
                <div>
                    <h3>Fri</h3>
                    <p><i class="wi wi-day-rain"></i></p>
                    <p>60</p>
                </div>
            </section>
        </article>

        <article class="box">
            <h1>Calgary</h1>

            <div class="weather">
                <img src="images/Calgary.jpg" />
                <div>
                    <h2>-8</h2>
                    <p>Snow</p>
                </div>
            </div>
            <section>
                <div>
                    <h3>Mon</h3>
                    <p><i class="wi wi-day-snow"></i></p>
                    <p>-7</p>
                </div>
                <div>
                    <h3>Tue</h3>
                    <p><i class="wi wi-day-snow"></i></p>
                    <p>-10</p>
                </div>
                <div>
                    <h3>Wed</h3>
                    <p><i class="wi wi-day-sleet"></i></p>
                    <p>-3</p>
                </div>
                <div>
                    <h3>Thu</h3>
                    <p><i class="wi wi-day-cloudy"></i></p>
                    <p>0</p>
                </div>
                <div>
                    <h3>Fri</h3>
                    <p><i class="wi wi-day-sunny"></i></p>
                    <p>3</p>
                </div>
            </section>
        </article>

    </main>
</body>

</html>