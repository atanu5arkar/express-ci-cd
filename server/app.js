import express from "express";

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
    return res.status(200).json({ msg: `Welcome to CI/CD Route. Port=${port}` });
})

app.listen(port, () => {
    console.log('Server running at', port);
});