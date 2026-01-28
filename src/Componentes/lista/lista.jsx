import { useContext } from "react";
import Meta from "./Metas";
import { Contexto } from "../../Servicios/Memoria";
import { Outlet } from "react-router-dom";


function Lista() {
    const [estado,enviar] = useContext(Contexto);
   
    return ( 
        <>
            {estado.orden.map(id => <Meta key={id} {...estado.objetos[id]}></Meta>)}
            <Outlet></Outlet>
        </>
        
     );
}

export default Lista;