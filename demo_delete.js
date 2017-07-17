var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/mydb";

MongoClient.connect(url, function(err,db){
	if (err) throw err;
	//delete one record
	var myquery = { name: 'Amy' };
  	db.collection("customers").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
  	//delete more
	var myquery = { name: /^A/ };
    db.collection("customers").deleteMany(myquery, function(err, obj) {
    if (err) throw err;

    //obj.result == {n:1,ok:1} execution went OK, and how many documents were affected.
    console.log(obj.result.n + " document(s) deleted");
    db.close();
  });
})