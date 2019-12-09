$().ready(function () {
    $('#form').submit(function (e) {
        e.preventDefault();
        var e = $('#e').val();
        var limit = Math.pow(2, e);
        var table = $('#table tbody');
        clear(table);
        ascending(limit, table);
        descending(limit, table);
    })

})
function ascending(limit, div) {
    var j = 2;
    for (; j < limit; j++) {
        if (prime(j)) {
            div.append('<tr><td>' + j + '</td>' + '<td>' + j.toString(2) + '</td><td>' + j.toString(16).toUpperCase() + '</td></tr>');
            console.log(j.toString(16));
        }

    }
}
function descending(limit, div) {
    var j = limit;
    for (; j > 0; j--) {
        if (prime(j)) {
            div.append('<tr><td>' + j + '</td>' + '<td>' + j.toString(2) + '</td><td>' + j.toString(16).toUpperCase() + '</td></tr>');
            console.log(j.toString(16));
        }

    }
}
function prime(number) {
    for (var i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return number !== 1;
}
function clear(div) {
    div.html('');
}
