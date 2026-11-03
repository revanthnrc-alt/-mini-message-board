const express= require("express");
const app= express();

const indexRoute= require("./routes/indexRouter.js");


app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/",indexRoute);

app.listen(3000,()=>{
    console.log("starts");
})
