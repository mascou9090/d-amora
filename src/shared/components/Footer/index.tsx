import { Link } from 'react-router-dom';
import * as C from './style';
import { ImHome, ImTruck, ImBubble2, ImInstagram, ImFacebook2, ImWhatsapp } from 'react-icons/im';

export const Footer = () => {
  return (
    <C.Container>
      <div>
        <ImHome />
        <p>Retire<br /> na loja</p>
      </div>
      <div>
        <ImTruck />
        <p>Receba no conforto <br /> da sua casa</p>
      </div>
      <C.Duvidas>
        <Link to="contato">
          <ImBubble2 />
          <p>Tire suas dúvidas <br /> e fale conosco</p>
        </Link>
      </C.Duvidas>
      <div>
        <h5>Perguntas frequentes</h5>
        <p>Politíca de Privacidade</p>
        <p>Central de Privacidade</p>
        <p>Termo de Uso</p>
        <p>Trocas e Devoluções</p>
        <p>Acompanhe seu pedido</p>
      </div>
      <div>
        <h5><span>D Amore </span>nas Redes Sociais</h5>
        <a href="#">
          <ImInstagram />
        </a>
        <a href="#">
          <ImFacebook2 />
        </a>
        <a href="#">
          <ImWhatsapp />
        </a>
      </div>
    </C.Container>
  )
}