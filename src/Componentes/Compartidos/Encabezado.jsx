import copa from '../../assets/metaCopa.svg';
import user from '../../assets/user.svg';
import estilos from './Encabezado.module.css';
import Vinculo from './Vinculo';

function Encabezado() {
    return (
        <header className={estilos.contenedor}>
            <div className={estilos.contenedorLogo}>
                <img src={copa} alt="logo-trofeo" className={estilos.logo} />
                <a href="/perfil" className={estilos.titulo}>Metas App</a>
            </div>
            <nav>
                {/* PASO CLAVE: Pasamos 'user' a la prop 'Icono' 
                   y añadimos un texto (aunque sea vacío o "Perfil")
                */}
                <Vinculo 
                    to="/perfil" 
                    Icono={user} 
                    texto="Menú" 
                />
            </nav>
        </header>
    );
}

export default Encabezado;
