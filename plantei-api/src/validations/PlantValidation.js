import * as Yup from 'yup'

// Yup para verificação
export const plantSchema = Yup.object({
    _id: Yup.number(),
    imgPlant: Yup.string(),
    name: Yup.string().required(),
    subtitle: Yup.string().required(),
    type: Yup.string().required(),
    label: Yup.string().required(),
    price: Yup.number().required(),
    discountPercentage: Yup.number().required(),
    features: Yup.string().required(),
    description: Yup.string().required(),
})

export async function validatePlantSchema(data) {
    try{
        await plantSchema.validate(data, {abortEarly: false})
        return null

    }
    catch(err){
        return err.errors
    }
}