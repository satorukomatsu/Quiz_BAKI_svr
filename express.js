const express = require('express');
const path = require('path');
const app = express();
const port = 3080;

// app.get('/', (req, res) => {
//     res.send('Hello World')
// })
app.use(express.static(path.join(__dirname, '../quiz_baki_app/build')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../quiz_baki_app/build/index.html'));
});

app.listen(port)