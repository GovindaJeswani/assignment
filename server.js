
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const {MongoClient} = require('mongodb')

process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEPTION!  Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

// console.log(DB);

// connecing with DATABASE

// mongoose
  //.connect(process.env.DATABASE_LOCAL, { // when we have to connect to our local database
  MongoClient
  .connect(DB, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false
  })
  .then(() => console.log('DB connection successful!'))
  .catch(err => {
    if (err) {
      console.log('There was some error', err.message);
    }
  });

// starting server

const port = process.env.PORT || 8000;
const localhost = '127.0.0.1';
const server = app.listen(port, () => {
  console.log(`App up and running at :  http://${localhost}:${port}  ...`);
});
process.on('unhandledRejection', err => {
  console.log(err.name, err.message);
  console.log('UNHANDLED REJECTION!  Shutting down...');
  server.close(() => {
    process.exit(1);
  });
});
