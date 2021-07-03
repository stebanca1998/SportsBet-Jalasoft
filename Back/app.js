///////////IMPORTED MODULES/////////////
const express = require('express')
const cors = require('cors')
const router = require('./routes')

const app = express();

const port = 4000;//port definition

////////////ROUTES & USES/////////////////////
app.use(router);
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true,}) )


///////////PORT CONFIGURATION////////////////
app.listen(port, () => {
  console.log('Server listening on port ' + port + '!')
});