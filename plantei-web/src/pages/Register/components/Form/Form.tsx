import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import './Form.css';

const createPlantSchema = z.object({
  plantTitle: z.string(),
  plantSubtitle: z.string(),
  plantType: z.string(),
  plantPrice: z.coerce.number(),
  plantDiscount: z.coerce.number(),
  plantLabel: z.string(),
  features: z.string(),
  description: z.string()
})


type CreatePlantSchema = z.infer<typeof createPlantSchema>

export function CreatePlantDialog() {
  const { register, handleSubmit } = useForm<CreatePlantSchema>({
    resolver: zodResolver(createPlantSchema),
  })

  function handleCreatePlant(data: CreatePlantSchema) {
    console.log(data)
  }

  return (
  
    <div className="container">
    <div className="form-container">
      <form onSubmit={handleSubmit(handleCreatePlant)} className="plant-form">
        <h2 className="plant-form-title">Plant registration</h2>

        <hr className="custom-line" />

        <div className="form-group">
          <label id='plantTitle' htmlFor="plantTitle">Plant name</label>
          <input
            type="text"
            className="plant-form-input"
            placeholder="Echinocereus Cactus"
            {...register('plantTitle')}
          />
        </div>

        <div id="plantSubtitle" className="form-group">
          <label htmlFor="plantSubtitle">Plant subtitle</label>
          <input
            type="text"
            className="plant-form-input"
            placeholder="A majestic addition to your plant collection"
            {...register('plantSubtitle')}
          />
        </div>

        <div id="plantType" className="form-group">
          <label htmlFor="plantType">Plant type</label>
          <input
            type="text"
            className="plant-form-input"
            placeholder="Cactus"
            {...register('plantType')}
          />
        </div>

        <div className="plant-form-row">
          <div className="form-group">
            <label htmlFor="plantPrice">Price</label>
            <input
              type="text"
              className="plant-form-input"
              placeholder="$139.99"
              {...register('plantPrice')}
            />
          </div>

          <div className="form-group">
            <label htmlFor="plantDiscount">Discount percentage</label>
            <input
              type="text"
              className="plant-form-input"
              placeholder="20%"
              {...register('plantDiscount')}
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
            {...register('plantLabel')}
          />
          <label htmlFor="indoor">Indoor</label>

          <input
            type="radio"
            id="outdoor"
            value="Outdoor"
            {...register('plantLabel')}
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

    <div className="image-container">
      <img src="src\assets\register\image 23.png" alt="Plant" className="plant-image" />
    </div>
  </div>
 
  );
};

export default CreatePlantDialog;