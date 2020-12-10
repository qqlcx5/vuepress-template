const readFile = require('./readFile');

function simpleReadFile( title, fileRoot, fileList = []) {
    fileList.push({
        title,
        collapsable: false,
        children: readFile(fileRoot)
    });
  return fileList;
}

module.exports = simpleReadFile;
