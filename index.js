const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send({
        message: 'Response from the Second Server'
    });
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log('Second Server - Listening on port', PORT);
});


