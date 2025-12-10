import './App.css';
import Encabezado from './Componentes/Compartidos/Encabezado';
import Principal from './Componentes/Compartidos/Principal';
import Pie from './Componentes/Compartidos/footer';
import Lista from './Componentes/lista/lista';




function App() {
    return (
        <div className='App'>
            <Encabezado></Encabezado>
            <Principal>
                <Lista></Lista>
            </Principal>
            <Pie></Pie>
        </div>
    )
}
export default App;