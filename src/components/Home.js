import info from './data/home.json';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Home() {
  const sliders = info[0].sliders;

    return (
      <div className="home" id="home">
        <div>
          <Carousel
                  className="carousel__home"
                  showArrows={false}
                  emulateTouch={true}
                  showThumbs={false}
                  showStatus={false}
                  infiniteLoop={true}
                  swipeable={true}
                  useKeyboardArrows={true}
                  margin={0}
                  padding={0}
                  autoPlay={false}
                  interval={5000}
                  transitionTime={800}
                  >
            {sliders.map((item, i) => 
              <div key={i}>
                <img src={item.image_src} className="img__slider__home" alt="25watts"/>
                  <div className="info__slider__home">
                  <h1 className="title__home">{item.title}</h1>
                  <p className="subtitle__home">{item.subtitle}</p>
                  <button className="btn__general btn__home">{item.btn_text}</button>
                  </div>
              </div>
            )}
          </Carousel>
        </div>
      </div>
    );
  }
  
  export default Home;
  