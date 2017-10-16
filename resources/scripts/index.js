$(document).ready(function(){
    $.ajax({url: "../data/names.json", method:"GET", success: function(result){
        console.log(result);
    }});
});