const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");


const port = process.env.PORT || 3000;
require("./db/connection");
const Register = require("./models/registers");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const static_path = path.join(__dirname, "../public");
app.use(express.static(static_path));
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "hbs");

app.get("/", (req, res) => {
    res.render("index")

})

app.get("/register", (req, res) => {
    res.render("register");
})

app.get("/", (req, res) => {
    res.render("Login")
})

app.get("/Login", (req, res) => {
    res.render("Login");
})

app.post("/register", async(req, res) => {
    try {

        const password = req.body.pass;
        const cpassword = req.body.re_pass;

        if (password === cpassword) {
            const registera = new Register({
                name: req.body.name,
                email: req.body.email,
                pass: password,
                re_pass: cpassword
            })
            const registered = await registera.save();
            res.status(201).render(index);
        } else {
            res.send("Password are not Matching")
        }

    } catch (error) {
        res.status(400).send(error);
    }
})
app.post("/Login", async(req, res) => {
    try {

        const email = req.body.your_name;
        const password = req.body.your_pass;
        const useremail = await Register.findOne({ email: your_name });
        if (useremail.pass === password) {
            res.status(201).render("index");
        } else {
            res.send("Password are not correct");
        }
    } catch (error) {
        res.status(400).send("invalid email")
    }
})

app.listen(port, () => {
    console.log(`server is running at port ${port}`)
})