# Membuat Endpoint REST API dengan EXPRESS

kali ini kita akan mencoba membuat sebuah ***RESTFULL API*** sederhana
dengan menggunakan ***EXPRESS***, menggunakan DBMS ***MYSQL***.

## Persiapan
- **SETUP DATABASE**
kalian harus punya mysql dalam machine kalian, silakan cari tau
cara menginstall __MYSQL__ pada OS Kalian.

Selanjutnya adalah konfigurasi database __MYSQL__ kalian,
silakan masuk ke __MYSQL__ kalian dengan cara :

***__mysql -u root__**

Selanjutnya kalian akan masuk ke dalam __MYSQL__ Comand Line.

- **mysql_native_password**
Kadang kala kita akan menemui hambatan dalam menjalankan __MYSQL__
pada aplikasi Express.

Sebaiknya kita atur dulu mysql_native_password nya dengan cara,
masih di dalam **MYSQL CLI** nya, kira ketikan 

**ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '';**

