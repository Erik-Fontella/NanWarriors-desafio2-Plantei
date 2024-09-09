import "./Carousel.css"
import HomeCard from '@Components/HomeCard/HomeCard'
const Carousel = () => {
  return (
    <div className="carousel-container">
        <HomeCard name="Echinocereus Cactus" price="15.00" tag="indoor"/>
        <HomeCard name="Modern Picture" price="15.00" tag="indoor"/>
        <HomeCard name="Modern Picture" price="15.00" tag="outdoor"/>
        <HomeCard name="Modern Picture" price="15.00" tag="Label"/>
    </div>
  )
}

export default Carousel