import "./GreenSide.css";
import Text from "@Components/Text/Text";
import Button from "@Components/Button/Button";
import Img1 from "@Assets/homeGreenSide/green-img1.png";
import Img2 from "@Assets/homeGreenSide/green-img2.png";
import IconRectangle from "@Assets/homeGreenSide/icon-rectangle.svg";
import IconArrow from "@Assets/homeGreenSide/icon-arrow.svg"

const GreenSide = () => {
  return (
    <section>
      <div id="green-side">
        <div className="green-side-content">
          <div className="love-nature-text">
            <img src={IconRectangle}></img>
            <p>Love for nature</p>
          </div>
          <h1>
            Discover Your <span>Green</span> Side
          </h1>
          <Text text="We are your one-stop destination for all things green and growing. Our website offers a wide array of stunning plants, ranging from vibrant flowers  to lush indoor foliage, allowing you to create your very own green oasis. " />
          <Button text="Shop now" />
          <div id="learn-gardening-text">
            <a>Learn Gardening</a>
            <img src={IconArrow}></img>
          </div>
        </div>

        <div className="green-side-image-container">
          <img src={Img1}></img>
        </div>
      </div>
      <div className="image-container">
        <img src={Img2}></img>
      </div>
    </section>
  );
};

export default GreenSide;
