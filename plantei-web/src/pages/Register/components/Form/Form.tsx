import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import './Form.css';

const createPlantSchema = z.object({
  name: z.string(), 
  subtitle: z.string(), 
  type: z.string(), 
  price: z.coerce.number(), 
  discountPercentage: z.coerce.number(), 
  label: z.string(), 
  features: z.string(),
  description: z.string() 
})

type CreatePlantSchema = z.infer<typeof createPlantSchema>

export function CreatePlantDialog() {
  const { register, handleSubmit } = useForm<CreatePlantSchema>({
    resolver: zodResolver(createPlantSchema),
  })

  async function handleCreatePlant(data: CreatePlantSchema) {
    try {
      const response = await fetch('http://localhost:3333/plants', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Planta registrada com sucesso:', responseData);
      } else {
        console.error('Erro ao registrar planta:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao enviar requisição:', error);
    }
  }

  return (
    <div className="container">
      <div className="form-container">
        <form onSubmit={handleSubmit(handleCreatePlant)} className="plant-form">
          <h2 className="plant-form-title">Plant registration</h2>

          <hr className="custom-line" />

          <div className="form-group">
            <label id='name' htmlFor="name">Plant name</label>
            <input
              type="text"
              className="plant-form-input"
              placeholder="Echinocereus Cactus"
              {...register('name')} 
            />
          </div>

          <div id="subtitle" className="form-group">
            <label htmlFor="subtitle">Plant subtitle</label>
            <input
              type="text"
              className="plant-form-input"
              placeholder="A majestic addition to your plant collection"
              {...register('subtitle')} 
            />
          </div>

          <div id="type" className="form-group">
            <label htmlFor="type">Plant type</label>
            <input
              type="text"
              className="plant-form-input"
              placeholder="Cactus"
              {...register('type')}
            />
          </div>

          <div className="plant-form-row">
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input
                type="text"
                className="plant-form-input"
                placeholder="$139.99"
                {...register('price')} 
              />
            </div>

            <div className="form-group">
              <label htmlFor="discountPercentage">Discount percentage</label>
              <input
                type="text"
                className="plant-form-input"
                placeholder="20%"
                {...register('discountPercentage')} 
              />
            </div>
          </div>

          <div className="plant-form-radio-group">
            <h2>Label:</h2>
            <input
              type="radio"
              id="indoor"
              value="Indoor"
              defaultChecked
              {...register('label')} 
            />
            <label htmlFor="indoor">Indoor</label>

            <input
              type="radio"
              id="outdoor"
              value="Outdoor"
              {...register('label')}
            />
            <label htmlFor="outdoor">Outdoor</label>
          </div>

          <div id="features" className="form-group">
            <label>Features</label>
            <textarea
              className="plant-form-textarea"
              placeholder="Species: Echinocereus..."
              {...register('features')}
            />
          </div>

          <div id="description" className="form-group">
            <label>Description</label>
            <textarea
              className="plant-form-textarea"
              placeholder="Ladyfinger cactus..."
              {...register('description')} 
            />
          </div>

          <button type="submit" className="plant-form-button">
            Register
          </button>
        </form>
      </div>

      <div className="image-container"/>
      
    </div>
  );
};

export default CreatePlantDialog;