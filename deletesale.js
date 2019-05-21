function deleteSale(id){
    $.ajax({
        url: '/sales/' + id,
        type: 'DELETE',
        success: function(result){
            window.location.reload(true);
        }
    })
};
