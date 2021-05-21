let express = require("express");
let path = require("path");
let bodyParser = require("body-parser");

let app = express();
//body parse
app.use(bodyParser.urlencoded({extended: true}));
//static
app.use(express.static(__dirname + "/static"));
//css
app.use(express.static(__dirname + "/css"));
// ejs
app.set('view engine', 'ejs');

let count = 0;
//routes
app.get('/', function(request, response) {
    count++;
    console.log(count);
    response.render("index", {count: count});
});
app.post('/plus2', function(request, response) {
    count++;
    console.log(count);
    response.redirect("/");
});
app.post('/reset', function(request, response) {
    count = 0;
    console.log(count);
    response.redirect("/");
});

//port
app.listen(8000, function() {
    console.log("Listening to 8000");
});