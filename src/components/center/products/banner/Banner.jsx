import './banner.css'
import banner_img from '../../../../assets/banner_img.png'

function Banner() {
  return(
    <section className="Banner">
      <div className="banner_container">
        <div className="banner_card">
          <div className="banner__container__img">
            <img src={banner_img} alt="" />
          </div>
          <div className="banner__container__body">
            <h3>HAZ QUE CUALQUIER HABITACIÓN COBRE VIDA</h3>
            <p>
              Sumérgete en tu música con los altavoces Bluetooth de la línea Marshall Home: equipos de sonido domésticos que hacen que cualquier habitación cobre vida. Ya quieras tener en casa el aspecto y el sonido clásicos de Marshall o disfrutar la calidad de un gran escenario en un espacio pequeño, tenemos el altavoz perfecto para ti.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner