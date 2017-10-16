$(document).ready(function () {
    // $.ajax({url: "../data/names.json", method:"GET", success: function(result){
    //     console.log(result);
    // }});
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function (data) {
            console.log(data);
        }
    });

});
