const app = require('express')();

app.get('/', (req, res) => {
    res.send('Response from the Second Server');
});


app.listen(5001, () => {
    console.log('Second Server - Listening on port 5001');
});


