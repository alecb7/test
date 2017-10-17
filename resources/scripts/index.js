$(document).ready(function () {
    // $.ajax({url: "../data/names.json", method:"GET", success: function(result){
    //     console.log(result);
    // }});
    $.ajax({
        url: 'http://localhost:8080/people',
        dataType: 'json',
        success: function (data) {
            success(data);
        }
    });
    

    function success(data){
        var list = "";
        console.log(data);
        data._embedded.people.forEach(person => {
            list += "<li class='list-group-item'><a href='/demo/test/user.html?id=" + person.id + "'>" + person.firstname + " " + person.lastname + "</a></li>";
        }, this);
        $("#names").html(list);
    }
});
