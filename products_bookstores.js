module.exports = function(){
    var express = require('express');
    var router = express.Router();
    
    
    function getProducts_Bookstores(res, mysql, context, complete){
        mysql.pool.query("SELECT Product.id AS pid, Product.Name AS `pName` , Bookstore.id AS bid, Bookstore.Name AS `bName` FROM `Product` INNER JOIN Product_Bookstore ON Product_Bookstore.product_id=Product.id INNER JOIN `Bookstore` ON Bookstore.id=Product_Bookstore.bookstore_id ORDER BY Bookstore.Name ASC", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.products_bookstores = results;
            complete();
        });
    }

    
    
    
    
    
    
    
    
    function getProducts_BookstoresPNameAsc(res, mysql, context, complete){
        mysql.pool.query("SELECT Product.id AS pid, Product.Name AS `pName` , Bookstore.id AS bid, Bookstore.Name AS `bName` FROM `Product` INNER JOIN Product_Bookstore ON Product_Bookstore.product_id=Product.id INNER JOIN `Bookstore` ON Bookstore.id=Product_Bookstore.bookstore_id ORDER BY pName ASC", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.products_bookstores = results;
            complete();
        });
    }
    
    function getProducts_BookstoresPNameDesc(res, mysql, context, complete){
        mysql.pool.query("SELECT Product.id AS pid, Product.Name AS `pName` , Bookstore.id AS bid, Bookstore.Name AS `bName` FROM `Product` INNER JOIN Product_Bookstore ON Product_Bookstore.product_id=Product.id INNER JOIN `Bookstore` ON Bookstore.id=Product_Bookstore.bookstore_id ORDER BY pName DESC", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.products_bookstores = results;
            complete();
        });
    }
    
    function getProducts_BookstoresBNameAsc(res, mysql, context, complete){
        mysql.pool.query("SELECT Product.id AS pid, Product.Name AS `pName` , Bookstore.id AS bid, Bookstore.Name AS `bName` FROM `Product` INNER JOIN Product_Bookstore ON Product_Bookstore.product_id=Product.id INNER JOIN `Bookstore` ON Bookstore.id=Product_Bookstore.bookstore_id ORDER BY bName ASC", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.products_bookstores = results;
            complete();
        });
    }
    
    function getProducts_BookstoresBNameDesc(res, mysql, context, complete){
        mysql.pool.query("SELECT Product.id AS pid, Product.Name AS `pName` , Bookstore.id AS bid, Bookstore.Name AS `bName` FROM `Product` INNER JOIN Product_Bookstore ON Product_Bookstore.product_id=Product.id INNER JOIN `Bookstore` ON Bookstore.id=Product_Bookstore.bookstore_id ORDER BY bName DESC", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.products_bookstores = results;
            complete();
        });
    }
    
    
    
    
    
    function getProduct_BookstoreSearch(res, mysql, attribute, searchFor, context, complete){
        if (attribute == "pName") {
            var sql = "SELECT * FROM (SELECT Product.id AS pid, Product.Name AS `pName` , Bookstore.id AS bid, Bookstore.Name AS `bName` FROM `Product` INNER JOIN Product_Bookstore ON Product_Bookstore.product_id=Product.id INNER JOIN `Bookstore` ON Bookstore.id=Product_Bookstore.bookstore_id) AS table1 WHERE `pName` = ?";
        } 
        else if (attribute == "bName") {
            var sql = "SELECT * FROM (SELECT Product.id AS pid, Product.Name AS `pName` , Bookstore.id AS bid, Bookstore.Name AS `bName` FROM `Product` INNER JOIN Product_Bookstore ON Product_Bookstore.product_id=Product.id INNER JOIN `Bookstore` ON Bookstore.id=Product_Bookstore.bookstore_id) AS table2 WHERE `bName` = ?";
        }
        var inserts = [searchFor];
        mysql.pool.query(sql, inserts, function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.products_bookstores = results;
            complete();
        });
    }
    
    
    
    
    

    function getProduct_Bookstore(res, mysql, context, id, complete){
        var sql = "SELECT Product.id AS pid, Product.Name AS `pName` , Bookstore.id AS bid, Bookstore.Name AS `bName` FROM `Product` INNER JOIN Product_Bookstore ON Product_Bookstore.product_id=Product.id INNER JOIN `Bookstore` ON Bookstore.id=Product_Bookstore.bookstore_id WHERE (Product.id = ? AND Bookstore.id = ?";
        var inserts = [id];
        mysql.pool.query(sql, inserts, function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.products_bookstores = results[0];
            complete();
        });
    }
    
    
    
    
    
    
