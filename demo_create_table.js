var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/mydb";

MongoClient.connect(url, function(err,db){
	if (err) throw err;
	db.createCollection("customers",function(err,res){
		if (err) throw err;
		console.log("Table created!");
		db.close();
	})
})