const app = require('express')();
const cors = require('cors');

app.use(cors());


app.get('/', (req, res) => {
    res.send('Response from the Second Server');
});


app.listen(5001, () => {
    console.log('Second Server - Listening on port 5001');
});


