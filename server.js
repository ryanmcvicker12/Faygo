
// require the express library 

const express = require('express')
const bcrypt = require('bcryptjs') 


const app = express();
app.use(express.json())
//setting up routes to read the assets used 
app.use('/js',express.static(__dirname + '/public/js'))
app.use('/css',express.static(__dirname + '/public/css'))
app.use('/images',express.static(__dirname + '/public/images'))

//usually you would want to store the users in a database of some kind 
const users = []

//THIS IS FOR TESTING PURPOSES, REMOVE WHEN PUBLISHING 

//create method for creating users
app.post('/users', async (req, res) => {
	
	//salt the users password 
	try{
		//the bigger the integer for genSalt(x) - the more secure it will be but take longer to process
		const salt = await bcrypt.genSalt()
		const finalPassword = await bcrypt.hash(req.body.password, salt);

		//print out the salt 

		console.log(salt)
		console.log(finalPassword)

		const user = {name: req.body.name, password: finalPassword}

		users.push(user)
		// sends a response code that verifies the credentials were added	

		res.status(201).send()
	}catch{
		res.status(500).send();
	}
})

app.get('/sign_in', (req,res) => {
	//path must be absolute and not relative 
	res.sendFile('signin.html', {root : __dirname})

})

app.get('/', (req,res) => {
	res.sendFile('visualizer.html', {root: __dirname})
})

//========= database ================

app.listen(3000)

