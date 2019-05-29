function updateProduct_Sale(pid, sid){
    $.ajax({
        url: '/products_sales/' + pid + '/' + sid,
        type: 'PUT',
        data: $('#update-product_sale').serialize(),
        success: function(result){
            window.location.replace("./");
        }
    })
};
