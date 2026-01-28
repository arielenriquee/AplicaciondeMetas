import { useEffect, useState , useContext} from "react";
import estilos from "./detalles.module.css"
import { Contexto } from "../../Servicios/Memoria";
import { useNavigate , useParams} from "react-router-dom";
function Detalles () {
    const {id}=useParams();

    const [form,setForm] = useState({
        detalles : '',
        eventos : 1 ,
        periodo : 'dia',
        icono : '🏃',
        meta : 52 ,
        plazo : '2030-01-01',
        completado : 0
    });

    const [estado,enviar] = useContext(Contexto);

    const {detalles,eventos,periodo,icono,meta,plazo,completado} = form;

    const onChange = (event , prop) => {
        setForm(estado => ({...estado,[prop]:event.target.value}));
        
    }
 
    const navegar = useNavigate();

useEffect(() => {
        if (!id) return;
        const metaMemoria = estado.objetos[id];
        
        if (!metaMemoria) {
            return navegar('/404');
        }
        setForm(metaMemoria);
    }, 
    [id, estado.objetos, navegar]); 
    const crear = () => {
        enviar({tipo :'crear', meta : form});
        navegar('/lista');
    }
    const actualizar = () => {
        enviar({tipo :'actualizar', meta : form});
        navegar('/lista');
    }
    const cancelar = () => {
        navegar('/lista');
    }
    const borrar = () => {
        enviar({tipo : 'borrar', id});
        navegar('/lista');
    }



    const opcionesDeFrecuencia = [ "día" , "semana" , "mes" , "año"];
    const iconos = ["💻","🏃","📚","✈️","💵"];
    return ( 
        <div className="tarjeta">
        <form className="p-4">
            <label className="label">Describe tu meta
                <input placeholder="ej. 52 caminatas" className="input" value={detalles} onChange={e => onChange(e , 'detalles')}/>
            </label>
            <label className="label" >¿Con que Frecuencia deseas Cumplir tu meta? <span>(ej.1 vez a la semana)</span>
                <div className="flex mb-6">
                    <input type="number" className="input mr-6" value={eventos} onChange={e => onChange(e , 'eventos')} />
                    <select className="input" value={periodo} onChange={e => onChange(e , 'periodo')}>
                        {opcionesDeFrecuencia.map(opcion => <option value={opcion}>{opcion}</option>)}
                    </select>
                </div>
            </label>
            <label className="label" >¿Cuantas veces deseas completar esta meta?
            <input type="number" className="input" value={meta} onChange={e => onChange(e , 'meta')}/>
            </label>
            <label className="label">¿tienes una fecha límite?
            <input type="date" className="input" value={plazo} onChange={e => onChange(e , 'plazo')}/>
            </label>
            <label className="label">¿Cuantas veces haz Completado ya esta Meta?
            <input type="number" className="input" value={completado} onChange={ e=> onChange(e,'completado')}/>
            </label>
            <label className="label"> Escoge el icono para la meta
                <select className="input" value={icono} onChange={e => onChange(e , 'icono')}>
                    {iconos.map(opcion => <option value={opcion}>{opcion}</option> )}
                </select>
                    
            </label>
        </form>
        <div className={estilos.botones}>
            {!id && <button className="boton boton--negro" onClick={crear}>Cear</button>}
           {id && <button className="boton boton--negro" onClick={actualizar}>Actualizar</button>}
           {id && <button className="boton boton--rojo" onClick={borrar}>Borrar</button>}
            <button className="boton boton--gris" onClick={cancelar}>Cancelar</button>
        </div>
        
        </div>
     );
}

export default Detalles ;