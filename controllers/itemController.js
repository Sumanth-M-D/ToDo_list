import {
  getItems,
  addItem,
  updateItem,
  deleteItem,
} from "../models/itemModel.js";

//? Render the home page with list of items
export async function renderHome(req, res) {
  const items = await getItems();
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  });
}

//? Handle adding a new item
export async function handleAddItem(req, res) {
  const item = req.body.newItem;
  await addItem(item);
  res.redirect("/");
}

//? Handle updating an item
export async function handleUpdateItem(req, res) {
  const id = req.body.updatedItemId;
  const title = req.body.updatedItemTitle;
  await updateItem(id, title);
  res.redirect("/");
}

//? Handle deleting an item
export async function handleDeleteItem(req, res) {
  const id = req.body.deleteItemId;
  await deleteItem(id);
  res.redirect("/");
}
