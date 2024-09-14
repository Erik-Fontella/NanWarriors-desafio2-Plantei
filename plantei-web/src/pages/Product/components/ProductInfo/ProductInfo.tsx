import { Plant } from '@Types/Plant'
import './ProductInfo.css'
import LabelTag from '@Components/LabelTag/LabelTag'

interface ProductInfoProps{
  plant: Plant | null
}

const ProductInfo: React.FC<ProductInfoProps> = (props) => {

  const formatFeaturesToList = (text: string | undefined): string[] => {
    if (!text) {
      return [];
    }
    const lines = text.split('.');

    const formattedLines = lines
      .filter(line => line.trim() !== '') 
      .map(line => line.trim() + '.');

    return formattedLines;
  }

  const productFeatures = formatFeaturesToList(props.plant?.features)

  return (
    <div className='product-info'>
        <h2>{props.plant?.name}</h2>
        <h3>{props.plant?.subtitle}</h3>
        <div>
          {props.plant && <LabelTag name={props.plant.label}/>}
          {props.plant && <LabelTag name={props.plant.type}/>}
        </div>
        <h4>${props.plant?.price}</h4>
        <button>Check out</button>
        <h5>Features</h5>
        <ul>
          {productFeatures.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
        <h5>Description</h5>
        <p>{props.plant?.description}</p>
    </div>
  )
}

export default ProductInfo