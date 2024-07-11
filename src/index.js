const express = require('express');
const cors = require('cors');

const app = express();
const port = 4000;

app.use(cors());

const mongoose = require('mongoose');
const dbConnect = require('../config/connection');
dbConnect();

app.listen(port, () => console.log(`Example app listening on port ${port}`));
