---
layout: default
title:  Piemēri
description: ~
grand_parent: Programmēšana
parent: PHP
nav_order: 10
---

# Piemēri

### Datu nogādāšana uz serveri ar POST

~~~php
<?php
   if( $_POST["vards"]) {
      echo "Sveiks, ". $_POST['vards']. "!<br />";
   }
?>
~~~
~~~html
<html>
   <body>
      <form action = "<?php $_PHP_SELF ?>" method = "POST">
         Vārds : <input type = "text" name = "vards" />
         <input type = "submit" />
      </form>
   
   </body>
</html>
~~~

Šajā piemērā serverim tiek nogādāts ievades lauciņš `vards`. Formai tiek pateikta metode, šajā gadījumā `POST`.