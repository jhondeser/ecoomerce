import './footer.css'
import {BsSpotify} from 'react-icons/bs'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {BsPinterest} from 'react-icons/bs'

function Footer() {
  return(
    <section className="Footer">
      <div className="footer_container">
        <div className="footer_newletter__container">
          <div className="footer_newletter__wraper">
            <div className="content-asset">
              <div className="footer_newletter_header">
                <h2>SUSCRIBETE A NUESTRA NEWSLETTER</h2>
                <h6>Obtén un 10% de descuento en tu primer pedido. El cupón se enviará por correo electrónico.</h6>
              </div>
            </div>
            <div className="footer_newletter_form">
              <form action="">
                <input className='inp_footer__form' type='email' placeholder="Escribe tu email aqui"/>
                <p>Al suscribirte, indicas que aceptas nuestra <a href="">POLITICA DE PRIVACIDAD</a></p>
                <input className='btn_footer__form' type="button" value="SUSCRIBIRSE" />
              </form>
            </div>
          </div>
        </div>
        <div className="footer_links__container">
          <div className="links_header">
            <h2>¿NECESITAS AYUDA?</h2>
          </div>
          <div className="links_list">
            <ul>
              <li>
                <a href="#">CONTACTA CON NOSOTROS</a>
              </li>
              <li>
                <a href="#">ACERCA DE SOUND INDUSTRIES</a>
              </li>
              <li>
                <a href="#">CLIENTES COMERCIALES</a>
              </li>
              <li>
                <a href="#">MINORISTAS AUTORIZADOS</a>
              </li>
              <li>
                <a href="#">ENTREGAS</a>
              </li>
              <li>
                <a href="#">CAMBIOS Y DEVOLUCIONES</a>
              </li>
              <li>
                <a href="#">MANUALES DE USUARIO</a>
              </li>
              <li>
                <a href="#">PRODUCTOS FALSIFICADOS</a>
              </li>
              <li>
                <a href="#">QUEJAS Y RECLAMOS</a>
              </li>
              <li>
                <a href="#">CENTRO DE ASISTENCIA</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer_bottom__container">
          <div className="footer_social__container">
            <div className="social_links">
              <BsSpotify size={50}/>
              <AiFillFacebook size={50}/>
              <AiFillInstagram size={50}/>
              <BsPinterest size={50}/>
            </div>
          </div>
          <div className="footer_copyrigth__container">
            <div className="copyrigth_description">
              <h5>
                ©2023 Zound Industries. Todos los derechos reservados.
                Org. no: ﻿********
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer