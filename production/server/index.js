"use strict";require("dotenv").config();var logger=require("morgan"),bodyParser=require("body-parser"),cookieParser=require("cookie-parser"),express=require("express"),cors=require("cors"),path=require("path"),app=express(),port=process.env.PORT||8080,myApi=require("./api.js");app.use(cors()),app.use(logger("dev")),app.use(bodyParser.urlencoded({extended:!0})),app.use(bodyParser.json()),app.use(cookieParser()),app.get("/",function(e,r){r.redirect("https://jin827.github.io")}),app.post("/api/contact",function(e,r){return myApi.sendEmail(e.body).then(function(){myApi.replyEmail(e.body).then(function(){r.send("Email Sent Successfully!")})}).catch(function(e){r.status(500).send("Email not sent!")})}),app.use(function(e){var r=new Error("Not Found");r.status=404,e(r)}),"production"!==app.get("env")?app.use(function(e,r){r.status(e.status||500),r.json({message:e.message,error:e})}):app.use(function(e,r){r.status(e.status||500),r.json({message:e.message,error:{}})}),app.listen(port,function(){});
//# sourceMappingURL=maps/index.js.map
