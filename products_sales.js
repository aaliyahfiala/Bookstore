module.exports = function(){
    var express = require('express');
    var router = express.Router();
    
    
    function getProducts_Sales(res, mysql, context, complete){
        mysql.pool.query("SELECT Product.id AS pid, Product.Name AS `pName`, Sale.id AS sid FROM `Product` INNER JOIN Product_Sale ON Product_Sale.product_id=Product.id INNER JOIN `Sale` ON Sale.id=Product_Sale.sale_id ORDER BY Sale.id ASC", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.products_sales = results;
            complete();
        });
    }
    
    
    
    
    
    
    
    
    
    function getProducts_SalesPNameAsc(res, mysql, context, complete){
        mysql.pool.query("SELECT Product.id AS pid, Product.Name AS `pName`, Sale.id AS sid FROM `Product` INNER JOIN Product_Sale ON Product_Sale.product_id=Product.id INNER JOIN `Sale` ON Sale.id=Product_Sale.sale_id ORDER BY pName ASC", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.products_sales = results;
            complete();
        });
    }
    
    function getProducts_SalesPNameDesc(res, mysql, context, complete){
        mysql.pool.query("SELECT Product.id AS pid, Product.Name AS `pName`, Sale.id AS sid FROM `Product` INNER JOIN Product_Sale ON Product_Sale.product_id=Product.id INNER JOIN `Sale` ON Sale.id=Product_Sale.sale_id ORDER BY pName DESC", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.products_sales = results;
            complete();
        });
    }
    
    function getProducts_SalesIDAsc(res, mysql, context, complete){
        mysql.pool.query("SELECT Product.id AS pid, Product.Name AS `pName`, Sale.id AS sid FROM `Product` INNER JOIN Product_Sale ON Product_Sale.product_id=Product.id INNER JOIN `Sale` ON Sale.id=Product_Sale.sale_id ORDER BY sid ASC", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.products_sales = results;
            complete();
        });
    }
    
    function getProducts_SalesIDDesc(res, mysql, context, complete){
        mysql.pool.query("SELECT Product.id AS pid, Product.Name AS `pName`, Sale.id AS sid FROM `Product` INNER JOIN Product_Sale ON Product_Sale.product_id=Product.id INNER JOIN `Sale` ON Sale.id=Product_Sale.sale_id ORDER BY sid DESC", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.products_sales = results;
            complete();
        });
    }
    
    
    
    
    
    function getProduct_SaleSearch(res, mysql, attribute, searchFor, context, complete){
        if (attribute == "pName") {
            var sql = "SELECT * FROM (SELECT Product.id AS pid, Product.Name AS `pName`, Sale.id AS sid FROM `Product` INNER JOIN Product_Sale ON Product_Sale.product_id=Product.id INNER JOIN `Sale` ON Sale.id=Product_Sale.sale_id) AS table1 WHERE `pName` = ?";
        } 
        else if (attribute == "sid") {
            var sql = "SELECT * FROM (SELECT Product.id AS pid, Product.Name AS `pName`, Sale.id AS sid FROM `Product` INNER JOIN Product_Sale ON Product_Sale.product_id=Product.id INNER JOIN `Sale` ON Sale.id=Product_Sale.sale_id) AS table2 WHERE `sid` = ?";
        }
        var inserts = [searchFor];
        mysql.pool.query(sql, inserts, function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.products_sales = results;
            complete();
        });
    }
    
    
    
    

    function getProduct_Sale(res, mysql, context, id, complete){
        var sql = "SELECT Product.id AS pid, Product.Name AS `pName` , Sale.id AS sid FROM `Product` INNER JOIN Product_Sale ON Product_Sale.product_id=Product.id INNER JOIN `Sale` ON Sale.id=Product_Sale.sale_id WHERE (Product.id = ? AND Sale.id = ?";
        var inserts = [id];
        mysql.pool.query(sql, inserts, function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.products_sales = results[0];
            complete();
        });
    }

    
    
    
    
    /*Get  all sales and products for drop-downs */
    
    function getProductsNameAsc(res, mysql, context, complete){
        mysql.pool.query("SELECT `id`, `Name`, `Category`, `Author`, `Condition`, `Price` FROM `Product` ORDER BY `Name` ASC", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.products = results;
            complete();
        });
    }
    
    function getSales(res, mysql, context, complete){
        mysql.pool.query("SELECT Sale.id, Bookstore.Name AS Bookstore_Name, Customer.Name AS Customer_Name, `Sale_Price`, DATE_FORMAT(`Sale_Date`, '%M %d, %Y') AS `Sale_Date` FROM `Sale` INNER JOIN `Bookstore` ON Bookstore.id=Sale.Bookstore_id INNER JOIN `Customer` ON Customer.id=Sale.Customer_id", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.sales = results;
            complete();
        });
    }
    
    
    
    
    /*Display all products_sales. Requires web based javascript to delete users with AJAX*/

    router.get('/', function(req, res){
        var callbackCount = 0;
        var context = {};
        context.jsscripts = ["deleteproduct_sale.js"];
        var mysql = req.app.get('mysql');
        getProducts_Sales(res, mysql, context, complete);
        getSales(res, mysql, context, complete);
        getProductsNameAsc(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 3){
                res.render('products_sales', context);
            }

        }
    });
    
    
    
    
    
    
    
    
    
    /* Display products_sales in ascending order by product name */

    router.get('/sort/1', function(req, res){
        callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        getProducts_SalesPNameAsc(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('products_sales', context);
            }

        }
    });
    
    /* Display products_sales in Descending order by product name */

    router.get('/sort/2', function(req, res){
        callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        getProducts_SalesPNameDesc(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('products_sales', context);
            }

        }
    });
    
    /* Display products_sales in ascending order by sale id */

    router.get('/sort/3', function(req, res){
        callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        getProducts_SalesIDAsc(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('products_sales', context);
            }

        }
    });
    
    /* Display products_sales in Descending order by sale id */

    router.get('/sort/4', function(req, res){
        callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        getProducts_SalesIDDesc(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('products_sales', context);
            }

        }
    });
    
    
    
    
      /* Search for product_sale with specific attribute: value */

    router.get('/search/', function(req, res){
        callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        var attribute = req.query.Attribute;
        var searchFor = req.query.searchFor;
        getProduct_SaleSearch(res, mysql, attribute, searchFor, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('search-products_sales', context);
            }

        }
    });
    
    
    
    

    /* Display one product_sale for the specific purpose of updating products_sales */

    router.get('/:product_id/:sale_id', function(req, res){
        callbackCount = 0;
        var context = {};
        context.jsscripts = ["selectedproduct_sale.js", "updateproduct_sale.js"];
        var mysql = req.app.get('mysql');
        getProduct_Sale(res, mysql, context, req.params.product_id, req.params.sale_id, complete);
        getSales(res, mysql, context, complete);
        getProductsNameAsc(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 3){
                res.render('update-product_sale', context);
            }

        }
    });

    /* Adds a product_sale, redirects to the sales page after adding */

    router.post('/', function(req, res){
        var mysql = req.app.get('mysql');
        var sql = "INSERT INTO `Product_Sale` (`product_id`, `sale_id`) VALUES (?,?)";
        var inserts = [req.body.p_id, req.body.s_id];
        sql = mysql.pool.query(sql,inserts,function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }else{
                res.redirect('/products_sales');
            }
        });
    });

    /* The URI that update data is sent to in order to update a product_sale */

    router.put('/:product_id/:sale_id', function(req, res){
        var mysql = req.app.get('mysql');
        var sql = "UPDATE `Product_Sale` SET `product_id`=?, `sale_id`=? WHERE (product_id = ? AND sale_id = ?)";
        var inserts = [req.body.product_id, req.body.sale_id, req.params.pid, req.params.sid];
        sql = mysql.pool.query(sql,inserts,function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }else{
                res.status(200);
                res.end();
            }
        });
    });

    /* Route to delete a product_sale, simply returns a 202 upon success. Ajax will handle this. */

    router.delete('/:product_id/:sale_id', function(req, res){
        var mysql = req.app.get('mysql');
        var sql = "DELETE FROM `Product_Sale` WHERE (product_id = ? AND sale_id = ?)";
        var inserts = [req.params.product_id, req.params.sale_id];
        sql = mysql.pool.query(sql, inserts, function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.status(400);
                res.end();
            }else{
                res.status(202).end();
            }
        })
    })

    return router;
}();
