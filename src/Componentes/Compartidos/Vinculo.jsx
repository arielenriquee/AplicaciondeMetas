import { Link } from 'react-router-dom';
import estilos from './Vinculo.module.css';
function Vinculo({Icono, texto, to}) {
    return (
        <Link to={to}  className={estilos.vinculo}>
            <img src={Icono} alt={texto} className={estilos.icono} />
            <span className={estilos.texto}>{texto}</span>
            
        </Link>

    );
}
export default Vinculo