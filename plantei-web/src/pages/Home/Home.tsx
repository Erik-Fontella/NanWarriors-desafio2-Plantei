import Carousel from "./components/Carousel/Carousel"
import HomeSteps from "./components/HomeSteps/HomeSteps"
import SectionStore from "./components/SectionStore/SectionStore"
import "./Home.css"

const Home = () => {   
  return (
    <div className="home-container">
        <HomeSteps/>
        <SectionStore/>
    </div>
  )
}

export default Home