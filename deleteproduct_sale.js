function deleteProduct_Sale(pid, sid){
    $.ajax({
        url: '/products_sales/' + pid + '/' + sid,
        type: 'DELETE',
        success: function(result){
            window.location.reload(true);
        }
    })
};
