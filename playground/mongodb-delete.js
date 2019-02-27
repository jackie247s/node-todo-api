const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		console.log('Unable to connect to database');
		return;
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').deleteMany({ text: 'Eat Lunch' }).then(console.log);
	// db.collection('Users').deleteMany({ name: 'Ali Usman'}).then(console.log);
	db.collection('Users').findOneAndDelete({ _id: new ObjectID('5c766ec0a11dd636fc4b3a77')}).then(console.log);
	// db.close();
});