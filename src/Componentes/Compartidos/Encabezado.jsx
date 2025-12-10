import copa from '../../assets/metaCopa.svg';
import user from '../../assets/user.svg';
import estilos from './Encabezado.module.css';

function Encabezado(){
    return(
        <header className={estilos.contenedor}>
            <div className={estilos.contenedorLogo}>
                <img src={copa} alt="logo-trofeo" className={estilos.logo} />
                <a href="/perfil" className={estilos.titulo} >Metas App</a>
            </div>
            <nav>
                <a href="/perfil" className={estilos.vinculo}>
                    <img src={user} alt="icono-usuario" className={estilos.icono} />
                </a>
                
            </nav>
        </header>
    );
}
export default Encabezado;
