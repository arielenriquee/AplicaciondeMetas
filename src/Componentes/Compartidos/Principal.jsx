import estilos from './Principal.module.css';
import Vinculo from './Vinculo';
import list from '../../assets/list.svg'
import add from '../../assets/add.svg'

function Principal({ children }) {
    return (
        <div className={estilos.principal}>
            <aside className={estilos.aside}>
                <Vinculo href="/lista" texto="Lista de metas" Icono={list}>
                </Vinculo>
                <Vinculo href="/crear" texto="Nueva Meta" Icono={add}>
                </Vinculo>
            </aside>
            <main className={estilos.main}>
                {children}
            </main>
        </div>

    );
}
export default Principal;