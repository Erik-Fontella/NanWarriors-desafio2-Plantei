import './Product.css'
import ImgPlant from "@Assets/home/img-plant.png"
import ProductInfo from './components/ProductInfo/ProductInfo'

/*imgUrl: string*/
/*
interface ProductProps{
  id: number,
  name: string,
  subtitle: string,
  label: string[],
  price: string,
  isInSale: boolean,
  discountPercentage: 20,
  features: string,
  description: string,
}
const Product: React.FC<ProductProps> = (props) => {
*/
const Product = () => {
  return (
    <section className='product-container'>
      <div className='product-content'>
          <img src={ImgPlant} alt="" />
          <ProductInfo/>
      </div>
    </section>
  )
}

export default Product