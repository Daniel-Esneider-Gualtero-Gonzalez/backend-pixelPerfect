import express from 'express'
import multer from 'multer'
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

app.post("/api/removebg", upload.single("image_file"),async (req,res)=>{

    console.log("body api remove",req.body)
    console.log("file ", req.file)

    res.end("remove success")
})

export default  app 




