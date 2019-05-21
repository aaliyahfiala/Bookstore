function deleteProduct_Bookstore(id){
    $.ajax({
        url: '/products_bookstores/' + id,
        type: 'DELETE',
        success: function(result){
            window.location.reload(true);
        }
    })
};
