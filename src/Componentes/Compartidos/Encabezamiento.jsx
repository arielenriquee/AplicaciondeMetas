import logo from '../../assets/metaCopa.svg';
function Encabezamiento(){
    return(
        <div>
            <div>
                <img src={logo} alt="trofeo" />
                <a href="/">Metas App</a>
            </div>
            <nav className="flex">
                <a href="/perfil">Perfil</a>
            </nav>
        </div>
    );
}
export default Encabezamiento;
