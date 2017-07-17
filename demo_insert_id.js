var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/mydb";

MongoClient.connect(url, function(err,db){
	if (err) throw err;
	var myobj = [{_id:111,name:"apple"},{_id:112,name:"banana"},{_id:113,name:"pear"}];
	db.collection("fruits").insertMany(myobj,function	(err,res) {
		if (err) throw err;
		db.close();
	})
})

//_id field tht value must be unique for each record