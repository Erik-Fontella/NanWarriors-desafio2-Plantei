import express from "express";
import routes from './routes/routes.js';
import mongoose from 'mongoose';
import path from 'path';
import cors from 'cors'

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class App{

    constructor(){

        this.server = express()
        this.connectDatabase(); // Chama a função para conectar ao banco de dados
        this.middlewares();     // Configura os middlewares
        this.routes();          // Configura as rotas
    }
    // 
    connectDatabase() {
        mongoose.connect('mongodb+srv://thays:oeYU1hzbTFeMeb5i@starwars-a.9npfc.mongodb.net/?retryWrites=true&w=majority&appName=starwars-a')
            .then(() => {
                console.log('Connected to MongoDB');
            })
            .catch(err => {
                console.error('Connection error', err);
                setTimeout(() => this.connectDatabase(), 5000); 
            });
    }
    middlewares(){
        // qualquer dominio e pessoa fazer requisição na api
        this.server.use(cors())

        this.server.use(
            "/files",
            express.static(path.resolve(__dirname, '../uploads'))
        )
        this.server.use(express.json());
    }

    routes() {
        this.server.use(routes);
    }


}
export default new App().server