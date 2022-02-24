const express = require("express");
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, "/../public")));

const port = process.env.PORT || 4545

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/../public/index.html"));
});

app.listen(4545, () => {
    console.log(`Listening on port ${port}`);
});