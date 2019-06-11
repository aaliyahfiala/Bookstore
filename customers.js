module.exports = function(){
    var express = require('express');
    var router = express.Router();

    
    function getCustomers(res, mysql, context, complete){
        mysql.pool.query("SELECT `id`, `Name`, `Address`, `Phone` FROM `Customer`", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.customers = results;
            complete();
        });
    }
    
    
    
    
    
    
    function getCustomersIDAsc(res, mysql, context, complete){
        mysql.pool.query("SELECT `id`, `Name`, `Address`, `Phone` FROM `Customer` ORDER BY `id` ASC", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.customers = results;
            complete();
        });
    }
    
    function getCustomersIDDesc(res, mysql, context, complete){
        mysql.pool.query("SELECT `id`, `Name`, `Address`, `Phone` FROM `Customer` ORDER BY `id` DESC", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.customers = results;
            complete();
        });
    }
    
    function getCustomersNameAsc(res, mysql, context, complete){
        mysql.pool.query("SELECT `id`, `Name`, `Address`, `Phone` FROM `Customer` ORDER BY `Name` ASC", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.customers = results;
            complete();
        });
    }
    
    function getCustomersNameDesc(res, mysql, context, complete){
        mysql.pool.query("SELECT `id`, `Name`, `Address`, `Phone` FROM `Customer` ORDER BY `Name` DESC", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.customers = results;
            complete();
        });
    }
    
    function getCustomersAddressAsc(res, mysql, context, complete){
        mysql.pool.query("SELECT `id`, `Name`, `Address`, `Phone` FROM `Customer` ORDER BY `Address` ASC", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.customers = results;
            complete();
        });
    }
    
    function getCustomersAddressDesc(res, mysql, context, complete){
        mysql.pool.query("SELECT `id`, `Name`, `Address`, `Phone` FROM `Customer` ORDER BY `Address` DESC", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.customers = results;
            complete();
        });
    }
    
    function getCustomersPhoneAsc(res, mysql, context, complete){
        mysql.pool.query("SELECT `id`, `Name`, `Address`, `Phone` FROM `Customer` ORDER BY `Phone` ASC", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.customers = results;
            complete();
        });
    }
    
    function getCustomersPhoneDesc(res, mysql, context, complete){
        mysql.pool.query("SELECT `id`, `Name`, `Address`, `Phone` FROM `Customer` ORDER BY `Phone` DESC", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.customers = results;
            complete();
        });
    }
    
    
    
    
    
    function getCustomerSearch(res, mysql, attribute, searchFor, context, complete){
        if (attribute == "Name") {
            var sql = "SELECT `id`, `Name`, `Address`, `Phone` FROM `Customer` WHERE `Name` = ?";
        } 
        else if (attribute == "Address") {
            var sql = "SELECT `id`, `Name`, `Address`, `Phone` FROM `Customer` WHERE `Address` = ?";
        }
        var inserts = [searchFor];
        mysql.pool.query(sql, inserts, function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.customers = results;
            complete();
        });
    }
    
    
    
    

    function getCustomer(res, mysql, context, id, complete){
        var sql = "SELECT `id`, `Name`, `Address`, `Phone` FROM `Customer` WHERE id = ?";
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
    
    
    
    
    
    
    
    
    
    /* Display customers in ascending order by ID */

    router.get('/sort/1', function(req, res){
        callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        getCustomersIDAsc(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('customers', context);
            }

        }
    });
    
    /* Display customers in Descending order by ID */

    router.get('/sort/2', function(req, res){
        callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        getCustomersIDDesc(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('customers', context);
            }

        }
    });
    
    /* Display customers in ascending order by name */

    router.get('/sort/3', function(req, res){
        callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        getCustomersNameAsc(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('customers', context);
            }

        }
    });
    
    /* Display customers in Descending order by name */

    router.get('/sort/4', function(req, res){
        callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        getCustomersNameDesc(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('customers', context);
            }

        }
    });
    
    /* Display customers in ascending order by address */

    router.get('/sort/5', function(req, res){
        callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        getCustomersAddressAsc(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('customers', context);
            }

        }
    });
    
    /* Display customers in Descending order by address */

    router.get('/sort/6', function(req, res){
        callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        getCustomersAddressDesc(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('customers', context);
            }

        }
    });
    
    /* Display customers in ascending order by phone */

    router.get('/sort/7', function(req, res){
        callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        getCustomersPhoneAsc(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('customers', context);
            }

        }
    });
    
    /* Display customers in Descending order by phone */

    router.get('/sort/8', function(req, res){
        callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        getCustomersPhoneDesc(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('customers', context);
            }

        }
    });
    
    
    
    
    
    /* Search for customer with specific attribute: value */

    router.get('/search/', function(req, res){
        callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        var attribute = req.query.Attribute;
        var searchFor = req.query.searchFor;
        getCustomerSearch(res, mysql, attribute, searchFor, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('search-customers', context);
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
        var sql = "INSERT INTO `Customer` (`Name`, `Address`, `Phone`) VALUES (?,?,?)";
        var inserts = [req.body.Name, req.body.Address, req.body.Phone];
        sql = mysql.pool.query(sql,inserts,function(error, results, fields){
            if(error){
                res.render('error');
                //res.redirect('/customers');
                //res.write(JSON.stringify(error));
                //res.end();
            }else{
                res.redirect('/customers');
            }
        });
    });

    /* The URI that update data is sent to in order to update a customer */

    router.put('/:id', function(req, res){
        var mysql = req.app.get('mysql');
        var sql = "UPDATE `Customer` SET `Name`=?, `Address`=?, `Phone`=? WHERE id=?";
        var inserts = [req.body.Name, req.body.Address, req.body.Phone, req.params.id];
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
