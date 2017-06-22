#!/usr/bin/env bash

apt-get update
apt-get upgrade -y

apt-get install rhino -y
apt-get install apache2 -y

cp /vagrant/bootstrap/000-default.conf /etc/apache2/sites-available/ 
rm -rf /var/www/html 
ln -s /vagrant/www /var/www/html

service apache2 restart