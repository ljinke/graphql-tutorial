const Promise = require("bluebird");
const DataLoader = require("dataloader");
const db = require("../db");

const batchGet = async ids => {
  console.log("CollegeLoader: batchGet =>", ids);

  const data = db.colleges.list();

  const result = ids.map(id => data.find(c => c.id === id));

  return result;
};

// DataLoader must be constructed with a function,
// which accepts Array<key> as the keys and returns Promise<Array<value>>, with same length as the Array of keys.
const collegeLoader = new DataLoader(batchGet);

module.exports = collegeLoader;
