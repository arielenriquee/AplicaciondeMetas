import './App.css';
import Encabezado from './Componentes/Compartidos/Encabezado';
import Principal from './Componentes/Compartidos/Principal';
import Pie from './Componentes/Compartidos/footer';



function App(){
    return (
        <div className='App'>
            <Encabezado></Encabezado>
            <Principal></Principal>
            <Pie></Pie>
        </div>
    )
}
export default App;