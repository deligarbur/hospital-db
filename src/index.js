const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json({ limit: '25mb' }));

const dbConnect = require('../config/connection');
dbConnect();

// modelo
const Doctor = require('../models/doctors');

// Ruta para obtener toda la lista de doctores
app.get('/catalogue', async (req, res) => {
	try {
		const doctors = await Doctor.find({});
		res.json(doctors);
	} catch (error) {
		console.error(error);
		res.status(500).send('Error al obtener la lista de doctores');
	}
});

// Ruta para buscar por especialidad y precio > 100
app.get('/doctor/:specialty/:price', async (req, res) => {
	try {
		const { specialty, price } = req.params;
		const query = await Doctor.find({
			specialty: specialty,
			price: { $gt: 100 },
		});
		res.json(query);
	} catch (error) {
		console.log(error);
		res.status(500).send('Error al obtener la lista de doctores');
	}
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));
