const fs = require('fs');
const path = require('path');

const deleteDirectoryRecursive = (directory, remove) => {
  if (fs.existsSync(directory)) {
    fs.readdirSync(directory).forEach((file) => {
      const curPath = path.join(directory, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        deleteDirectoryRecursive(curPath, true);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    if (remove) {
      fs.rmdirSync(directory);
    }
  }
};

deleteDirectoryRecursive('dist');
