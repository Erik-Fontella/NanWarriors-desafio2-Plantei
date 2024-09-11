import { Router } from 'express'
import multer from 'multer'
import PlantController from '../controllers/PlantController.js'
import uploadConfig from '../config/upload.js'

const routes = new Router()

const upload = multer (uploadConfig)

routes.post('/plants', upload.single('imgPlant'), PlantController.store);

export default routes