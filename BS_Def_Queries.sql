-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: classmysql.engr.oregonstate.edu:3306
-- Generation Time: May 13, 2019 at 01:03 PM
-- Server version: 10.3.13-MariaDB-log
-- PHP Version: 7.0.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cs340_seawellj`
--

-- --------------------------------------------------------

--
-- Table structure for table `Bookstore`
--

DROP TABLE IF EXISTS `Bookstore`;

CREATE TABLE `Bookstore` (
  `id` int(11) AUTO_INCREMENT NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Location` varchar(255) NOT NULL,
  `Type` varchar(255) NOT NULL,
  
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Bookstore`
--

INSERT INTO `Bookstore` (`Name`, `Location`, `Type`) VALUES
('Barnes & Noble', 'Hillsboro, OR', 'New'),
('Powell\'s Books', 'Portland, OR', 'Both'),
('OSU Bookstore', 'Corvallis, OR', 'Both'),
('Book Corner', 'Beaverton, OR', 'Used'),
('Pacific University Bookstore', 'Forest Grove, OR', 'Both'),
('Jan\'s Paperbacks', 'Beaverton, OR', 'Used'),
('Amazon Books', 'Portland, OR', 'Both'),
('Literary Leftovers', 'Battle Ground, WA', 'Used'),
('Lighthouse Book & Bible', 'Hillsboro, OR', 'Both'),
('Things From Another World', 'Beaverton, OR', 'Both');

-- --------------------------------------------------------

--
-- Table structure for table `Customer`
--

DROP TABLE IF EXISTS `Customer`;

CREATE TABLE `Customer` (
  `id` int(11) AUTO_INCREMENT NOT NULL,
  `Name` varchar(255) NOT NULL UNIQUE,
  `Address` varchar(255) NOT NULL,
  `Phone` varchar(255) NOT NULL,
    
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Customer`
--

INSERT INTO `Customer` (`Name`, `Address`, `Phone`) VALUES
('Mason Dixon', '1818 W Dover Ct. Hains, VA', '556-124-4468'),
('Zane Laraby', '7823 SW Kangaroo St. Hampton, WY', '504-122-4492'),
('Mason Jordan', '4700 S Cantor St. Laraby, WI', '532-145-4778'),
('James Dixon', '8383 NW Hockins Ln. Panther, TX', '528-114-5661'),
('Sarah McBride','210 NE Baseline St. Missoula, MO', '551-224-1211'),
('Kennedy Harris', '881 SE Cornell Ct. Lincoln, NE', '535-358-6202');

-- --------------------------------------------------------

--
-- Table structure for table `Product`
--

DROP TABLE IF EXISTS `Product`;

CREATE TABLE `Product` (
  `id` int(11) AUTO_INCREMENT NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Category` varchar(255) NOT NULL,
  `Author` varchar(255) NOT NULL,
  `Condition` varchar(255) NOT NULL,
  `Price` decimal(5,2) NOT NULL,
    
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Product`
--

INSERT INTO `Product` (`Name`, `Category`, `Author`, `Condition`, `Price`) VALUES
('Remember the Titans', 'DVD', 'Disney', 'New', '14.99'),
('The Grapes of Wrath', 'Novel', 'John Steinbeck', 'Used', '3.99'),
('Of Mice and Men', 'Novel', 'John Steinbeck', 'Used', '5.99'),
('The Things They Carried', 'Short Story', 'Tim O\'Brien', 'New', '2.49'),
('Anna Karenina', 'Novel', 'Leo Tolstoy', 'New', '12.99'),
('Madame Bovary', 'Book on CD/Tape', 'Gustave Flaubert', 'Used', '4.99'),
('War and Peace', 'Novel', 'Leo Tolstoy', 'Used', '6.99'),
('The Great Gatsby', 'Novel', 'F. Scott Fitzgerald', 'New', '10.49'),
('The Godfather', 'DVD', 'Francis Ford Copolla', 'New', '13.99'),
('Pulp Fiction', 'DVD', 'Quentin Tarantino', 'New', '18.99'),
('The Dark Knight', 'DVD', 'Christopher Nolan', 'Used', '11.99'),
('People', 'Magazine', 'Meredith Corporation', 'New', '1.99'),
('Time', 'Magazine', 'Time Inc.', 'New', '2.99'),
('Reader\'s Digest', 'Magazine', 'DeWitt Wallace, Lila Wallace', 'New', '1.99'),
('Hamlet', 'Other', 'William Shakespeare', 'Used', '7.49'),
('The Cat in the Hat', 'Picture Book', 'Dr. Seuss', 'Used', '5.49');


-- --------------------------------------------------------

--
-- Table structure for table `Product_Bookstore`
--

DROP TABLE IF EXISTS `Product_Bookstore`;

CREATE TABLE `Product_Bookstore` (
  `product_id` int(11) NOT NULL,
  `bookstore_id` int(11) NOT NULL,
    
    PRIMARY KEY (product_id, bookstore_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Product_Bookstore`
--

INSERT INTO `Product_Bookstore` (`product_id`, `bookstore_id`) VALUES
(1, 1),
(2, 2),
(2, 3),
(2, 4),
(3, 2),
(4, 1),
(4, 2),
(4, 3),
(4, 5);

-- --------------------------------------------------------

--
-- Table structure for table `Product_Sale`
--

DROP TABLE IF EXISTS `Product_Sale`;

CREATE TABLE `Product_Sale` (
  `product_id` int(11) NOT NULL,
  `sale_id` int(11) NOT NULL,
    
    PRIMARY KEY (product_id, sale_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Product_Sale`
--

INSERT INTO `Product_Sale` (`product_id`, `sale_id`) VALUES
(1, 2),
(2, 2),
(5, 3),
(2, 4),
(4, 4),
(1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `Sale`
--

DROP TABLE IF EXISTS `Sale`;

CREATE TABLE `Sale` (
  `id` int(11) AUTO_INCREMENT NOT NULL,
  `Bookstore_id` int(11) NOT NULL,
  `Customer_id` int(11) NOT NULL,
  `Sale_Price` decimal(5,2) NOT NULL,
  `Sale_Date` date NOT NULL,
    
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Sale`
--

INSERT INTO `Sale` (`Bookstore_id`, `Customer_id`, `Sale_Price`, `Sale_Date`) VALUES
(1, 1, '3.99', '2019-05-13'),
(6, 1, '14.99', '2019-05-14'),
(4, 2, '5.01', '2019-05-15'),
(3, 2, '5.49', '2019-05-16'),
(1, 4, '6.91', '2019-05-17'),
(2, 3, '5.49', '2019-05-18');

--
-- Indexes for dumped tables
--
--
-- Constraints for table `Sale`
--
  ALTER TABLE `Sale`
    ADD CONSTRAINT `Sale_ibfk_1` FOREIGN KEY (`Customer_id`) REFERENCES `Customer` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    ADD CONSTRAINT `Sale_ibfk_2` FOREIGN KEY (`Bookstore_id`) REFERENCES `Bookstore` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
    

--
-- Constraints for table `Product_Bookstore`
--
 ALTER TABLE `Product_Bookstore`
  ADD CONSTRAINT `Product_Bookstore_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `Product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Product_Bookstore_ibfk_2` FOREIGN KEY (`bookstore_id`) REFERENCES `Bookstore` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Product_Sale`

  ALTER TABLE `Product_Sale`
  ADD CONSTRAINT `Product_Sale_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `Product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Product_Sale_ibfk_2` FOREIGN KEY (`sale_id`) REFERENCES `Sale` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
