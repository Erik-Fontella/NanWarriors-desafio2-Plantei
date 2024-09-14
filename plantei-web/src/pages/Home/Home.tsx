import HomeSteps from "./components/HomeSteps/HomeSteps"
import SectionStore from "./components/SectionStore/SectionStore"
import "./Home.css"
import { useEffect, useState } from "react";
import axios from 'axios';
import { Plant } from "@Types/Plant";

const Home = () => {   
  const [plants, setPlants] = useState<Plant[]>([]);
  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const response = await axios.get('http://localhost:3333/plants');
        setPlants(response.data);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPlants();
  }, []);

  return (
    <div className="home-container">
        <HomeSteps/>
        <SectionStore plants={plants}/>
    </div>
  )
}

export default Home