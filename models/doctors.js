const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const doctorSchema = new Schema({
	//declaramos la estructura de cada documento, clave, valor
	name: String,
	lastName: String,
	price: Number,
	birthDate: String,
	specialty: String,
});

//('nombre de la coleccion', nombre del esquema)
const Doctor = mongoose.model('doctors', doctorSchema);

module.exports = Doctor;
