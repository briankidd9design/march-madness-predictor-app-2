const express = require("express");
const router = express.Router();
// bring in needle, which will be used to make the api requests
// we use needle instaed of node fetch because with node fetch we cannot use common js and have to use modules
const needle = require("needle");

// Env vars
const API_BASE_URL = process.env.API_BASE_URL;

// change app.get to router.get
// change/api to just /
router.get("/", async (req, res) => {
  //   res.json({ success: true });
  try {
    const apiRes = await needle("get", `${API_BASE_URL}`);
    // console.log(apiRes);
    const data = apiRes.body;
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
    res.status(404).json({ error });
    console.log(`there was an error getting the data, ${error}
    `);
    // document.getElementById("kenError").textContent =
    //   "The hoops data you are looking for was no successfully recieved. Please cotact your admin.";
  }
});

module.exports = router;
