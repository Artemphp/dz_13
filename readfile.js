var fs = require("fs");
 
fs.appendFileSync("hello.txt", "Hello МИР!\r\n", function(error){
	if(error) throw error; 
    console.log("запись файла завершена.");
});