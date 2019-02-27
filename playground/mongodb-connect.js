const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		console.log('Unable to connect to database');
		return;
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (err, result) => {
	// 	if (err) {
	// 		console.log('Unable to insert Todo', err);
	// 		return;
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	db.collection('Users').insertOne(
		{
			name: 'Ali Usman',
			age: 22,
			location: 'Karachi'
		},
		(err, result) => {
			if (err) {
				console.log('Unable insert User object', err);
				return;
			}

			console.log(result.ops[0]._id.getTimestamp());
		}
	);

	db.close();
});