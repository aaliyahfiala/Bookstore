function updateProduct_Bookstore(id){
    $.ajax({
        url: '/products_bookstores/' + id,
        type: 'PUT',
        data: $('#update-product_bookstore').serialize(),
        success: function(result){
            window.location.replace("./");
        }
    })
};
