var express = require("express");
var app =express();

app.use(express.static('/Users/markchristophersiyuy/Desktop/compta_urbis/comptaUrba/ImagesDeloitteHackathon'));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});


app.listen(3000, function(){
	console.log("LMAO");
});
