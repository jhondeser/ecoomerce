import './hero.css'

function Hero() {
  return(
    <section className="Hero">
      <div className="wrapper wrapper-full">
        <div className="widget-image-banner__image-wrapper">
          <div className="widget-image-banner__image">
            <div className="widget-description">
              <a href="#">
                <h1>UN SONIDO <br/> LEGENDARIO, HECHO PARA LA AVENTURA</h1>
              </a>
              <a href="#">
                <p>DESCUBRE EL ALTAVOZ PORTATIL MÁS POTENTE DE MARSHALL</p>
              </a>
              <a href="#" className='description__btn'>
                <button>COMPRAR MIDDLETON</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero