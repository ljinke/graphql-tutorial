const { DataStore } = require("notarealdb");
const path = require("path");

const store = new DataStore(path.join(__dirname, "data"));

module.exports = {
  students: store.collection("students"),
  colleges: store.collection("colleges")
};
