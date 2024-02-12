import express from 'express'
import multer from 'multer'
import { apikeysBd } from '../conexionBd.js'
const app = express()

const upload = multer()



app.use(express.json())
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*'); // Puedes cambiar '*' por un dominio específico

    // Configura los métodos HTTP permitidos
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  
    // Configura las cabeceras personalizadas permitidas
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
    // Habilita las credenciales (cookies y encabezados personalizados) si es necesario
    res.setHeader('Access-Control-Allow-Credentials', 'true');
  
    // Continuar con la solicitud
    next();
})

app.get("/",(req,res)=>{
    res.end("Bienvenidos a la api pixel perfecto")
})

app.get("/saludo", (req,res)=>{
    res.end("Hola mundo los saludo pixelPerfecto")
})

app.post("/api/createapikey", async(req,res)=>{
    
    let response = null
    const {apikey} = req.body

    try {
       const newApikey = await new Promise((resolve, reject) => {
            apikeysBd.insert({apikey:new Date()},(error,apiKeys)=>{
                if(error){
                    response = "Error al crear la apikey "
                    reject("Error al crear la apikey ")
                }
                response = "Apikey creada exitosamente"
                resolve(apiKeys)
            })
        })

        console.log("Succes ",newApikey)

    } catch (error) {
        console.log("Error al insertar la apikey", error)
    }



    res.end(response)
   
})

export default  app 




