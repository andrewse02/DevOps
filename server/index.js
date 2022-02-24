const express = require("express");
const path = require("path");

const Rollbar = require("rollbar");
const rollbar = new Rollbar({
    accessToken: "c6a9b9002a274910a453e655fb7f8beb",
    captureUncaught: true,
    captureUnhandledRejections: true
});

// record a generic message and send it to Rollbar
rollbar.log("Hello world!");

const app = express();
app.use(express.static(path.join(__dirname, "/../public")));

const port = process.env.PORT || 4545

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/../public/index.html"));
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});