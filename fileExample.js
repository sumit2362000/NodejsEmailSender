const fs = require('fs')

//readFile
//appendFilefs.readFileSync("./abc.txt", (error, data) => {
//    if (error) {
//        console.log("error");
//        console.log(error);
//    } else {
//        console.log(data);
//   }
//});
//console.log("terminated")

//writeFile
/*let content = "wow this is dynamic content"
fs.writeFile('new_file.txt', content, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("saved");
    }
});*/
//appendFile
/*fs.appendFile("./abc.txt","new content",(err)=>{
    if(err)
    {
        console.log("error "+err);
    }else{
        console.log("saved");
    }
})*/
//deleteFile
fs.unlink("./new_file.txt", (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("deleted");
    }
})