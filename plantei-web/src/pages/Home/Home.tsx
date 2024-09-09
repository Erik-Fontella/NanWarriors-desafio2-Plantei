import Carousel from "./components/Carousel/Carousel"
import "./Home.css"
const Home = () => {
    
  return (
    <div className="home-container">
        <h2>This Weeks Most Popular <span>And Best Selling</span></h2>
        <Carousel/>


        <h2>Plants In <span>Sale</span></h2>
        <Carousel/>
    </div>
  )
}

export default Home