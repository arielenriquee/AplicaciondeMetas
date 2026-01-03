import estilos from "./detalles.module.css"
function Detalles () {
    const opcionesDeFrecuencia = [ "día" , "semana" , "mes" , "año"];
    const iconos = ["💻","🏃","📚","✈️","💵"];
    return ( 
        <div className="tarjeta">
        <form className="p-4">
            <label className="label">Describe tu meta
                <input placeholder="ej. 52 caminatas" className="input"/>
            </label>
            <label className="label" >¿Con que Frecuencia deseas Cumplir tu meta? <span>(ej.1 vez a la semana)</span>
                <div className="flex mb-6">
                    <input type="number" className="input mr-6" />
                    <select className="input">
                        {opcionesDeFrecuencia.map(opcion => <option value={opcion}>{opcion}</option>)}
                    </select>
                </div>
            </label>
            <label className="label" >¿Cuantas veces deseas completar esta meta?
            <input type="number" className="input" />
            </label>
            <label className="label">¿tienes una fecha límite?
            <input type="date" className="input"/>
            </label>
            <label className="label">¿Cunatas veces haz Completado ya esta Meta?
            <input type="number" className="input"/>
            </label>
            <label className="label"> Escoge el icono para la meta
                <select className="input">
                    {iconos.map(opcion => <option value={opcion}>{opcion}</option> )}
                </select>
                    
            </label>
        </form>
        <div className={estilos.botones}>
            <button className="boton boton--negro">Cear</button>
            <button className="boton boton--gris">Cancelar</button>
        </div>
        
        </div>
     );
}

export default Detalles ;