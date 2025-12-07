import './App.css';
import Encabezamiento from './Componentes/Compartidos/Encabezamiento';
import Principal from './Componentes/Compartidos/Principal';
import Pie from './Componentes/Compartidos/footer';



function App(){
    return (
        <div className='App'>
            <Encabezamiento></Encabezamiento>
            <Principal></Principal>
            <Pie></Pie>
        </div>
    )
}
export default App;