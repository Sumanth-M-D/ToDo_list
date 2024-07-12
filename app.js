import express from "express";
import bodyParser from "body-parser";

import {
  renderHome,
  handleAddItem,
  handleUpdateItem,
  handleDeleteItem,
} from "./controllers/itemController.js";

const app = express();
const port = 3000;

//? Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

//? Define routes and map to controller functions
app.get("/", renderHome);
app.post("/add", handleAddItem);
app.post("/edit", handleUpdateItem);
app.post("/delete", handleDeleteItem);

//? Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
