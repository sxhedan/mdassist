const fs = require('fs');
const { dialog } = window.require('electron').remote;

function DisplayMD() {
  let filePath = '/c/Users/sxhed/Tests/mdassist/samples/sample1.md';    // test
  var text;
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if(err){
      alert("An error ocurred reading the file :" + err.message);
      return;
    }
    console.log("The file content is : " + data);
    text = data
  });
  return (
    <div>${text}</div>
  );
}

export default DisplayMD;
