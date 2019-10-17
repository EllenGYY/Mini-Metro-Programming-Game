var stations;
var lines;

function geneMap() {
    var i = Math.round(4);
    stations = [];
    lines = [];
    var line_number = 0;
    for (var m = 0; m < i; m++) {
        var x = Math.round(Math.random() * 350 + 25);
        var y = Math.round(Math.random() * 380 + 10);
        stations[m] = [x, y];
    }
    for (var m = 0; m < i - 1; m++) {
        for (var n = m + 1; n < i; n++) {
            lines[line_number] = [stations[m], stations[n]];
            line_number++;
        }
    }
}