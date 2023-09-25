const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

mongoose.connect('mongodb://127.0.0.1:27017/mern-clients-apps',  { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(cookieParser());
app.use(cors());

const UserApiRouter = require('./routes/UserApiRoutes');


app.use('/user/', UserApiRouter);



app.listen(8001, () => {
    console.log('Server CRM started');
})