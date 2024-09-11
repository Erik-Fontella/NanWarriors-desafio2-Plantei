import './HomeCard.css'
import ImgPlant from "@Assets/home/img-plant.png"


interface HomeCard{
    name: string,
    price: string,
    promo: boolean,
    tag: string
}


const HomeCard: React.FC<HomeCard> = (props) => {
  return (
    <div className='homecard-container'>
        <img src={ImgPlant} alt="" />
        <div className='homecard-info'>
            <h4>{props.name}</h4>
            <div>
              <p>${props.price}</p>
              {props.promo && <p>$35.00</p>}
            </div>
            <span>{props.tag}</span>
        </div>
    </div>
  )
}

export default HomeCard