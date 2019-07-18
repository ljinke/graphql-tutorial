const Promise = require("bluebird");
const DataLoader = require("dataloader");
const db = require("../db");

const batchGet = async ids => {
  console.log("StudentLoader: batchGet =>", ids);

  const data = db.students.list();

  const result = ids.map(id => data.find(s => s.id === id));

  return result;
};

const studentLoader = new DataLoader(batchGet);

module.exports = studentLoader;
