const express = require('express');
const cors = require('cors');
const beansRouter = require('./routes/beans');
// express app
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use('/api/beans', beansRouter);

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../frontend/src/test.html'));
// })


// listen for requests
app.listen(PORT);