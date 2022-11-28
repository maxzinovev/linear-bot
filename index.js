const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// Parse the request body
app.use(bodyParser.json());

// Receive HTTP POST requests
app.post("/my-linear-webhook", (req, res) => {
    const payload = req.body;
    const { action, data, type, createdAt } = payload;

    console.log(payload)

    // Do something neat with the data received!

    // Finally, respond with a HTTP 200 to signal all good
    res.sendStatus(200);
});

app.listen(port, () => console.log(`My webhook consumer listening on port ${port}!`));
