import './Product.css'
import ImgPlant from "@Assets/home/img-plant.png"
import ProductInfo from './components/ProductInfo/ProductInfo'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Plant } from '@Types/Plant';
import { useParams } from "react-router-dom";
//useNavigate,
const Product = () => {
  const { id } = useParams<{ id: string }>();
  const [plant, setPlant] = useState<Plant | null>(null);
  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const response = await axios.get('http://localhost:3333/plants');
        if (id) {
          const foundPlant = response.data.find((item: Plant) => item._id === Number(id));
          setPlant(foundPlant); 
        } else {
          setPlant(null); 
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchPlants();
  }, [id]); 


  useEffect(() => {
    if (plant) {
      console.log(plant);
    }
  }, [plant]);


  /*const navigate = useNavigate();*/


  return (
    <section className='product-container'>
      <div className='product-content'>
          <img src={ImgPlant} alt="" />
          <ProductInfo plant={plant}/>
      </div>
    </section>
  )
}

export default Product