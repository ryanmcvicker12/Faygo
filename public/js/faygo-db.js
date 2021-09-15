const { decodeBase64 } = require('bcryptjs');
const mysql = require('mysql')

const db = mysql.createConnection({
    host:'localhost',
    user: 'faygo',
    password: '', // dont fuck this up , REMOVE AND CHANGE 
    database: 'test'
});

db.connect((err) => {
    if(err) { throw err; }
    console.log("YAY DB CONNECTED")

})

//querying for testing purposes
db.query("SELECT * FROM  `users` ", function(err,res) {
    if (err) { throw err };
    console.log(res);
})