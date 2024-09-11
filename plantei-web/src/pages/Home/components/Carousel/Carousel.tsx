import "./Carousel.css"
import HomeCard from '@Components/HomeCard/HomeCard'

// @ts-expect-error A biblioteca SplideJS apresenta erro por conta do Typescript, mas funciona normalmente
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'; 

interface CarouselProps{
  promo: boolean
}

const Carousel: React.FC<CarouselProps> = (props) => {
  const plants = [
    { name: "Echinocereus Cactus", price: "15.00", tag: "indoor" },
    { name: "Modern Picture", price: "15.00", tag: "indoor" },
    { name: "Modern Picture", price: "15.00", tag: "outdoor" },
    { name: "Modern Picture", price: "15.00", tag: "Label" }
  ];


  return (
    <div className="carousel-container">
      <div className="carousel-content">
        <Splide
          options={{
            perPage: 4, 
            perMove: 1,
            pagination: false, 
            gap: '4.8rem',
            arrows: true,
            autoWidth: true,
            focus    : 0,
            omitEnd  : true,
            breakpoints: {
              1200: {
                focus: 'center'
              }
            },
          }}
        >
          {plants.map((item, index) => (
            <SplideSlide>
              <HomeCard 
                key={index}
                name={item.name} 
                price={item.price} 
                promo={props.promo}
                tag={item.tag} 
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  )
}

export default Carousel