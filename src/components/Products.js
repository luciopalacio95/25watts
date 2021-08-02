import React from 'react';
import info from './data/products.json';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
function Products() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  const productos = info[0].products;

  const CustomLeftArrow = ({ onClick, ...rest }) => {
    return <button aria-label="Go to next slide" onClick={() => onClick()}className="carousel__arrow__products react-multiple-carousel__arrow__left" type="button"><img src={info[0].left_arrow} alt="arrows"/></button>;
  };
  const CustomRightArrow = ({ onClick, ...rest }) => {
    return <button aria-label="Go to next slide" onClick={() => onClick()} className="carousel__arrow__products react-multiple-carousel__arrow__right" type="button"><img src={info[0].right_arrow} alt="arrows"/></button>;
  };

    return (
      <div className="container-fluid contenedores products" id="products">
        <div className="row rowse">
          <div className="col-md-12">
            <h1 className="title__general title__products">{info[0].title}</h1>
            <p className="subtitle__general subtitle__products">{info[0].subtitle}</p>
          </div>
        </div>
        <div className="row">
          <Carousel
            centerMode={false}
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={false}
            autoPlay={false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            minimumTouchDrag={80}
            transitionDuration={700}
            renderButtonGroupOutside={true}
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
            containerClass="carousel-container carousel__products"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {productos.map((item, i) => 
                <div className="content__product__item" key={i}>
                  <p className="text__product__item">{item.title}</p>
                  <ul className="ol__details__item">
                    {item.list.map((detail, e) => 
                      <li className="text__details__item" key={e}>{detail}</li>
                    )}
                  </ul>
              </div>
            )}
          </Carousel>
        </div>
      </div>
    );
  }
  
  export default Products;
  