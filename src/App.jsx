import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Componentes/Compartidos/Layout';
import Lista from './Componentes/lista/lista';
import Detalles from './Componentes/nueva/detalles';
import NoEncontrado from './Componentes/Compartidos/NoEncontrado';
import Modal from './Componentes/Compartidos/Modal';


function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
            <Route index element={<Lista/>}/>
             <Route path='/lista' element={<Lista />}>
                <Route path="/lista/:id" element={<Modal/>}></Route>
             
             </Route>
             <Route path='/nueva' element={<Detalles />}></Route>
            </Route>
            <Route path="*" element={<NoEncontrado/>}></Route>
            
        
        </Routes>
    )
}
export default App;