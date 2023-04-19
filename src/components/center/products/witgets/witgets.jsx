import { useRef, useState } from "react"
import Slider from "react-slick";
import bose_one from '../../../../assets/acton-iii-black-default.jpg'
import bose_one__hover from '../../../../assets/acton-iii-black-hover.jpg'
import bose_two from '../../../../assets/stanmore-iii-black-default.jpg'
import bose_two__hover from '../../../../assets/stanmore-iii-black-hover.jpg'
import bose_three from '../../../../assets/woburn-iii-black-default.jpg'
import bose_three__hover from '../../../../assets/woburn-iii-black-hover.jpg'
import './witgets.css'

function Witgets() {
  const [selectedBose,setSelectedBose] = useState(null);
  const bose_list = [
    {
      imgOne: bose_one,
      imgTow: bose_one__hover,
      title: 'ACTON III',
      price: 299
    },
    {
      imgOne: bose_two,
      imgTow: bose_two__hover,
      title: 'STANMORE III',
      price: 399
    },
    {
      imgOne: bose_three,
      imgTow: bose_three__hover,
      title: 'WOBURN III',
      price: 599
    }
  ]

  const sliderRef = useRef(null);
  const targetSlide = 3;

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };

  return(
    <section className="Witgets">
      <div className="container_witgets">
        <h2>NUESTROS FAVORITOS</h2>
        <Slider {...settings} ref={sliderRef}>
          {bose_list.map(el => 
            <div 
              className="bose_container"
              onMouseEnter={() => setSelectedBose(true)}
              onMouseLeave={() => setSelectedBose(false)}
            >
              <div className="bose_container__img">
                <img src={selectedBose ? el.imgTow : el.imgOne} alt="" />
              </div>
              <div className="bose_container__body">
                <p>{el.title}</p>
                <p style={selectedBose ? {color:'white'} : {color:'#161616'}}>€ {el.price}</p>
                  
              </div>
            </div>
          )}
        </Slider>
      </div> 
    </section>
  )
}

export default Witgets