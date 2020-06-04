let express = require("express");
let path = require("path");
let app = express();
let PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let tableData = [
    {
        name: "",
        phoneNumber: "",
        email: "",
        uniqueID: "",
    },

];
let waitlist = [
    {
        name: "",
        phoneNumber: "",
        email: "",
        uniqueID: "",
    },
]
// routing
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "assets/html/home.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "assets/html/reserve.html"));
});

app.get("/table", function (req, res) {
    res.sendFile(path.join(__dirname, "assets/html/table.html"));
});

// get reservations data via the api
app.get("/api/tables", function (req, res) {
    res.json(tableData);
});

app.get("/api/waitlist", function (req, res) {
    res.json(waitlist);
});

app.post("/api/post/tables", function (req, res) {
    if (tableData.length < 5) {
        tableData.push(req.body)
    }
    else {
        waitlist.push(req.body)
    }
    res.json(req.body)
})

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
