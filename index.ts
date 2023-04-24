import express from 'express';
const app = express();
app.use(express.json());
const port = 3000;
app.get('/api/v1', (req, res) => {
    res.send('Testing the api set up already');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});