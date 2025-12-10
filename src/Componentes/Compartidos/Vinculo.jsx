import estilos from './Vinculo.module.css';
function Vinculo({Icono, texto, href}) {
    return (
        <a href={href} className={estilos.vinculo} >
            <img src={Icono} alt={texto} className={estilos.icono} />
            <span className={estilos.texto}>{texto}</span>
            
        </a>

    );
}
export default Vinculo