var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/mydb";

MongoClient.connect(url, function(err,db){
	if (err) throw err;
	var myobj = {name:"Ran",age:10};
	db.collection("customers").insertOne(myobj,function	(err,res) {
		if (err) throw err;
		console.log("1 record inserted");
		db.close();
	})
})