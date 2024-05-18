const express = require("express");
const app = express();

app.get("/", (req, res) => {
    return res.status(200).json({
        name: "THE BAND",
    });
});

app.listen(3055, () => {
    console.log("Listen at 3055");
});
