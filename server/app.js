const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Enable CORS for all origins
app.use(cors());

// Parse incoming JSON data
app.use(bodyParser.json());

// importing middleware

const { verify } = require('./middleware/auth')

// Use a router for todo endpoints
const authRouter = require('./routes/auth');
const transactionRouter = require('./routes/transactions')
const categoriesRouter = require('./routes/categories');

app.use('/auth', authRouter)
app.use('/transactions',verify,transactionRouter)
app.use('/categories', verify, categoriesRouter)



// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
