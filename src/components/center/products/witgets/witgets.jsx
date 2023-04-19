import { useEffect, useState } from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function Witgets() {
  const bose_list = [
    {
      imgOne: '',
      imgTow: '',
      title: 'ACTON II',
      price: 0
    },
    {
      imgOne: '',
      imgTow: '',
      title: 'STANMORE III',
      price: 0
    },
    {
      imgOne: '',
      imgTow: '',
      title: 'WOBURN III',
      price: 0
    }
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return(
    <section className="Witgets">

    </section>
  )
}

export default Witgets