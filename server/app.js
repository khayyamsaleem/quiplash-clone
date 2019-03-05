const app = require('express')()
const PORT = 1337

app.get('/', (req, res) => {
    res.json({
        success: true,
        message: "Server running"
    })
})

app.listen(PORT, () => console.log(`server launched at localhost:${PORT}`))