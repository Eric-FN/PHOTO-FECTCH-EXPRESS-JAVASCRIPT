const express = require("express");
const axios = require("axios");
const app = express();

app.use(express.static("assets"));
app.get("/photos", async (req, res) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/photos"
    );
    const section = response.data.slice(0, 20).map((photo) => ({
      id: photo.id,
      title: photo.title,
      url: photo.url,
    }));
    res.json(section);
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao buscar dados da API");
  }
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/assets/index.html");
});

app.listen(4000, () => {
  console.log(`listening on port 4000...`);
});
