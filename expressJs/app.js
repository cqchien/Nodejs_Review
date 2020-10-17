const express = require("express");
const cookieParse = require("cookie-parser");
const bodyParser = require("body-parser"); // used to read content of the HTTP body (req.body), post params is in HTTP body(like username,..)

const app = express();

const port = 1230;

app.use(cookieParse()); // to get cookies from user.
app.set("view engine", "ejs") // to set view engine.
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/assets", express.static(__dirname + "/public"))

app.use("/", (req, res, next)=>{
  let date = new Date();
  console.log(`${date.getHours()}:${date.getMinutes()} --- url: ${req.url}`);
  next()
})
//middleware
app.get("/", (req, res) => {
  res.render("index")
})

app.get("/:id", (req,res)=>{
  let userId = req.params.id;
  let name = req.query.name;

  res.cookie("userId", userId);
  res.render("user.ejs", {userId, name});
})

app.post("/login", (req, res)=>{
  let {username, password} =req.body;
  console.log('username, password :', username, password);
  res.redirect("/")
})

app.listen(port, () => {
  console.log(`App is listened on ${port}.`)
})