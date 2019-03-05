const express = require("express");
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.json({
        success: true,
        message: "server running"
    })
})

app.listen(port, () => console.log(`server running on port ${port}!`));