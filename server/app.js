import express from "express";

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
    return res.status(200).json({ msg: `Welcome to CI/CD Route. Port=${port}` });
})

app.get('/hello', (req, res) => {
    return res.status(200).json({ msg: 'Hello, World!' });
})

app.get('/atanu', (req, res) => {
    return res.status(200).json({ msg: 'Hello, Atanu!' });
})

app.listen(port, () => {
    console.log('Server running at', port);
});