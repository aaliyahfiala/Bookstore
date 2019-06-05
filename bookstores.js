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
    
    
    
    
    
    
    
    
    function getBookstoresIDAsc(res, mysql, context, complete){
        mysql.pool.query("SELECT `id`, `Name`, `Location`, `Type` FROM `Bookstore` ORDER BY `id` ASC", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.bookstores = results;
            complete();
        });
    }
    
    function getBookstoresIDDesc(res, mysql, context, complete){
        mysql.pool.query("SELECT `id`, `Name`, `Location`, `Type` FROM `Bookstore` ORDER BY `id` DESC", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.bookstores = results;
            complete();
        });
    }
    
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
    
    function getBookstoresNameDesc(res, mysql, context, complete){
        mysql.pool.query("SELECT `id`, `Name`, `Location`, `Type` FROM `Bookstore` ORDER BY `Name` DESC", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.bookstores = results;
            complete();
        });
    }
    
    function getBookstoresLocationAsc(res, mysql, context, complete){
        mysql.pool.query("SELECT `id`, `Name`, `Location`, `Type` FROM `Bookstore` ORDER BY `Location` ASC", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.bookstores = results;
            complete();
        });
    }
    
    function getBookstoresLocationDesc(res, mysql, context, complete){
        mysql.pool.query("SELECT `id`, `Name`, `Location`, `Type` FROM `Bookstore` ORDER BY `Location` DESC", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.bookstores = results;
            complete();
        });
    }
    
    function getBookstoresTypeAsc(res, mysql, context, complete){
        mysql.pool.query("SELECT `id`, `Name`, `Location`, `Type` FROM `Bookstore` ORDER BY `Type` ASC", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.bookstores = results;
            complete();
        });
    }
    
    function getBookstoresTypeDesc(res, mysql, context, complete){
        mysql.pool.query("SELECT `id`, `Name`, `Location`, `Type` FROM `Bookstore` ORDER BY `Type` DESC", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.bookstores = results;
            complete();
        });
    }
    
    
    
    
    

    
    function getBookstoreSearch(res, mysql, attribute, searchFor, context, complete){
        if (attribute == "Name") {
            var sql = "SELECT `id`, `Name`, `Location`, `Type` FROM `Bookstore` WHERE `Name` = ?";
        } 
        else if (attribute == "Location") {
            var sql = "SELECT `id`, `Name`, `Location`, `Type` FROM `Bookstore` WHERE `Location` = ?";
        }
        else if (attribute == "Type") {
            var sql = "SELECT `id`, `Name`, `Location`, `Type` FROM `Bookstore` WHERE `Type` = ?";
        }
        var inserts = [searchFor];
        mysql.pool.query(sql, inserts, function(error, results, fields){
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
    
    
    
    
    
    
    
    
    
    /* Display bookstores in ascending order by ID */

    router.get('/sort/1', function(req, res){
        callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        getBookstoresIDAsc(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('bookstores', context);
            }

        }
    });
    
    /* Display bookstores in Descending order by ID */

    router.get('/sort/2', function(req, res){
        callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        getBookstoresIDDesc(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('bookstores', context);
            }

        }
    });
    
    /* Display bookstores in ascending order by name */

    router.get('/sort/3', function(req, res){
        callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        getBookstoresNameAsc(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('bookstores', context);
            }

        }
    });
    
    /* Display bookstores in Descending order by name */

    router.get('/sort/4', function(req, res){
        callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        getBookstoresNameDesc(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('bookstores', context);
            }

        }
    });
    
    /* Display bookstores in ascending order by location */

    router.get('/sort/5', function(req, res){
        callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        getBookstoresLocationAsc(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('bookstores', context);
            }

        }
    });
    
    /* Display bookstores in Descending order by Location */

    router.get('/sort/6', function(req, res){
        callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        getBookstoresLocationDesc(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('bookstores', context);
            }

        }
    });
    
    /* Display bookstores in ascending order by type */

    router.get('/sort/7', function(req, res){
        callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        getBookstoresTypeAsc(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('bookstores', context);
            }

        }
    });
    
    /* Display bookstores in Descending order by type */

    router.get('/sort/8', function(req, res){
        callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        getBookstoresTypeDesc(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('bookstores', context);
            }

        }
    });
    
    
    
    
    
    /* Search for bookstore with specific attribute : value */

    router.get('/search/', function(req, res){
        callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        var attribute = req.query.Attribute;
        var searchFor = req.query.searchFor;
        getBookstoreSearch(res, mysql, attribute, searchFor, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('search-bookstores', context);
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
