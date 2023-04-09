import { Link } from 'react-router-dom';
import * as C from './style';
//import { LogoDamore } from '../../Assets/img/LogoDamore.png'

export const Header = () => {
  return (
    <C.Container>
      <h1>
        Logo
      </h1>
      <ul>
        <Link to="/">Home</Link>
        <Link to="contato">Contato</Link>
      </ul>
      </C.Container>
  )
}
