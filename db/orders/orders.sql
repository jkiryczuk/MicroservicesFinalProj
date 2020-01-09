CREATE SCHEMA IF NOT EXISTS `orders`;
USE `orders`;

DROP TABLE IF EXISTS `orders`;

CREATE TABLE IF NOT EXISTS `orders` (
  `order_id` int(11) NOT NULL AUTO_INCREMENT,
  `address` varchar(255) COLLATE utf8_polish_ci NOT NULL,
  `status` varchar(45) COLLATE utf8_polish_ci NOT NULL,
  `full_name` varchar(90) COLLATE utf8_polish_ci NOT NULL,
  `email` varchar(45) COLLATE utf8_polish_ci NOT NULL,
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;


LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (32,'Shire','CONFIRMED','Gandalf Gray','gandalf.gray@gathering.com'),(33,'Stary Majdan 1','CONFIRMED','Jakub Wedrowycz','jakub.wedrowycz@wojslawice.net'),(34,'Metropolis, 10 West Avenue','CONFIRMED','Lois Lane','lois.lan@dailyplanet.com'),(35,'Shire','CONFIRMED','Gandalf Gray','gandalf.gray@gathering.com'),(36,'Arendelle, 2 Palace Square','CONFIRMED','Elsa Arendelle','elsa.arendelle@legends.org');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `orders_products`;

CREATE TABLE `orders_products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) NOT NULL,
  `product_name` varchar(45) COLLATE utf8_polish_ci NOT NULL,
  `amount` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_orders_products_1_idx` (`order_id`),
  CONSTRAINT `fk_orders_products_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

LOCK TABLES `orders_products` WRITE;
/*!40000 ALTER TABLE `orders_products` DISABLE KEYS */;
INSERT INTO `orders_products` VALUES (23,32,'Wooden scepter',1,1000),(24,33,'Moonshine Apparatus',1,1500),(25,34,'Pen',5,10),(26,34,'Gloves',1,100),(27,35,'Wooden scepter',1,1000),(28,35,'Beard oil',5,30),(29,36,'Gloves',1,100);
/*!40000 ALTER TABLE `orders_products` ENABLE KEYS */;
UNLOCK TABLES;

DROP USER IF EXISTS 'user'@'%';
CREATE USER 'user'@'%' IDENTIFIED WITH mysql_native_password BY 'password';
GRANT ALL PRIVILEGES ON *.* TO 'user'@'%' WITH GRANT OPTION;