import LabelTag from '@Components/LabelTag/LabelTag'
import './HomeCard.css'
import ImgPlant from "@Assets/home/img-plant.png"


interface HomeCardProps{
    name: string,
    price: number,
    discount: number,
    label: string,
    type: string
}

const HomeCard: React.FC<HomeCardProps> = (props) => {

  const handlePrice = (price: number, discount: number) => {
    return (price * (1 - (discount/100)))
  }

  return (
    <div className='homecard-container'>
        <img src={ImgPlant} alt="" />
        <div className='homecard-info'>
            <h4>{props.name}</h4>
            <div>
              {props.discount > 0 ? (
                <p>${handlePrice(props.price, props.discount)}</p>
              ) : (
                <p>${props.price}</p>
              )}

              {props.discount > 0 && <p>${props.price}</p>}
            </div>
            <div>
            <LabelTag name={props.label}/>
            {props.type && <LabelTag name={props.type}/>}
            </div>
        </div>
    </div>
  )
}

export default HomeCard