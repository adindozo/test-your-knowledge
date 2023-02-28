<?php 
define("us_to_eur_rate", 0.87);
define("us_to_uk_rate", 0.76);
function us_to_eur($amount){
    return ceil($amount*us_to_eur_rate);
}
define("GREETING","Hello you! How are you today?");
error_log(GREETING);
function us_to_uk($amount){

    error_log(us_to_uk_rate);
    
    return ceil($amount*us_to_uk_rate);
}
function generateBox($name, $users_count){
    if($name=='Starter' || $name=='Developer') echo "<div class='box'>
    <header> $name </header>
    <div>
        <p><span> $users_count </span> users</p>
        <p><span>" . $users_count*5 . "</span> GB storage</p>
        <p><span>" . $users_count*2 . "</span> email accounts</p>
    </div> 
    <footer>$" . $users_count*10 . " • €" . us_to_eur($users_count*10) . " • £" . us_to_uk($users_count*10) . "</footer>            
    </div>";

    if($name=='Professional' || $name=='Enterprise') echo "<div class='box'>
    <header> $name </header>
    <div>
        <p><span> $users_count </span> users</p>
        <p><span>" . $users_count*10 . "</span> GB storage</p>
        <p><span>" . $users_count*10 . "</span> email accounts</p>
    </div> 
    <footer>$" . $users_count*9 . " • €" . us_to_eur($users_count*9) . " • £" . us_to_uk($users_count*9) . "</footer>            
        
    </div>";
    
    
}
?>