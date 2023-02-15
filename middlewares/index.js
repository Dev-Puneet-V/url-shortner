// exports all the files export variables in utils folder
const fs = require('fs');
const path = require('path');

const fileNames = fs.readdirSync(__dirname);

fileNames.forEach(fileName => {
  if (fileName !== 'index.js') {
    const module = require(path.join(__dirname, fileName));
    Object.keys(module).forEach(key => {
      exports[key] = module[key];
    });
  }
});