module.exports = function(){
    var express = require('express');
    var router = express.Router();

    function getSales(res, mysql, context, complete){
        mysql.pool.query("SELECT Sale.id, Bookstore.Name AS Bookstore_Name, Customer.Name AS Customer_Name, `Sale_Price`, DATE_FORMAT(`Sale_Date`, '%M %d, %Y') AS `Sale_Date` FROM `Sale` INNER JOIN `Bookstore` ON Bookstore.id=Sale.Bookstore_id INNER JOIN `Customer` ON Customer.id=Sale.Customer_id ORDER BY Sale.id ASC", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.sales = results;
            complete();
        });
    }
    
    

    
    
    function getSalesIDAsc(res, mysql, context, complete){
        mysql.pool.query("SELECT Sale.id, Bookstore.Name AS Bookstore_Name, Customer.Name AS Customer_Name, `Sale_Price`, DATE_FORMAT(`Sale_Date`, '%M %d, %Y') AS `Sale_Date` FROM `Sale` INNER JOIN `Bookstore` ON Bookstore.id=Sale.Bookstore_id INNER JOIN `Customer` ON Customer.id=Sale.Customer_id ORDER BY Sale.id ASC", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.sales = results;
            complete();
        });
    }
    
    function getSalesIDDesc(res, mysql, context, complete){
        mysql.pool.query("SELECT Sale.id, Bookstore.Name AS Bookstore_Name, Customer.Name AS Customer_Name, `Sale_Price`, DATE_FORMAT(`Sale_Date`, '%M %d, %Y') AS `Sale_Date` FROM `Sale` INNER JOIN `Bookstore` ON Bookstore.id=Sale.Bookstore_id INNER JOIN `Customer` ON Customer.id=Sale.Customer_id ORDER BY Sale.id DESC", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.sales = results;
            complete();
        });
    }
    
    function getSalesBNameAsc(res, mysql, context, complete){
        mysql.pool.query("SELECT Sale.id, Bookstore.Name AS Bookstore_Name, Customer.Name AS Customer_Name, `Sale_Price`, DATE_FORMAT(`Sale_Date`, '%M %d, %Y') AS `Sale_Date` FROM `Sale` INNER JOIN `Bookstore` ON Bookstore.id=Sale.Bookstore_id INNER JOIN `Customer` ON Customer.id=Sale.Customer_id ORDER BY Bookstore_Name ASC", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.sales = results;
            complete();
        });
    }
    
    function getSalesBNameDesc(res, mysql, context, complete){
        mysql.pool.query("SELECT Sale.id, Bookstore.Name AS Bookstore_Name, Customer.Name AS Customer_Name, `Sale_Price`, DATE_FORMAT(`Sale_Date`, '%M %d, %Y') AS `Sale_Date` FROM `Sale` INNER JOIN `Bookstore` ON Bookstore.id=Sale.Bookstore_id INNER JOIN `Customer` ON Customer.id=Sale.Customer_id ORDER BY Bookstore_Name DESC", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.sales = results;
            complete();
        });
    }
    
    function getSalesCNameAsc(res, mysql, context, complete){
        mysql.pool.query("SELECT Sale.id, Bookstore.Name AS Bookstore_Name, Customer.Name AS Customer_Name, `Sale_Price`, DATE_FORMAT(`Sale_Date`, '%M %d, %Y') AS `Sale_Date` FROM `Sale` INNER JOIN `Bookstore` ON Bookstore.id=Sale.Bookstore_id INNER JOIN `Customer` ON Customer.id=Sale.Customer_id ORDER BY Customer_Name ASC", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.sales = results;
            complete();
        });
    }
    
    function getSalesCNameDesc(res, mysql, context, complete){
        mysql.pool.query("SELECT Sale.id, Bookstore.Name AS Bookstore_Name, Customer.Name AS Customer_Name, `Sale_Price`, DATE_FORMAT(`Sale_Date`, '%M %d, %Y') AS `Sale_Date` FROM `Sale` INNER JOIN `Bookstore` ON Bookstore.id=Sale.Bookstore_id INNER JOIN `Customer` ON Customer.id=Sale.Customer_id ORDER BY Customer_Name DESC", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.sales = results;
            complete();
        });
    }
    
    function getSalesPriceAsc(res, mysql, context, complete){
        mysql.pool.query("SELECT Sale.id, Bookstore.Name AS Bookstore_Name, Customer.Name AS Customer_Name, `Sale_Price`, DATE_FORMAT(`Sale_Date`, '%M %d, %Y') AS `Sale_Date` FROM `Sale` INNER JOIN `Bookstore` ON Bookstore.id=Sale.Bookstore_id INNER JOIN `Customer` ON Customer.id=Sale.Customer_id ORDER BY Sale_Price ASC", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.sales = results;
            complete();
        });
    }
    
    function getSalesPriceDesc(res, mysql, context, complete){
        mysql.pool.query("SELECT Sale.id, Bookstore.Name AS Bookstore_Name, Customer.Name AS Customer_Name, `Sale_Price`, DATE_FORMAT(`Sale_Date`, '%M %d, %Y') AS `Sale_Date` FROM `Sale` INNER JOIN `Bookstore` ON Bookstore.id=Sale.Bookstore_id INNER JOIN `Customer` ON Customer.id=Sale.Customer_id ORDER BY Sale_Price DESC", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.sales = results;
            complete();
        });
    }
    
    function getSalesDateAsc(res, mysql, context, complete){
        mysql.pool.query("SELECT Sale.id, Bookstore.Name AS Bookstore_Name, Customer.Name AS Customer_Name, `Sale_Price`, DATE_FORMAT(`Sale_Date`, '%M %d, %Y') AS `Sale_Date` FROM `Sale` INNER JOIN `Bookstore` ON Bookstore.id=Sale.Bookstore_id INNER JOIN `Customer` ON Customer.id=Sale.Customer_id ORDER BY Sale_Date ASC", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.sales = results;
            complete();
        });
    }
    
    function getSalesDateDesc(res, mysql, context, complete){
        mysql.pool.query("SELECT Sale.id, Bookstore.Name AS Bookstore_Name, Customer.Name AS Customer_Name, `Sale_Price`, DATE_FORMAT(`Sale_Date`, '%M %d, %Y') AS `Sale_Date` FROM `Sale` INNER JOIN `Bookstore` ON Bookstore.id=Sale.Bookstore_id INNER JOIN `Customer` ON Customer.id=Sale.Customer_id ORDER BY Sale_Date DESC", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.sales = results;
            complete();
        });
    }
    
    
    
    function getSaleSearch(res, mysql, attribute, searchFor, context, complete){
        if (attribute == "BName") {
            var sql = "SELECT * FROM (SELECT Sale.id, Bookstore.Name AS Bookstore_Name, Customer.Name AS Customer_Name, `Sale_Price`, DATE_FORMAT(`Sale_Date`, '%M %d, %Y') AS `Sale_Date` FROM `Sale` INNER JOIN `Bookstore` ON Bookstore.id=Sale.Bookstore_id INNER JOIN `Customer` ON Customer.id=Sale.Customer_id) as table1 WHERE Bookstore_Name = ?";
        } 
        else if (attribute == "CName") {
            var sql = "SELECT * FROM (SELECT Sale.id, Bookstore.Name AS Bookstore_Name, Customer.Name AS Customer_Name, `Sale_Price`, DATE_FORMAT(`Sale_Date`, '%M %d, %Y') AS `Sale_Date` FROM `Sale` INNER JOIN `Bookstore` ON Bookstore.id=Sale.Bookstore_id INNER JOIN `Customer` ON Customer.id=Sale.Customer_id) AS table2 WHERE Customer_Name = ?";
        }
        else if (attribute == "id") {
            var sql = "SELECT * FROM (SELECT Sale.id, Bookstore.Name AS Bookstore_Name, Customer.Name AS Customer_Name, `Sale_Price`, DATE_FORMAT(`Sale_Date`, '%M %d, %Y') AS `Sale_Date` FROM `Sale` INNER JOIN `Bookstore` ON Bookstore.id=Sale.Bookstore_id INNER JOIN `Customer` ON Customer.id=Sale.Customer_id) AS table2 WHERE sale.id = ?";
        }
        var inserts = [searchFor];
        mysql.pool.query(sql, inserts, function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.sales = results;
            complete();
        });
    }
    
    
    
    
    
    

    function getSale(res, mysql, context, id, complete){
        var sql = "SELECT Sale.id AS id, Sale.Bookstore_id AS Bookstore_id, Sale.Customer_id AS Customer_id, Bookstore.Name AS Bookstore_Name, Customer.Name AS Customer_Name, `Sale_Price`, DATE_FORMAT(`Sale_Date`, '%M %d, %Y') AS `Sale_Date` FROM `Sale` INNER JOIN `Bookstore` ON Bookstore.id=Sale.Bookstore_id INNER JOIN `Customer` ON Customer.id=Sale.Customer_id WHERE Sale.id = ?";
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
    
    
    /*Get  all bookstores and customers for drop-downs */
    
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
    
    
    
    
    
    

    /*Display all sales. Requires web based javascript to delete sales with AJAX*/

    router.get('/', function(req, res){
        var callbackCount = 0;
        var context = {};
        context.jsscripts = ["deletesale.js"];
        var mysql = req.app.get('mysql');
        getSales(res, mysql, context, complete);
        getBookstoresNameAsc(res, mysql, context, complete);
        getCustomersNameAsc(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 3){
                res.render('sales', context);
            }

        }
    });

    
    
    
    
    
    
    
    
    
    /* Display sales in ascending order by ID */

    router.get('/sort/1', function(req, res){
        callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        getSalesIDAsc(res, mysql, context, complete);
        getBookstoresNameAsc(res, mysql, context, complete);
        getCustomersNameAsc(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 3){
                res.render('sales', context);
            }

        }
    });
    
    /* Display sales in Descending order by ID */

    router.get('/sort/2', function(req, res){
        callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        getSalesIDDesc(res, mysql, context, complete);
        getBookstoresNameAsc(res, mysql, context, complete);
        getCustomersNameAsc(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 3){
                res.render('sales', context);
            }

        }
    });
    
    /* Display sales in ascending order by bookstore name */

    router.get('/sort/3', function(req, res){
        callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        getSalesBNameAsc(res, mysql, context, complete);
        getBookstoresNameAsc(res, mysql, context, complete);
        getCustomersNameAsc(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 3){
                res.render('sales', context);
            }

        }
    });
    
    /* Display sales in Descending order by bookstore name */

    router.get('/sort/4', function(req, res){
        callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        getSalesBNameDesc(res, mysql, context, complete);
        getBookstoresNameAsc(res, mysql, context, complete);
        getCustomersNameAsc(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 3){
                res.render('sales', context);
            }

        }
    });
    
    /* Display sales in ascending order by customer name */

    router.get('/sort/5', function(req, res){
        callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        getSalesCNameAsc(res, mysql, context, complete);
        getBookstoresNameAsc(res, mysql, context, complete);
        getCustomersNameAsc(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 3){
                res.render('sales', context);
            }

        }
    });
    
    /* Display sales in Descending order by customer name */

    router.get('/sort/6', function(req, res){
        callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        getSalesCNameDesc(res, mysql, context, complete);
        getBookstoresNameAsc(res, mysql, context, complete);
        getCustomersNameAsc(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 3){
                res.render('sales', context);
            }

        }
    });
    
    /* Display sales in ascending order by price */

    router.get('/sort/7', function(req, res){
        callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        getSalesPriceAsc(res, mysql, context, complete);
        getBookstoresNameAsc(res, mysql, context, complete);
        getCustomersNameAsc(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 3){
                res.render('sales', context);
            }

        }
    });
    
    /* Display sales in Descending order by price */

    router.get('/sort/8', function(req, res){
        callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        getSalesPriceDesc(res, mysql, context, complete);
        getBookstoresNameAsc(res, mysql, context, complete);
        getCustomersNameAsc(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 3){
                res.render('sales', context);
            }

        }
    });
    
    /* Display sales in ascending order by date */

    router.get('/sort/9', function(req, res){
        callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        getSalesDateAsc(res, mysql, context, complete);
        getBookstoresNameAsc(res, mysql, context, complete);
        getCustomersNameAsc(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 3){
                res.render('sales', context);
            }

        }
    });
    
    /* Display sales in Descending order by date */

    router.get('/sort/10', function(req, res){
        callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        getSalesDateDesc(res, mysql, context, complete);
        getBookstoresNameAsc(res, mysql, context, complete);
        getCustomersNameAsc(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 3){
                res.render('sales', context);
            }

        }
    });
    
    
    
    
    
    /* Search for sale with specific attribute: value */

    router.get('/search/', function(req, res){
        callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        var attribute = req.query.Attribute;
        var searchFor = req.query.searchFor;
        getSaleSearch(res, mysql, attribute, searchFor, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('search-sales', context);
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
        getBookstores(res, mysql, context, complete);
        getCustomersNameAsc(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 3){
                res.render('update-sale', context);
            }

        }
    });

    /* Adds a sale, redirects to the sales page after adding */

    router.post('/', function(req, res){
        var mysql = req.app.get('mysql');
        var sql = "INSERT INTO `Sale` (`Bookstore_id`, `Customer_id`, `Sale_Price`, `Sale_Date`) VALUES (?,?,?,?)";
        var inserts = [req.body.b_id, req.body.c_id, req.body.Sale_Price, req.body.Sale_Date];
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
        var sql = "UPDATE `Sale` SET `Bookstore_id`=?, `Customer_id`=?, `Sale_Price`=?, `Sale_Date`=? WHERE id=?";
        var inserts = [req.body.b_id, req.body.c_id, req.body.Sale_Price, req.body.Sale_Date, req.params.id];
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
