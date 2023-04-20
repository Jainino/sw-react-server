const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const dataRoutes = require('./src/routes/routes');

dotenv.config()

const app = express();
const port = process.env.PORT || 5000;

// подключение middleware
app.use(cors());
app.use(bodyParser.json());

// маршруты
app.use('/api', dataRoutes);

//статич файлы
app.use(express.static('public'));

// подключение к базе данных
const dbURI = `mongodb+srv://mortal:${process.env.DB_PASSWORD}@elcarion.ymvwwvz.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('Connected to database');
});

// запуск сервера
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// обработчики событий подключения и ошибки
mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error', (err) => {
  console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});