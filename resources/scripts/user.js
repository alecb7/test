
$(document).ready(function () {

    $.ajax({
        url: 'http://localhost:8080/people/' + getQueryString(),
        dataType: 'json',
        success: function (data) {
            success(data);
        }
    });

    function getQueryString() {
        var qsParm = new Array();
        var query = window.location.search.substring(1);
        var parms = query.split('&');
        for (var i = 0; i < parms.length; i++) {
            var pos = parms[i].indexOf('=');
            if (pos > 0) {
                var key = parms[i].substring(0, pos);
                var val = parms[i].substring(pos + 1);
                qsParm[key] = val;
            }
        }
        return qsParm['id'];
    }    

    function success(data) {
        var list = "";
        var person = data;
        list += "<li class='list-group-item'>" + person.firstname + "</li>";
        list += "<li class='list-group-item'>" + person.lastname + "</li>";
        list += "<li class='list-group-item'>" + person.age + "</li>";
        list += "<li class='list-group-item'>" + person.nationality + "</li>";
        $("#user").html(list);
    }
});