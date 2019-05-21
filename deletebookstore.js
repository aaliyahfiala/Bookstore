function deleteBookstore(id){
    $.ajax({
        url: '/bookstores/' + id,
        type: 'DELETE',
        success: function(result){
            window.location.reload(true);
        }
    })
};
