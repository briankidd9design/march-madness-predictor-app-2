// create the express server
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 3000;
// setting our express server
const app = express();

// test the api in postman by typing in http://localhost:5000/api
// create a folder called routes and inside the folder create an index.js file
// app.get("/api", (req, res) => {
//   res.json({ success: true });
// });
// after creating the Routes director and router inside the index.js file in that directory, test again in Postman to make sure we are still connected to the server at port 5000
// Static folder to the front end
// This should load the app to localhost: 5000
app.use(express.static("public"));
// Routes
app.use("/api", require("./routes"));
// Enable cors
app.use(cors());

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
