import { useEffect, useState } from 'react';
import './Products.css'
import axios from 'axios';
import { Plant } from '@Types/Plant';
import { Link } from 'react-router-dom';
import HomeCard from '@Components/HomeCard/HomeCard';

const Products = () => {
    const [plants, setPlants] = useState<Plant[]>([]);
    const [status, setStatus] = useState<string>('');
    useEffect(() => {
      const fetchPlants = async () => {
        try {
          setStatus('Loading...');
          const response = await axios.get('http://localhost:3333/plants');
          setPlants(response.data);
        } catch (err) {
          setStatus("We couldn't find the data at this time. Please try again later.")
          console.log(err)
        }
      };
  
      fetchPlants();
    }, []);
  

  return (
    <section className='products-container'>
        <div className='products-gallery'>
            {plants.length > 0 ? (
                plants.map((item) => (
                    <Link to={`/product/${item._id}`} key={item._id}><HomeCard 
                        key={item._id}
                        name={item.name} 
                        price={item.price} 
                        discount={item.discountPercentage}
                        label={item.label} 
                        type={item.type} 
                    /></Link>
                ))
            ) : <p>{status}</p>}
        </div>
    </section>
  )
}

export default Products