/*Get  all bookstores and products for drop-downs */
    
    function getBookstoresNameAsc(res, mysql, context, complete){
        mysql.pool.query("SELECT `id`, `Name`, `Location`, `Type` FROM `Bookstore` ORDER BY `Name` ASC", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.bookstores = results;
            complete();
        });
    }
    
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
    
    
    


    
    /*Display all products_bookstores. Requires web based javascript to delete users with AJAX*/

    router.get('/', function(req, res){
        var callbackCount = 0;
        var context = {};
        context.jsscripts = ["deleteproduct_bookstore.js"];
        var mysql = req.app.get('mysql');
        getProducts_Bookstores(res, mysql, context, complete);
        getBookstoresNameAsc(res, mysql, context, complete);
        getProductsNameAsc(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 3){
                res.render('products_bookstores', context);
            }

        }
    });
    
    
    
    
    
    
    
    
    
    /* Display products_bookstores in ascending order by product name */

    router.get('/sort/1', function(req, res){
        callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        getProducts_BookstoresPNameAsc(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('products_bookstores', context);
            }

        }
    });
    
    /* Display products_bookstores in Descending order by product name */

    router.get('/sort/2', function(req, res){
        callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        getProducts_BookstoresPNameDesc(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('products_bookstores', context);
            }

        }
    });
    
    /* Display products_bookstores in ascending order by bookstore name */

    router.get('/sort/3', function(req, res){
        callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        getProducts_BookstoresBNameAsc(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('products_bookstores', context);
            }

        }
    });
    
    /* Display products_bookstores in Descending order by bookstore name */

    router.get('/sort/4', function(req, res){
        callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        getProducts_BookstoresBNameDesc(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('products_bookstores', context);
            }

        }
    });
    
    
    
    
    
     /* Search for product_bookstore with specific attribute: value */

    router.get('/search/', function(req, res){
        callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        var attribute = req.query.Attribute;
        var searchFor = req.query.searchFor;
        getProduct_BookstoreSearch(res, mysql, attribute, searchFor, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('search-products_bookstores', context);
            }

        }
    });
    
    
    
    

    /* Display one product_bookstore for the specific purpose of updating products_bookstores */

    router.get('/:product_id/:bookstore_id', function(req, res){
        callbackCount = 0;
        var context = {};
        context.jsscripts = ["selectedproduct_bookstore.js", "updateproduct_bookstore.js"];
        var mysql = req.app.get('mysql');
        getProduct_Bookstore(res, mysql, context, req.params.product_id, req.params.bookstore_id, complete);
        getBookstoresNameAsc(res, mysql, context, complete);
        getProductsNameAsc(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 3){
                res.render('update-product_bookstore', context);
            }

        }
    });

    /* Adds a product_bookstore, redirects to the people page after adding */

    router.post('/', function(req, res){
        var mysql = req.app.get('mysql');
        var sql = "INSERT INTO `Product_Bookstore` (`product_id`, `bookstore_id`) VALUES (?,?)";
        var inserts = [req.body.p_id, req.body.b_id];
        sql = mysql.pool.query(sql,inserts,function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }else{
                res.redirect('/products_bookstores');
            }
        });
    });

    /* The URI that update data is sent to in order to update a product_bookstore */

    router.put('/:product_id/:bookstore_id', function(req, res){
        var mysql = req.app.get('mysql');
        var sql = "UPDATE `Product_Bookstore` SET `product_id`=?, `bookstore_id`=? WHERE (product_id = ? AND bookstore_id = ?)";
        var inserts = [req.body.product_id, req.body.bookstore_id, req.params.pid, req.params.bid];
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

    /* Route to delete a product_bookstore, simply returns a 202 upon success. Ajax will handle this. */

    router.delete('/:product_id/:bookstore_id', function(req, res){
        var mysql = req.app.get('mysql');
        var sql = "DELETE FROM `Product_Bookstore` WHERE (product_id = ? AND bookstore_id = ?)";
        var inserts = [req.params.product_id, req.params.bookstore_id];
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
