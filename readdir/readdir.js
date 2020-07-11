var testFolder = './tests/';
var fs = require('fs');

fs.readdir(testFolder, function(error, filesList){
    console.log("fileList : "+filesList);    
})