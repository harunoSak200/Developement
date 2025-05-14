// This is the dumb way of doing the input validation and the authentication : 

const express = require("express");
const app = express();
const PORT = 7001;

app.get("/health-checkup", (req, res) => {
    const kidneyId = parseInt(req.query.kidneyId);
    const username = req.headers.username;
    const password = req.headers.password;

    if (username !== "aditya" || password !== "pass1502") {
        return res.status(403).json({
            msg: "User doesn't exist"
        });
    }

    if (kidneyId !== 1 && kidneyId !== 2) {
        return res.status(411).json({
            msg: "Wrong input for the kidneys"
        });
    }

    res.send("Your kidney is healthy");
});

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});
