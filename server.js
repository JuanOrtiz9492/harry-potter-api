const express = require("express");
const path = require("path");
const fs = require("fs");
const cors = require("cors");
const BASE_PATH = "/harry-potter-api";
const app = express();
function readDb() {
  try {
    const raw = fs.readFileSync(path.resolve(__dirname, "db.json"));
    const response = raw.toString();
    return JSON.parse(response);
  } catch (error) {
    throw new Error("cant read json file");
  }
}
app.use(cors());
app.use(express.json());
app.use(BASE_PATH + "/imagenes", (req, res, next) => {
  const { url } = req;
  if (url.slice(-3) === "png") {
    const fileName = url.slice(1);
    try {
      const imgPath = path.resolve(__dirname, "imagenes", fileName);
      res.sendFile(imgPath);
    } catch (error) {
      console.log(error);
    }
  } else {
    next();
  }
});
app.get(BASE_PATH + "/db", (req, res) => {
  const data = readDb();
  res.json(data);
});
app.get(BASE_PATH + "/hechizos", (req, res) => {
  const data = readDb();
  res.json(data.hechizos);
});
app.get(BASE_PATH + "/info", (req, res) => {
  const data = readDb();
  res.json(data.info);
});
app.get(BASE_PATH + "/personajes", (req, res) => {
  const { id } = req.query;
  const data = readDb();
  const parsedData = data.personajes.map((item) => {
    return {
      ...item,
      imagen: BASE_PATH + item.imagen,
    };
  });
  if (id) {
    const charId = Number(id);
    const selectedCharacter = parsedData.find(
      (character) => character.id === charId
    );
    res.json(selectedCharacter);
  } else {
    res.json(parsedData);
  }
});
app.get(BASE_PATH + "/libros", (req, res) => {
  const data = readDb();
  res.json(data.libros);
});
const port = process.env.PORT || 5000;
app.listen(port);

console.log(BASE_PATH + "/db");
console.log(`API listening on port ${port}`);
