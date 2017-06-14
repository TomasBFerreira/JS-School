#!/usr/bin/env bash

apt-get update
apt-get upgrade -y
apt-get install rhino -y
apt-get install apache2 -y
cp /vagrant/bootstrap/000-default.conf /etc/apache2/sites-available/
cp /vagrant/www/index.html /var/www/html/index.html
service apache2 restart