import './Product.css'
import ImgPlant from "@Assets/home/img-plant.png"
import ProductInfo from './components/ProductInfo/ProductInfo'

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