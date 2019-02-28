const { ObjectID } = require('mongodb');

const mongoose = require('../server/db/mongoose');
const { Todo, User } = require('../server/models');

var userId = '5c778d84229b9b042fc00e52';

// var id = '5c77c70745a9d488222d5848111';

// if(!ObjectID.isValid(id)) {
// 	console.log('ID not valid');
// }

// Todo.find({
// 	_id: id
// })
// .then(todos => console.log('Todos', todos));

// Todo.findOne({
// 	_id: id
// })
// .then(todo => console.log('Todo', todo));

// Todo.findById(id)
// .then(todo => {
// 	if (!todo) {
// 		return console.log('Id not found');
// 	}

// 	console.log('Todo By Id', todo)
// })
// .catch(console.log);

User.findById(userId)
.then(user => {
	if(!user) {
		return console.log('User not found');
	}

	console.log('User found', user);
})
.catch(console.log);