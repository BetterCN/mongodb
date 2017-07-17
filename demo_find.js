var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/mydb";

MongoClient.connect(url, function(err,db){
	if (err) throw err;
	//get the first record
	db.collection("customers").findOne({},function(err,res){
		console.log(res.name);
		db.close();
	});
	//get all records
	db.collection("customers").find({}).toArray(function(err,res){
		if (err) throw err;
		console.log(res);
		console.log(res[0].name);
		db.close();
	});
	//limit the search with a query object
	var query = {name:"Amy"};
	db.collection("customers").find(query).toArray(function(err,res){
		if (err) throw err;
		console.log(res);
		db.close();
	});
	//query with the regular expression
	var query = {name:/^A/};
	db.collection("customers").find(query).toArray(function(err,res){
		if (err) throw err;
		console.log(res);
		db.close();
	});	
	
})