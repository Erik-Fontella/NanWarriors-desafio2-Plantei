import './ProductInfo.css'
import LabelTag from '@Components/LabelTag/LabelTag'

const ProductInfo = () => {
  return (
    <div className='product-info'>
        <h2>Echinocereus Cactus</h2>
        <h3>A Majestic Addition to Your Plant Collection</h3>
        <div>
          <LabelTag name='indoor'/>
          <LabelTag name='cactus'/>
        </div>
        <h4>$139.99</h4>
        <button>Check out</button>
        <h5>Features</h5>
        <ul>
          <li>Species: Echinocereus spp.</li>
          <li>Mature Size: Varies by species, typically ranging from 4 to 12 inches (10-30 cm) in height.</li>
          <li>Blooming Season: Typically spring or summer, with flowers lasting several days to weeks.</li>
          <li>Pot Size: Available in various pot sizes to suit your preference and needs.</li>
        </ul>
        <h5>Description</h5>
        <p>Ladyfinger cactus (*Echinocereus pentalophus*) is also known as Alice, Devil's Fingers, and Dog Tail. It needs bright sunlight, light fertilizer, and is prone to root rot. The root system is shallow and weak. Aphids and mealybugs are also a danger. Avoiding wet soil can help with success with a ladyfinger cactus.</p>
    </div>
  )
}

export default ProductInfo