module.exports = function(){
    var express = require('express');
    var router = express.Router();

    function getProducts(res, mysql, context, complete){
        mysql.pool.query("SELECT `id`, `Name`, `Category`, `Author`, `Condition`, `Price` FROM `Product`", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.products = results;
            complete();
        });
    }
    
    function getProductsIDAsc(res, mysql, context, complete){
        mysql.pool.query("SELECT `id`, `Name`, `Category`, `Author`, `Condition`, `Price` FROM `Product` ORDER BY `id` ASC", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.products = results;
            complete();
        });
    }
    
    function getProductsIDDesc(res, mysql, context, complete){
        mysql.pool.query("SELECT `id`, `Name`, `Category`, `Author`, `Condition`, `Price` FROM `Product` ORDER BY `id` DESC", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.products = results;
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
    
    function getProductsNameDesc(res, mysql, context, complete){
        mysql.pool.query("SELECT `id`, `Name`, `Category`, `Author`, `Condition`, `Price` FROM `Product` ORDER BY `Name` DESC", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.products = results;
            complete();
        });
    }
    
    function getProductsCategoryAsc(res, mysql, context, complete){
        mysql.pool.query("SELECT `id`, `Name`, `Category`, `Author`, `Condition`, `Price` FROM `Product` ORDER BY `Category` ASC", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.products = results;
            complete();
        });
    }
    
    function getProductsCategoryDesc(res, mysql, context, complete){
        mysql.pool.query("SELECT `id`, `Name`, `Category`, `Author`, `Condition`, `Price` FROM `Product` ORDER BY `Category` DESC", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.products = results;
            complete();
        });
    }
    
    
    function getProductsAuthorAsc(res, mysql, context, complete){
        mysql.pool.query("SELECT `id`, `Name`, `Category`, `Author`, `Condition`, `Price` FROM `Product` ORDER BY `Author` ASC", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.products = results;
            complete();
        });
    }
    
    function getProductsAuthorDesc(res, mysql, context, complete){
        mysql.pool.query("SELECT `id`, `Name`, `Category`, `Author`, `Condition`, `Price` FROM `Product` ORDER BY `Author` DESC", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.products = results;
            complete();
        });
    }
    
    
    function getProductsQuantityAsc(res, mysql, context, complete){
        mysql.pool.query("SELECT `id`, `Name`, `Category`, `Author`, `Condition`, `Price` FROM `Product` ORDER BY `Quantity` ASC", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.products = results;
            complete();
        });
    }
    
    function getProductsQuantityDesc(res, mysql, context, complete){
        mysql.pool.query("SELECT `id`, `Name`, `Category`, `Author`, `Condition`, `Price` FROM `Product` ORDER BY `Quantity` DESC", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.products = results;
            complete();
        });
    }
    
    
    function getProductsConditionAsc(res, mysql, context, complete){
        mysql.pool.query("SELECT `id`, `Name`, `Category`, `Author`, `Condition`, `Price` FROM `Product` ORDER BY `Condition` ASC", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.products = results;
            complete();
        });
    }
    
    function getProductsConditionDesc(res, mysql, context, complete){
        mysql.pool.query("SELECT `id`, `Name`, `Category`, `Author`, `Condition`, `Price` FROM `Product` ORDER BY `Condition` DESC", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.products = results;
            complete();
        });
    }
    
    
    function getProductsPriceAsc(res, mysql, context, complete){
        mysql.pool.query("SELECT `id`, `Name`, `Category`, `Author`, `Condition`, `Price` FROM `Product` ORDER BY `Price` ASC", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.products = results;
            complete();
        });
    }
    
    function getProductsPriceDesc(res, mysql, context, complete){
        mysql.pool.query("SELECT `id`, `Name`, `Category`, `Author`, `Condition`, `Price` FROM `Product` ORDER BY `Price` DESC", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.products = results;
            complete();
        });
    }
    
    
    
    
    
    
    
    function getProductSearch(res, mysql, attribute, searchFor, context, complete){
        if (attribute == "Name") {
            var sql = "SELECT `id`, `Name`, `Category`, `Author`, `Condition`, `Price` FROM `Product` WHERE `Name` = ?";
        } 
        else if (attribute == "Category") {
            var sql = "SELECT `id`, `Name`, `Category`, `Author`, `Condition`, `Price` FROM `Product` WHERE `Category` = ?";
        }
        else if (attribute == "Author") {
            var sql = "SELECT `id`, `Name`, `Category`, `Author`, `Condition`, `Price` FROM `Product` WHERE `Author` = ?";
        }
        else if (attribute == "Condition") {
            var sql = "SELECT `id`, `Name`, `Category`, `Author`, `Condition`, `Price` FROM `Product` WHERE `Condition` = ?";
        }
        else if (attribute == "Price") {
            var sql = "SELECT `id`, `Name`, `Category`, `Author`, `Condition`, `Price` FROM `Product` WHERE `Price` = ?";
        }
        var inserts = [searchFor];
        mysql.pool.query(sql, inserts, function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.products = results;
            complete();
        });
    }
    
    
    
    
    
    
    
    
    
    
    
    function getProduct(res, mysql, context, id, complete){
        var sql = "SELECT `id`, `Name`, `Category`, `Author`, `Condition`, `Price` FROM `Product` WHERE id = ?";
        var inserts = [id];
        mysql.pool.query(sql, inserts, function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.products = results[0];
            complete();
        });
    }

    /*Display all products. Requires web based javascript to delete users with AJAX*/

    router.get('/', function(req, res){
        var callbackCount = 0;
        var context = {};
        context.jsscripts = ["deleteproduct.js"];
        var mysql = req.app.get('mysql');
        getProducts(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('products', context);
            }

        }
    });

    
    
    /* Display products in ascending order by ID */

    router.get('/sort/1', function(req, res){
        callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        getProductsIDAsc(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('products', context);
            }

        }
    });
    
    /* Display products in Descending order by ID */

    router.get('/sort/2', function(req, res){
        callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        getProductsIDDesc(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('products', context);
            }

        }
    });
    
    /* Display products in ascending order by name */

    router.get('/sort/3', function(req, res){
        callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        getProductsNameAsc(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('products', context);
            }

        }
    });
    
    /* Display products in descending order by name */

    router.get('/sort/4', function(req, res){
        callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        getProductsNameDesc(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('products', context);
            }

        }
    });
    
    
    /* Display products in ascending order by category */

    router.get('/sort/5', function(req, res){
        callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        getProductsCategoryAsc(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('products', context);
            }

        }
    });
    
    /* Display products in descending order by category */

    router.get('/sort/6', function(req, res){
        callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        getProductsCategoryDesc(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('products', context);
            }

        }
    });
    
    
    /* Display products in ascending order by author */

    router.get('/sort/7', function(req, res){
        callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        getProductsAuthorAsc(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('products', context);
            }

        }
    });
    
    /* Display products in descending order by author */

    router.get('/sort/8', function(req, res){
        callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        getProductsAuthorDesc(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('products', context);
            }

        }
    });
    
    
    /* Display products in ascending order by conditon */

    router.get('/sort/11', function(req, res){
        callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        getProductsConditionAsc(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('products', context);
            }

        }
    });
    
    /* Display products in descending order by condition */

    router.get('/sort/12', function(req, res){
        callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        getProductsConditionDesc(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('products', context);
            }

        }
    });
    
    
    /* Display products in ascending order by price */

    router.get('/sort/13', function(req, res){
        callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        getProductsPriceAsc(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('products', context);
            }

        }
    });
    
    /* Display products in descending order by price */

    router.get('/sort/14', function(req, res){
        callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        getProductsPriceDesc(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('products', context);
            }

        }
    });
    
    
    
    
    
    
    
    
    
    /* Search for product with specific attribute: value */

    router.get('/search/', function(req, res){
        callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        var attribute = req.query.Attribute;
        var searchFor = req.query.searchFor;
        getProductSearch(res, mysql, attribute, searchFor, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('search-products', context);
            }

        }
    });
    
    
    
    
    
    
    
    
    
    
    /* Display one product for the specific purpose of updating products */

    router.get('/:id', function(req, res){
        callbackCount = 0;
        var context = {};
        context.jsscripts = ["selectedproduct.js", "updateproduct.js"];
        var mysql = req.app.get('mysql');
        getProduct(res, mysql, context, req.params.id, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('update-product', context);
            }

        }
    });
    

    /* Adds a product, redirects to the people page after adding */

    router.post('/', function(req, res){
        var mysql = req.app.get('mysql');
        var sql = "INSERT INTO `Product` (`Name`, `Category`, `Author`, `Condition`, `Price`) VALUES (?,?,?,?,?)";
        var inserts = [req.body.Name, req.body.Category, req.body.Author, req.body.Condition, req.body.Price];
        sql = mysql.pool.query(sql,inserts,function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }else{
                res.redirect('/products');
            }
        });
    });

    /* The URI that update data is sent to in order to update a product */

    router.put('/:id', function(req, res){
        var mysql = req.app.get('mysql');
        var sql = "UPDATE `Product` SET `Name`=?, `Category`=?, `Author`=?, `Condition`=?, `Price`=? WHERE id=?";
        var inserts = [req.body.Name, req.body.Category, req.body.Author, req.body.Condition, req.body.Price, req.params.id];
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
        var sql = "DELETE FROM `Product` WHERE id = ?";
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
