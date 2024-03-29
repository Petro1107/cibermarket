//Modules

const express = require('express');
const mysql = require('mysql');
const myconn = require('express-myconnection');
const routes = require('./routes');
const cors = require('cors');
const { route } = require('./routes');

//Server Init

const app = express();
app.set('port', process.env.PORT || 9000);
const dbOptions = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'adivina',
  database: 'cibermarket',
};

//Middlewares

app.use(myconn(mysql, dbOptions, 'single'));
app.use(express.json());
app.use(cors());

//Routes

app.get('/', (req, res) => {
  res.send('CiberMarket Database');
});

app.use('/cibermarket', routes);

//Server Run
app.listen(app.get('port'), () => {
  console.log('server running on port', app.get('port'));
});
