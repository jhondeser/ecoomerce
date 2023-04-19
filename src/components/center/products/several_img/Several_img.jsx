import './several_img.css'
import Parlan1 from '../../../../assets/parlante_1.jpg'
import Parlan2 from '../../../../assets/parlante_2.jpg'
import Parlan3 from '../../../../assets/parlante_3.jpg'

function Several_img() {
  let several_ims = [
    {
      img: Parlan1,
      title: 'UN SONIDO ENORME, EN UN DISEÑO COMPACTO',
      text:'La tercera generación de Acton, diseñada con un espacio acústico más amplio, cabe en todas partes y te ofrece un sonido extraordinario.'
    },
    {
      img: Parlan2,
      title: 'UN ALTAVOZ LEGENDARIO',
      text:'Diseñado con un espacio acústico estéreo más amplio, Stanmore III te ofrece toda la potencia del sonido Marshall y queda perfecto en cualquier habitación.'
    },
    {
      img: Parlan3,
      title: 'NUESTRO ALTAVOZ MAS POTENTE',
      text:'Hazte ya con la tercera generación de Woburn, y disfruta del espectacular sonido de Marshall, conectividad HDMI y un espacio acústico más amplio que antes.'
    }
  ]

  return(
    <section className="Several_img">
      <div className="widget_several_images-img">
        {several_ims.map(data => (
          <div className="card_container">
            <div className="card_img">
              <img src={data.img} alt="" />
            </div>
            <div className="card_body">
              <div className="card_title">
                <h1>{data.title}</h1>
              </div>
              <div className="card_text">
                <p>{data.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Several_img