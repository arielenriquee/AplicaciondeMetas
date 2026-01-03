import './App.css';
import Encabezado from './Componentes/Compartidos/Encabezado';
import Principal from './Componentes/Compartidos/Principal';
import Pie from './Componentes/Compartidos/footer';
import Lista from './Componentes/lista/lista';
import Detalles from './Componentes/nueva/detalles';




function App() {
    return (
        <div className='App'>
            <Encabezado></Encabezado>
            <Principal>
                {/*<Lista></Lista>*/}
                <Detalles></Detalles>
            </Principal>
            <Pie></Pie>
        </div>
    )
}
export default App;