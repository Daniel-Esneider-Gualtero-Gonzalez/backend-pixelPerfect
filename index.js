
import {createServer} from 'http'
import app from './src/app'





const server =  createServer(app)


const port = process.env.PORT || 3000



server.listen(port,()=>{
    console.log(` Servidor on http://localhost:${port} `)
})
