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

    
    /*Display all products_bookstores. Requires web based javascript to delete users with AJAX*/

    router.get('/', function(req, res){
        var callbackCount = 0;
        var context = {};
        context.jsscripts = ["deleteproduct_bookstore.js"];
        var mysql = req.app.get('mysql');
        getProducts_Bookstores(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('products_bookstores', context);
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
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('update-product_bookstore', context);
            }

        }
    });

    /* Adds a product_bookstore, redirects to the people page after adding */

    router.post('/', function(req, res){
        var mysql = req.app.get('mysql');
        var sql = "INSERT INTO `Product_Bookstore` (`product_id`, `bookstore_id`) VALUES (?,?)";
        var inserts = [req.body.product_id, req.body.bookstore_id];
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
