const express = require('express');
const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://subhankr12:helloworld@cluster0.c6pnc.mongodb.net/<dbname>?retryWrites=true&w=majority', { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Successfully connected to MongoDB');
})

app.use(require('./routes/user'));

app.listen(PORT, () => {
    console.log(`Server is up and running on PORT ${PORT}`);
})