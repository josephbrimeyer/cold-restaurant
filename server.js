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
   } ,
]
// routing
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });
  
  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "table.html"));
  });

  // get reservations data via the api
  app.get("/api/tables", function(req, res) {
    res.json(data.reservations);
  });
  
  app.get("/api/waitlist", function(req, res) {
    res.json(data.waitlist);
  });
  
//   // Create New Characters - takes in JSON input
app.post("/api/new", function(req, res) {
    if (tableData.length <5 ) {
        tableData.push (req.body)
    }
    else {
        waitlist.push (req.body)
    }})

//     // req.body hosts is equal to the JSON post sent from the user
//     // This works because of our body parsing middleware
//     var newCharacter = req.body;
  
//     // Using a RegEx Pattern to remove spaces from newCharacter
//     // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//     newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();
  
//     console.log(newCharacter);
  
//     characters.push(newCharacter);
  
//     res.json(newCharacter);
//   });
  
//   // Starts the server to begin listening
//   // =============================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  