const express = require("express");
const app = express();

const dreams = [
    "Find and count some sheep",
    "Climb a really tall mountain",
    "Wash the dishes"
];


app.use(express.static("build"));

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/build/index.html");
});

app.get("/dreams", (request, response) => {
    response.json(dreams);
});

const listener = app.listen(process.env.PORT, () => {
    console.log("Your app is listening on port " + listener.address().port);
});
