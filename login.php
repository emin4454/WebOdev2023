<?php
$username=$_POST["kullaniciAdi"];
$password=$_POST["sifrem"];
$myUsername = "b221210377@gmail.com";
$myPassword = "b221210377";

if($username==$myUsername && $password == $myPassword)
{
    echo("Hoşgeldiniz b221210377. 3 saniye içinde giriş ekranına yönelendirileceksiniz");
    header("Refresh: 3; url=index.html");
}
else{
    echo "Girilen bilgiler hatalıdır. 3 saniye içinde giriş ekranına yönelendirileceksiniz";
    header("Refresh: 3; url=giris.html");
}
?>