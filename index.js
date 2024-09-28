const fs = require("fs");

fs.writeFile("message1.txt", "Hello tf", (err) => {
    if(err) throw err;
    console.log("the file is saved");
});

fs.readFile('message1.txt','utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
}); 