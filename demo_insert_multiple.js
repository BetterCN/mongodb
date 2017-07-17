var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/mydb";

MongoClient.connect(url, function(err,db){
	if (err) throw err;
	var myobj = [{name:"Ran",age:10},{name:"Rex",age:20},{name:"Amy",age:22}];
	db.collection("customers").insertMany(myobj,function	(err,res) {
		if (err) throw err;
		console.log("Number of records inserted:"+res.insertedCount);
		console.log(res);
		db.close();
	})
})



/*res = { result: { ok: 1, n: 3 },
  ops:
   [ { name: 'Ran', age: 10, _id: 596c77652199f9151c6ed313 },
     { name: 'Rex', age: 20, _id: 596c77652199f9151c6ed314 },
     { name: 'Amy', age: 22, _id: 596c77652199f9151c6ed315 } ],
  insertedCount: 3,
  insertedIds:
   [ 596c77652199f9151c6ed313,
     596c77652199f9151c6ed314,
     596c77652199f9151c6ed315 ] }
     */
