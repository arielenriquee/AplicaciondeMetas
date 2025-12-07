function Principal({children}){
    return(
        <>
             <div>
            <a href="/lista">Lista</a>
            <a href="/crear">Crear</a>
            </div>
            <div>
                {children}
            </div>
        </>
       
    );
}
export default Principal;