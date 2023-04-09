import * as C from './style';
import {useState} from 'react';

export const Main = () => {
  const [image, setImage] = useState([]);





  return (
    <C.Container>
      <C.Carrossel>Carrossel</C.Carrossel>
      <div><h2>Aproveite tudo de melhor que há no mercado</h2></div>
      <C.Modelos>
        <div>Camisas</div>
        <div>Vestidos</div>
        <div>Shorts</div>
      </C.Modelos>
      <C.Ultma>
        <h3>Tratamos nossos clientes com aquele diferencial</h3>
        <p>Venha você também fazer parte da nossa clientela</p>
        <p>Aquele que compra uma vez, sempre volta</p>
      </C.Ultma>
    </C.Container>
  )
}
