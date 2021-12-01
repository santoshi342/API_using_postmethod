//Create a new file
// const fs = require('fs');
// fs.writeFile('demo.txt', 'Welcome to yuvasoft!', function(err,data){
// 	if(err){
// 		console.log(err)
// 	}else{
// 		console.log(data)
// 	}
// });


// Append data in old file 
//const fs = require('fs');
// fs.appendFile('demo.text', 'new content added', function(err, data){
// 	if(err){
// 		console.log(err)
// 	}else{
// 		console.log(data)
// 	}
// });


//Data read with encoded from a old file
//const fs = require('fs');
// fs.readFile('demo.text', 'utf-8', function(err, data){
// 	if(err){
// 		console.log(err)
// 	}else{
// 		console.log(data)
// 	}
// });

//Delete txt file 
// const fs = require('fs');
// fs.unlink("demo.txt" , function(err, data){
//   if(!err){
//     console.log("deleted")
//   }

// });


// Read data from csv file this file downloaded from google 
//const fs = require('fs'); 
// fs.readFile('sample4.csv', 'utf-8', function(err,data){
// 	if(err){
// 		console.log(err)
// 	}else{
// 		console.log(data)
// 	}
// });


//Create and insert data at a time  
// const fs = require('fs'); 
// const csvwriter = require('csv-write-stream')
// const writer = csvwriter();
// writer.pipe(fs.createWriteStream('writesamplecsv.csv'))  // pipe also knows as FIFS's (First In first out)
// writer.write({'Game Number':1001, 'Game Length':111});
// writer.end();


// Append data it's working but not a right way! 
// const data_append = '\r\n11, this is new data 
// fs.appendFile('SampleCSV.csv', data_append,function(err, data){
// 	if(err){
// 		console.log(err)
// 	}else{
// 		console.log('dane ')
// 	}
// }); 


// append data in Csv file and it's working 
// parse() method parses a JSON string 
// const json2csv = require('json2csv').parse; // Json2csv Converts JSON into CSV with column titles and proper line endings
// var newLine = '\r\n';
// var appendThis = [
//   {
//     Total: '100',
//     Name: 'myName1',
//   },
//   {
//     Total: '200',
//     Name: 'myName2',
//   },
// ];


// //If old file is exist so it will check otherwisw create,used to return information about the given file or directory. 
// fs.stat('file.csv', function (err, stat) {
//   if (err == null) {
//     console.log('old File exists');

//   //write the actual data and end with newline
//     var csv = json2csv(appendThis) + newLine;

//     fs.appendFile('file.csv', csv, function (err) {
//       if (err) throw err;
//       console.log('The "data to append" was appended to file!');
//     });
//   } else {
//     //write the headers and newline
//     console.log('New file, just writing headers');
//   }
// });


//Now Create Json file 
// const fs = require('fs');
// const employee = [{
//   "id":"1",
//   "fname": "Santoshi",
//   "lname":"Patidar"
// },
// {
//   "id":"2",
//   "fname": "Santoshi2",
//   "lname":"Patidar2"
// },
// ]
// const data = JSON.stringify(employee);
// fs.writeFile('create.json', data.toString(), function(err,data){
// if(err){
// console.log(err)
// }else{
//   console.log(data)
// }
// });

// jSON file read in console 
// const fs = require('fs');
// fs.readFile('create.json', 'utf-8', function(err,data){
//   if(!err){
//     console.log("Data can read!");
//     console.log(data)
//   }
// });
// or also can use 
// fs.readFile(filePath, 'utf-8', function (err, fileContents) {
//   if (err) throw err;
//   console.log(JSON.parse(fileContents));
// });


// Append data in json file 
// const fs = require('fs');
// const newAppend = {
//   "id": "3",
//   "fname": "bill",
//   "lname":"gates"
// }
// const data = JSON.stringify(newAppend)
// fs.appendFile('create.json', data , function(err, data){
//   if(err){
//     console.log(err)
//   }else{
//     console.log(data)
//   }
// });


