const express = require('express');
require('dotenv').config();
const app = express();
app.use(express.json());
const PORT = parseInt(process.env.PORT || '15000');
app.get('/api/v1/task', (req, res) => {
    res.send('The api is ready');
});

app.listen(PORT, () => {
    console.log(`Sever is running on port ${PORT}`);
});