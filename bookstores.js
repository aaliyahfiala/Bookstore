module.exports = function(){
    var express = require('express');
    var router = express.Router();

    
    function getBookstores(res, mysql, context, complete){
        mysql.pool.query("SELECT `id`, `Name`, `Location`, `Type` FROM `Bookstore`", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.bookstores = results;
            complete();
        });
    }

    function getBookstore(res, mysql, context, id, complete){
        var sql = "SELECT `id`, `Name`, `Location`, `Type` FROM `Bookstore` WHERE id = ?";
        var inserts = [id];
        mysql.pool.query(sql, inserts, function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.bookstores = results[0];
            complete();
        });
    }

    /*Display all stores. Requires web based javascript to delete users with AJAX*/

    router.get('/', function(req, res){
        var callbackCount = 0;
        var context = {};
        context.jsscripts = ["deletebookstore.js"];
        var mysql = req.app.get('mysql');
        getBookstores(res, mysql, context, complete);
        
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('bookstores', context);
            }

        }
    });

    /* Display one store for the specific purpose of updating stores */

    router.get('/:id', function(req, res){
        callbackCount = 0;
        var context = {};
        context.jsscripts = ["selectedbookstore.js", "updatebookstore.js"];
        var mysql = req.app.get('mysql');
        getBookstore(res, mysql, context, req.params.id, complete);
    
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('update-bookstore', context);
            }

        }
    });

    /* Adds a bookstore, redirects to the people page after adding */

    router.post('/', function(req, res){
        var mysql = req.app.get('mysql');
        var sql = "INSERT INTO `Bookstore` (`Name`, `Location`, `Type`) VALUES (?,?,?)";
        var inserts = [req.body.Name, req.body.Location, req.body.Type];
        sql = mysql.pool.query(sql,inserts,function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }else{
                res.redirect('/bookstores');
            }
        });
    });

    /* The URI that update data is sent to in order to update a product */

    router.put('/:id', function(req, res){
        var mysql = req.app.get('mysql');
        var sql = "UPDATE `Bookstore` SET `Name`=?, `Location`=?, `Type`=? WHERE id=?";
        var inserts = [req.body.Name, req.body.Location, req.body.Type, req.params.id];
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

    /* Route to delete a person, simply returns a 202 upon success. Ajax will handle this. */

    router.delete('/:id', function(req, res){
        var mysql = req.app.get('mysql');
        var sql = "DELETE FROM `Bookstore` WHERE id = ?";
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
