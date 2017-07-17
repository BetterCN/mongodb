var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/mydb";

MongoClient.connect(url, function(err,db){
	if (err) throw err;
	//1 :sort the result by name in ascending 
	//-1:sort the result by name in descending 
	var mysort = {name :1};
	db.collection("customers").find({}).sort(mysort).toArray(function(err,res){
		if (err) throw err;
		console.log(res);
		console.log(res[0].name);
		db.close();
	})
})