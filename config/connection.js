const mongoose = require('mongoose');

const dbConnect = () => {
	//datos de acceso
	const dbName = 'Hospital';
	const user = 'deligarbur';
	const pass = 'wfuxuyDNg3HQJaQF';
	const uri = `mongodb+srv://${user}:${pass}@cluster0.0wjkc99.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`;
	//conexión con la base de datos
	mongoose
		.connect(uri)
		.then(() => console.log('Se ha conectado a MongoDB'))
		.catch(error => console.error('Error de conexión', error));
};

module.exports = dbConnect;