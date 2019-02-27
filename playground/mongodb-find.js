const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		console.log('Unable to connect to database');
		return;
	}
	console.log('Connected to MongoDB server');

	db.collection('Users').find({
		location: 'Karachi'
	}).toArray()
	.then(docs => {
		console.log('Users');
		console.log(JSON.stringify(docs, undefined, 2));
	}, err => {
		console.log('Unable to fetch users', err);
	});

	// db.close();
});