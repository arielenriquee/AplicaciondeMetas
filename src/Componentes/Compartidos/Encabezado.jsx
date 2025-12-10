import copa from '../../assets/metaCopa.svg';
import user from '../../assets/user.svg';
import './Encabezado.css';

function Encabezado(){
    return(
        <header className="contenedor" >
            <div className="contenedor-logo" >
                <img src={copa} alt="logo-trofeo" className="logo" />
                <a href="/" className='titulo' >Metas App</a>
            </div>
            <nav>
                <a href="/perfil" className='vinculo'>
                    <img src={user} alt="icono-usuario" className="icono" />
                </a>
                
            </nav>
        </header>
    );
}
export default Encabezado;
