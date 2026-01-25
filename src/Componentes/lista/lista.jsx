import { useContext } from "react";
import Meta from "./Metas";
import { Contexto } from "../../Servicios/Memoria";


function Lista() {
    const [estado,enviar] = useContext(Contexto);
   
    return ( 
        estado.orden.map(id => <Meta key={id} {...estado.objetos[id]}></Meta>)
     );
}

export default Lista;