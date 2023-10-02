var express = require('express')

var app = express()

const SERVER_PORT = 3000
const SERVER_HOST = "localhost"

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


//http://localhost:3000/
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

//http://localhost:3000/profile
app.post('/profile', (req, res) => {
  const { username, email } = req.body;
  // Process the data (e.g., save it to a database)
  res.send(`Received username: ${username}, email: ${email}`);
});

//http://localhost:3000/admin
app.get('/admin', (req, res) => {
  res.sendFile(__dirname + '/admin.html');
});

//http://localhost:3000/user/100
app.get("/user/:id", (req, res) => {
  // Send the HTML file and include the 'id' as a query parameter
  res.sendFile(__dirname + '/user.html');
  // res.redirect(__dirname + `/user.html`);
});

//http://localhost:3000/valueofday/1980-01-24
app.get("/valueofday/:year(\\d{4})-:month(\\d{2})-:day(\\d{2})", (req, res) => {
  console.log(req.params)
  res.send(req.params)
});

app.listen(process.env.PORT || SERVER_PORT, () => {
  console.log(`Server running at http://${SERVER_HOST}:${SERVER_PORT}/`);
});
