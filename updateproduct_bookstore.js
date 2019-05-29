function updateProduct_Bookstore(pid, bid){
    $.ajax({
        url: '/products_bookstores/' + pid + '/' + bid,
        type: 'PUT',
        data: $('#update-product_bookstore').serialize(),
        success: function(result){
            window.location.replace("./");
        }
    })
};
