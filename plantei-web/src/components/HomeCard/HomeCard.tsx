import './HomeCard.css'
import ImgPlant from "@Assets/home/img-plant.png"


interface HomeCard{
    name: string,
    price: string,
    tag: string
}


const HomeCard: React.FC<HomeCard> = (props) => {
  return (
    <div className='homecard-container'>
        <img src={ImgPlant} alt="" />
        <div className='homecard-info'>
            <h4>{props.name}</h4>
            <p>${props.price}</p>
            <span>{props.tag}</span>
        </div>
    </div>
  )
}

export default HomeCard