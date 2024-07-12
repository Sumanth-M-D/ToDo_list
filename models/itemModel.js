import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

//? Database configuration and connection
// const db = new pg.Client({
//   database: process.env.DATABASE,
//   user: process.env.USER,
//   password: process.env.PASSWORD,
//   host: process.env.HOST,
//   port: process.env.PORT,
// });

const db = new pg.Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

db.connect();

//? Fetch all items from the database
export async function getItems() {
  try {
    const data = await db.query("SELECT * FROM items ORDER BY id ASC");
    return data.rows;
  } catch (err) {
    console.log(err.message);
  }
}

//? Add a new item to the database
export async function addItem(title) {
  try {
    await db.query("INSERT INTO items (title) VALUES ($1)", [title]);
  } catch (err) {
    console.log(err.message);
  }
}

//? Update an existing item in the database
export async function updateItem(id, title) {
  try {
    await db.query("UPDATE items SET title = $1 WHERE id=$2", [title, id]);
  } catch (err) {
    console.log(err.message);
  }
}

//? Delete an item from the database
export async function deleteItem(id) {
  try {
    await db.query("DELETE FROM items WHERE id = $1", [id]);
  } catch (err) {
    console.log(err.message);
  }
}
