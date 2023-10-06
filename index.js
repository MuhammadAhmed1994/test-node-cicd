const express = require('express');
var CronJob = require("cron").CronJob;
const admin = require('firebase-admin');
const serviceAccount = require('./service-key.json');
const app = express();
const port = 80;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://test-nodejs-b7d4b-default-rtdb.firebaseio.com', // Replace with your project's database URL
});

const db = admin.firestore();





console.log("hello world bahar")
app.get('/', (req, res) => {
  console.log("hello world andar")
  
  res.send('Hello World1!')
});
app.listen(process.env.PORT || port)
new CronJob(
  "0 8 * * *",
  () => {
    const data = {
      name: new Date().toString(),
      age: 30,
      email: 'john.doe@example.com',
    };
    
    const usersCollection = db.collection('users');

    usersCollection
    .add(data)
    .then((docRef) => {
      console.log('Document written with ID:', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document:', error);
    });
  },
  null,
  true,
  "America/Denver"
);