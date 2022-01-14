const express = require('express');
const app = express();
const budgets = require("./models/budget");

//////////////////////////////////////////////////
// Middleware
// body-parser - creates req.body
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
//////////////////////////////////////////////////
// INDEX 

app.get('/budgets/', (req, res) => {
        // res.send("helllooo")
    res.render("index.ejs", { allBudgets: budgets, title: "Budegts - Index Page" });
});
//////////////////////////////////////////////////
 //NEW 
 app.get("/budgets/new", (req, res) => {
    //  console.log(req.body) **** I can't figure out why req.body is empty. Creating a new item doesn't work =/ 

    res.render("new.ejs", {title: "Budgets - New Page"});
    budgets.push(req.body)
         res.redirect("/budgets");

})
//////////////////////////////////////////////////

// CREATE 
app.post("/budgets", (req,res) => {
    budgets.push(req.body)
    // redirect (get) to /fruits
    res.redirect("/budgets")
});

//////////////////////////////////////////////////
//SHOW 
app.get("/budgets/:indexOfBudgetArray", (req, res) => {
    res.render("show.ejs", { budget: budgets[req.params.indexOfBudgetArray], title: "First - Show Page" });
  });  



//////////////////////////////////////////////////

// Server Listener
app.listen(4000, () => {
    console.log('listening');
});