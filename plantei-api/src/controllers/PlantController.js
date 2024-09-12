import FormPlant from '../models/FormPlant.js'
import Counter from '../models/CounterSchema.js'

import { validatePlantSchema } from '../validations/PlantValidation.js';

// Função para obter o próximo ID sequencial
async function getNextSequenceValue(sequenceName) {
    const counter = await Counter.findOneAndUpdate(
        { _id: sequenceName },
        { $inc: { sequence_value: 1 } },
        { new: true, upsert: true }
    );
    return counter.sequence_value;
}

class PlantController {

    async store(req, res) {

        const {
            name,
            subtitle,
            type,
            price,
            discountPercentage,
            label,
            features,
            description,
        } = req.body

        // Verifica se um arquivo foi enviado e obtém o nome do arquivo da imagem
        const imgPlant = req.file ? req.file.filename : null;

        try {
            // Obtém o próximo ID sequencial
            const plantId = await getNextSequenceValue('plantId');

            const validationError = await validatePlantSchema(req.body)

            if (validationError) {
                return res.status(400).json({ error: 'Falha na validação', details: validationError })
            }

            // Cria a planta
            const plant = await FormPlant.create({
                _id: plantId,
                name,
                subtitle,
                type,
                price,
                discountPercentage,
                label,
                features,
                description,
                imgPlant,
            })

            // Formata resposta 
            const formattedPlant = {
                id: plant._id,
                name: plant.name,
                subtitle: plant.subtitle,
                label: plant.label,
                price: `R$ ${plant.price.toFixed(2)}`,
                discountPercentage: plant.discountPercentage,
                isInSale: plant.isInSale,
                features: plant.features,
                description: plant.description,
                imgUrl: plant.imgPlant,
            };

            return res.status(200).json({ plants: [formattedPlant] });
        }
        catch (err) {
            console.error('Erro ao cadastrar a planta:', err);
            return res.status(400).json({ error: 'Erro ao cadastrar a planta.', details: err.message });
        }
    }
    // Get
    async index(req, res) {
        const { status } = req.query
        const plants = await FormPlant.find({ status })

        return res.json(plants)
    }

}
export default new PlantController()