// Delete in json file 
// const fs = require('fs');
// fs.unlink('create.json', function(err, data){
//   if(!err){
//     console.log(err)
//   }else{
//     console.log(data)
//     console.log('file deleted')
//   }
// });


//  new approch 
// how to write data in json file 
// const fs = require('fs')
// const customer = [{
//   fname: "santoshi",
//   lname: "patidar",
//   address: "Po Box City"
// },
// {
//   fname: "santoshi1",
//   lname: "patidar1",
//   address: "new test"
// }
// ];
// const jsonString = JSON.stringify(customer,null, 4);
// console.log(jsonString);
// fs.writeFile('Customer.json', jsonString, function(err, data){
//   if(!err){
//     console.log(data)
//   }
// });

// const fs = require("fs");
// fs.readFile("Customer.json", "utf8", (err, data) => {
//   if (err) {
//     console.log("File read failed:", err);
//     return;
//   }
//   console.log("File data:", data);
// });



// const fs = require("fs");

// var myObject =[]
// var data1 = [{
//     "id": 1,
//     "name": "John",
//     "city": "London"
// }]

// var data2 = fs.readFile('Customer.json','utf-8', function(err, data){
// var myObject = JSON.parse(data);
// console.log(data);
// console.log(myObject)
// });

// var myObj3 = myObject.push(data1);
// console.log(myObj3);

// fs.writeFile('Customer.json', myObj3.toString(), function(err,data){
//   if(!err){
//     console.log(data)
//   }
// }
// );   

// const fs = require("fs");
// var datapass = []

// var data = [{
//   "id": "1",
//   "name": "santoshi"
// },
// {
//   id: "2",
//   name: "santoshi1"

// }];


//  var data1 = fs.readFile('Customer1.json'   , function(result){
//   console.log(result)   
//  })

//  console.log(data1)



 // var jsonString = JSON.stringify(data,null, 4);


// fs.readFile('Customer1.json', 'utf-8',function(err,data){
//   var myObject = JSON.parse(data)
//   var newdata = {
//     "id": "3",
//     "name2": "santoshi3"
//   };

//   var pushData = myObject.push(newdata)

// fs.writeFile('Customer1.json',pushData, function(err,data){
//   if(!err){

//     console.log('Send data')
//   }
// })



  //myobject.push(data)
  

; 

// fs.writeFile('Customer1.json',jsonString, function(err,data){
//   if(!err){

//     //console.log(jsonString)
//   }
// })


// var fs = require('fs');

// var obj = {
//    table: []
// };

// obj.table.push({id: 5, square:5});

// var json = JSON.stringify(obj);

// fs.writeFile('myjsonfile.json', json, 'utf8', readFileCallback
// fs.readFile('myjsonfile.json', 'utf8', function readFileCallback(err, data){
//     if (err){
//         console.log(err);
//     } else {
//     obj = JSON.parse(data); //now it an object
//     obj.table.push({id: 2, square:3}); //add some data
//     json = JSON.stringify(obj); //convert it back to json
//     fs.writeFile('myjsonfile.json', json, 'utf8', readFileCallback);; // write it back 
// }});



// const fs = require("fs");

// // Storing the JSON format data in myObject
// var data = fs.readFileSync("data.json");
// var myObject = JSON.parse(data);
    
// // Defining new data to be added
// let newData = {
//   country: "india",
//   population:"100000"
// };
  
// // Adding the new data to our object
// myObject.push(newData);
  


const fs = require("fs");
const jsonString = [{
    "id": "1",
    "name": "santoshi"
},

{
    "id": "2",
    "name": "santoshi2"
}];



fs.writeFile('Customer1.json',JSON.stringify(jsonString),function(err,data){
  if(!err){

    console.log(JSON.stringify(data));
  }
});

myData = {
       "id": "3",
       "name": "santoshi3"
    };

fs.appendFile(jsonString, JSON.stringify(myData, null, 4), function(err) {
       if (err) {
          console.log(err);
       }
    });