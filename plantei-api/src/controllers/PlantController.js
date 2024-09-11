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

        const imgPlant = req.file ? req.file.filename : null;

        try {
            // Obtém o próximo ID sequencial
            const plantId = await getNextSequenceValue('plantId');

            const validationError = await validatePlantSchema(req.body)

            if (validationError) {
                return res.status(400).json({ error: 'Falha na validação', details: validationError })
            }

            const plant = await FormPlant.create({
                _id: plantId,
                imgPlant,
                name,
                subtitle,
                type,
                price,
                discountPercentage,
                label,
                features,
                description,
            })
            return res.status(200).json(plant);
        }
        catch (err) {
            console.error('Erro ao cadastrar a planta:', err); 
            return res.status(400).json({ error: 'Erro ao cadastrar a planta.', details: err.message });
        }


    }

}
export default new PlantController()