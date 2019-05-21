function updateBookstore(id){
    $.ajax({
        url: '/bookstores/' + id,
        type: 'PUT',
        data: $('#update-bookstore').serialize(),
        success: function(result){
            window.location.replace("./");
        }
    })
};
