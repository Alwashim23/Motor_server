const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Motor Server Running");
});

app.get('/test', (req, res) => {
    res.json({ message: "Server is working" });
});

app.post('/motor', (req, res) => {
    const status = req.body.status;
    console.log("Motor:", status);
    res.json({ motor: status });
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
});
