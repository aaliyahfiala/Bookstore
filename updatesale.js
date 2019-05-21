function updateSale(id){
    $.ajax({
        url: '/sales/' + id,
        type: 'PUT',
        data: $('#update-sale').serialize(),
        success: function(result){
            window.location.replace("./");
        }
    })
};
