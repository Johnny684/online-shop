const express = require("express"),
      app = express();

app.set("view engine","ejs");
app.get("/", (req,res,next)=>{
    res.render("index");
});

app.listen(process.env.port || 3000);