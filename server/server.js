const express = require("express");
const {getAnimal}  = require("./image-handler");

const app = express();

app.use(express.static("build"));

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/build/index.html");
});

app.get("/get-animal/:animal", async (request, response) => {
    const data = await getAnimal(request.params);
    await response.json(data);
});


const listener = app.listen(process.env.PORT, () => {
    console.log("Your app is listening on port " + listener.address().port);
});
