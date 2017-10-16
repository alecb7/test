
$(document).ready(function () {
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

    $.ajax({
        url: 'http://localhost:8080/people/' + getQueryString(),
        dataType: 'json',
        success: function (data) {
            success(data);
        }
    });

    function success(data) {
        var list = "";
        var person = data;
        list += "<li>" + person.firstName + "</li>";
        list += "<li>" + person.lastName + "</li>";
        list += "<li>" + person.age + "</li>";
        list += "<li>" + person.nationality + "</li>";
        $("#names").html(list);
    }
});