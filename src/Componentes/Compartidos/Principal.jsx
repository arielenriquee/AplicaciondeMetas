import estilos from './Principal.module.css';
import Vinculo from './Vinculo';
import list from '../../assets/list.svg'
import add from '../../assets/add.svg'

function Principal({ children }) {
    return (
        <div className={estilos.principal}>
            <aside className='aside'>
                <Vinculo href="/lista" texto="Lista de metas" >
                <img src={list} alt="logo-lista" className='icono' />
                </Vinculo>
                <Vinculo href="/crear" texto="Nueva Meta">
                <img src={add} alt="logo-add"  className='icono'/>
                </Vinculo>
            </aside>
            <main className='main'>
                {children}
            </main>
        </div>

    );
}
export default Principal;