const fs = require('fs');
const path = require('path');

fs.copyFileSync(path.resolve('src/styles.css'), path.resolve('dist/styles.css'));
