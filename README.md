# ansible_wordpress_theme
This project uses Virtualbox, Vagrant and Ansible to create a Centos 7 virtual machine and a clean wordpress installation with a custom theme enabled.

## Requirements
- [Virtualbox](https://www.virtualbox.org/wiki/Downloads) - V 6.1
- [Vagrant](https://www.vagrantup.com/downloads.html) - V 2.2.9
- [Ansible](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html) - V 2.9.8

## Install:
- Download the ZIP File
- The variables are in the folder: /ansible/vars/settings.yml

``` '*.yml'
#MySQL Settings
MYSQL_NEW_ROOT_PASSWORD: "Y6@3kERJ@r%9e&5^" 
MYSQL_DB: "actbold_custom_theme"
MYSQL_USER: "actbold_usr"
MYSQL_PASSWORD: "Y6@3kERJ@r%9e&5^"
DUMP_FILE: "actbold_custom_theme.sql"

#theme Settings 
THEME_NAME_FOLDER: "custom_theme"
THEME_NAME: "custom_theme"

#composer settings
COMPOSER_INSTALLER_PATH: /tmp/installer.php


#Apache Settings
HOST: "http://local.custom.theme"


#WP Settings
ADMIN_EMAIL: "jose@actbold.com"
ADMIN_PASSWORD: "123456"

 ``` 

- Execute this code in the root (ansible_wordpress_theme) folder:
``` '*.txt'
vagrant up
```

- Drink a coffe meanwhile all tasks are executed :)


## Versions Installed to LAMP and Wordpress
- Centos 7
- Apache 2
- MySQL 5.7
- PHP 7.3
- Wordpress 5.4.1

## The Wordpress Theme Uses (ansible_wordpress_theme/custom_theme/assets)
- Webpack 4.30

### Use it
- Run npm install in the folder
- Create your files in src/_scss files
- There are two commands
  - npm run dev
  - npm run build - This minify the css file.