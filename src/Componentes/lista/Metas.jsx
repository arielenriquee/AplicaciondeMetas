import estilos from './Meta.module.css';



function Meta({icono,eventos,periodo,detalles,meta,completado}) {
    return ( 
       <div className={estilos.meta + " tarjeta"}>
        <div className='flex'>
            <div className={estilos.icono}>{icono}</div>
            <p className="text-xl ml-5">{eventos} 
                <sub className='text-gray-500 text-xs'>/ {periodo}</sub>
            </p>
            <p>{detalles}</p>
        </div>
        <div className='flex'>
            <div className='relative m-2 mx-5'>
            <p className='text-center'>{completado} de {meta}</p>
            <div className={estilos.barra1}>
                <div className={estilos.barra2} style={{width: `${Math.round((completado / meta)*100)}%`}}></div>
            </div>
            </div>
            <button className='boton boton--gris'>Completado</button>
        
       </div>
        </div>
        
     );
}

export default Meta;