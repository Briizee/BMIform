const port = 3000,
    express = require("express");
    bodyParser = require("body-parser");
    
app = express();
app.set('view engine', 'pug');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.render('index');
})

app.post("/", (req, res) => {
    const height = req.body.height / 100
    const BMIResult = req.body.weight / Math.pow(height, 2)
    res.render('index', { 
        result: `Your BMI Result is: ${BMIResult.toFixed(1)}`,
        age: req.body.age,
        weight: req.body.weight,
        height: req.body.height
    })
})

app.listen(port, () =>{
    console.log(`The Express.js server has started and is listening on port number: ${port}`);
});

