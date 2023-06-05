const mongoose = require('mongoose');

const user = 'new_user_1';
const password = 'pnH4hlnpa2GwyoHv';
const databaseName = 'sample_airbnb';
const uri = `mongodb+srv://${user}:${password}@cluster0.3aio0bs.mongodb.net/${databaseName}?retryWrites=true&w=majority`;
mongoose.connect(uri, 
	{
		useNewUrlParser: true, useUnifiedTopology: true
	}
)
.then(() => console.log('Base de datos conectada'))
.catch(e => console.log(e))

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));