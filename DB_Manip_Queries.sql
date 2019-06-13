/*Data Manipulation Queries

Name: Jake Seawell & Aaliyah Fiala
Date: 5/6/19
Description: These are the queries that will allow users to manipulate our database.

*/


/* PRODUCTS - similar queries for bookstores & customers */ 

/* Get all products */
SELECT * FROM `Product`;
/* OR */
SELECT `id`, `Name`, `Category`, `Author`, `Condition`, `Price` FROM `Product`;

/* Get & sort all products in name-ascending order (USED FOR TABLES AND DROPDOWNS) */ 
SELECT `id`, `Name`, `Category`, `Author`, `Condition`, `Price` FROM `Product` ORDER BY `Name` ASC;

/* Get all products whose name = _______ (SEARCH) */
SELECT `id`, `Name`, `Category`, `Author`, `Condition`, `Price` FROM `Product` WHERE `Name` = ?;

/* Get a single product by id (USED TO GRAB SINGLE PRODUCT TO UPDATE*/
SELECT `id`, `Name`, `Category`, `Author`, `Condition`, `Price` FROM `Product` WHERE id = ?;

/* Add a product to the product table */
INSERT INTO `Product` (`Name`, `Category`, `Author`, `Condition`, `Price`) VALUES (?,?,?,?,?);

/* Update a certain product in the product table by id */
UPDATE `Product` SET `Name`=?, `Category`=?, `Author`=?, `Condition`=?, `Price`=? WHERE id=?;

/* Delete a certain product in the product table by id */
DELETE FROM `Product` WHERE id = ?;



/* BOOKSTORES - see product queries above */



/* CUSTOMERS - see product queries above */



/* SALES */

/* Get all sales, as well as bookstore & customer names */
SELECT Sale.id, Bookstore.Name AS Bookstore_Name, Customer.Name AS Customer_Name, `Sale_Price`, DATE_FORMAT(`Sale_Date`, '%M %d, %Y') AS `Sale_Date` FROM `Sale` INNER JOIN `Bookstore` ON Bookstore.id=Sale.Bookstore_id INNER JOIN `Customer` ON Customer.id=Sale.Customer_id ORDER BY Sale.id ASC;

/* see product queries above for more */




/* PRODUCT : BOOKSTORE */

/* Get all product : bookstore relationships */
SELECT Product.id AS `pid`, Product.Name AS `pName` , Bookstore.id AS `bid`, Bookstore.Name AS `bName` FROM `Product` INNER JOIN Product_Bookstore ON Product_Bookstore.product_id=Product.id INNER JOIN `Bookstore` ON Bookstore.id=Product_Bookstore.bookstore_id ORDER BY Bookstore.Name ASC;

/* Get all bookstores that carry a certain product */
SELECT * FROM (SELECT Product.id AS pid, Product.Name AS `pName` , Bookstore.id AS bid, Bookstore.Name AS `bName` FROM `Product` INNER JOIN Product_Bookstore ON Product_Bookstore.product_id=Product.id INNER JOIN `Bookstore` ON Bookstore.id=Product_Bookstore.bookstore_id) AS table1 WHERE `pName` = ?;

/* Get all products at a certain bookstore */
SELECT * FROM (SELECT Product.id AS pid, Product.Name AS `pName` , Bookstore.id AS bid, Bookstore.Name AS `bName` FROM `Product` INNER JOIN Product_Bookstore ON Product_Bookstore.product_id=Product.id INNER JOIN `Bookstore` ON Bookstore.id=Product_Bookstore.bookstore_id) AS table2 WHERE `bName` = ?;

/* Add a product : bookstore relationship */
INSERT INTO `Product_Bookstore` (`product_id`, `bookstore_id`) VALUES (?,?);

/* Delete a product : bookstore relationship */
DELETE FROM `Product_Bookstore` WHERE (product_id = ? AND bookstore_id = ?);



/* PRODUCT : SALE */

/* Get all product : sale relationships */
SELECT Product.id AS pid, Product.Name AS `pName`, Sale.id AS sid FROM `Product` INNER JOIN Product_Sale ON Product_Sale.product_id=Product.id INNER JOIN `Sale` ON Sale.id=Product_Sale.sale_id ORDER BY Sale.id ASC;

/* Get all sales that contain a certain product */
SELECT * FROM (SELECT Product.id AS pid, Product.Name AS `pName`, Sale.id AS sid FROM `Product` INNER JOIN Product_Sale ON Product_Sale.product_id=Product.id INNER JOIN `Sale` ON Sale.id=Product_Sale.sale_id) AS table1 WHERE `pName` = ?;

/* Get all products in a certain sale */
SELECT * FROM (SELECT Product.id AS pid, Product.Name AS `pName`, Sale.id AS sid FROM `Product` INNER JOIN Product_Sale ON Product_Sale.product_id=Product.id INNER JOIN `Sale` ON Sale.id=Product_Sale.sale_id) AS table2 WHERE `sid` = ?;

/* Add a product : sale relationship */
INSERT INTO `Product_Sale` (`product_id`, `sale_id`) VALUES (?,?);

/* Delete a product : sale relationship */
DELETE FROM `Product_Sale` WHERE (product_id = ? AND sale_id = ?);

