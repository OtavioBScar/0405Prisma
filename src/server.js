import express from "express"
import routes from './routes/index.js'

const app = express()
const PORT = 3000
const RunningMessage = `Server rodando no endereço: http://localhost:${PORT}`

app.use('/api', routes)
app.listen(PORT, () => {
    console.log(RunningMessage)
})