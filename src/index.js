import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import useRoute from './routes/useRoutes.js'

// Importamos la Base de datos
import './database/database.js'

// Iniciamo la aplicacion
const executableApp = express();

// configuraciones del puerto
const PORT = process.env.PORT || 5000;

// Configuramos los middleWares

executableApp.use(morgan('dev'));
executableApp.use(cors());
executableApp.use(express.json());

// configuramos la ruta
executableApp.use(useRoute);

executableApp.listen(PORT,()=>{
    console.log(`La Base de Datos esta funcionando en el puerto ${PORT}`)
})

