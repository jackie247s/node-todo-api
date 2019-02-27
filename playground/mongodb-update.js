const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		console.log('Unable to connect to database');
		return;
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').findOneAndUpdate(
	// 	{
	// 		_id: new ObjectID('5c753da432ce5700bc2dbf0d')
	// 	},
	// 	{
	// 		$set: {
	// 			completed: true
	// 		}
	// 	},
	// 	{
	// 		returnOriginal: false
	// 	}
	// ).then(console.log);

	db.collection('Users').findOneAndUpdate(
		{
			_id: new ObjectID('5c767737a11dd636fc4b3a7a')
		},
		{
			// $set: {
			// 	name: 'Waleed Khalid'
			// },
			$inc: {
				age: -1
			}
		},
		{
			returnOriginal: false
		}
	).then(console.log);

	// db.close();
});