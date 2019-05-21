module.exports = function(){
    var express = require('express');
    var router = express.Router();

    
    function getCustomers(res, mysql, context, complete){
        mysql.pool.query("SELECT `id`, `Name` FROM `Customer`", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.customers = results;
            complete();
        });
    }

    function getCustomer(res, mysql, context, id, complete){
        var sql = "SELECT `id`, `Name` FROM `Customer` WHERE id = ?";
        var inserts = [id];
        mysql.pool.query(sql, inserts, function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.customers = results[0];
            complete();
        });
    }

    /*Display all customers. Requires web based javascript to delete users with AJAX*/

    router.get('/', function(req, res){
        var callbackCount = 0;
        var context = {};
        context.jsscripts = ["deletecustomer.js"];
        var mysql = req.app.get('mysql');
        getCustomers(res, mysql, context, complete);
        
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('customers', context);
            }

        }
    });

    /* Display one customer for the specific purpose of updating customers */

    router.get('/:id', function(req, res){
        callbackCount = 0;
        var context = {};
        context.jsscripts = ["selectedcustomer.js", "updatecustomer.js"];
        var mysql = req.app.get('mysql');
        getCustomer(res, mysql, context, req.params.id, complete);
    
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('update-customer', context);
            }

        }
    });

    /* Adds a customer, redirects to the customer page after adding */

    router.post('/', function(req, res){
        var mysql = req.app.get('mysql');
        var sql = "INSERT INTO `Customer` (`Name`) VALUES (?)";
        var inserts = [req.body.Name];
        sql = mysql.pool.query(sql,inserts,function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }else{
                res.redirect('/customers');
            }
        });
    });

    /* The URI that update data is sent to in order to update a customer */

    router.put('/:id', function(req, res){
        var mysql = req.app.get('mysql');
        var sql = "UPDATE `Customer` SET `Name`=? WHERE id=?";
        var inserts = [req.body.Name, req.params.id];
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

    /* Route to delete a customer, simply returns a 202 upon success. Ajax will handle this. */

    router.delete('/:id', function(req, res){
        var mysql = req.app.get('mysql');
        var sql = "DELETE FROM `Customer` WHERE id = ?";
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
