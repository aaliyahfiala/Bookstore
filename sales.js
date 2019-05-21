module.exports = function(){
    var express = require('express');
    var router = express.Router();

    function getSales(res, mysql, context, complete){
        mysql.pool.query("SELECT `id`, `Bookstore_id`, `Customer_id`, `Product_id`, `Sale_Price`, `Sale_Date` FROM `Sale`", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.sales = results;
            complete();
        });
    }

    function getSale(res, mysql, context, id, complete){
        var sql = "SELECT `id`, `Bookstore_id`, `Customer_id`, `Product_id`, `Sale_Price`, `Sale_Date` FROM `Sale` WHERE id = ?";
        var inserts = [id];
        mysql.pool.query(sql, inserts, function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.sales = results[0];
            complete();
        });
    }

    /*Display all sales. Requires web based javascript to delete sales with AJAX*/

    router.get('/', function(req, res){
        var callbackCount = 0;
        var context = {};
        context.jsscripts = ["deletesale.js"];
        var mysql = req.app.get('mysql');
        getSales(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('sales', context);
            }

        }
    });

    /* Display one sale for the specific purpose of updating sales */

    router.get('/:id', function(req, res){
        callbackCount = 0;
        var context = {};
        context.jsscripts = ["selectedsale.js", "updatesale.js"];
        var mysql = req.app.get('mysql');
        getSale(res, mysql, context, req.params.id, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('update-sale', context);
            }

        }
    });

    /* Adds a sale, redirects to the sales page after adding */

    router.post('/', function(req, res){
        var mysql = req.app.get('mysql');
        var sql = "INSERT INTO `Sale` (`Bookstore_id`, `Customer_id`, `Product_id`, `Sale_Price`, `Sale_Date`) VALUES (?,?,?,?,?)";
        var inserts = [req.body.Bookstore_id, req.body.Customer_id, req.body.Product_id, req.body.Sale_Price, req.body.Sale_Date];
        sql = mysql.pool.query(sql,inserts,function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }else{
                res.redirect('/sales');
            }
        });
    });

    /* The URI that update data is sent to in order to update a sale */

    router.put('/:id', function(req, res){
        var mysql = req.app.get('mysql');
        var sql = "UPDATE `Sale` SET `Bookstore_id`=?, `Customer_id`=?, `Product_id`=?, `Sale_Price`=?, `Sale_Date`=? WHERE id=?";
        var inserts = [req.body.Bookstore_id, req.body.Customer_id, req.body.Product_id, req.body.Sale_Price, req.body.Sale_Date, req.params.id];
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

    /* Route to delete a sale, simply returns a 202 upon success. Ajax will handle this. */

    router.delete('/:id', function(req, res){
        var mysql = req.app.get('mysql');
        var sql = "DELETE FROM `Sale` WHERE id = ?";
        var inserts = [req.params.id];
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
