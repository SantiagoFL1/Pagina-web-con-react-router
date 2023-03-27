import { NavLink , Outlet } from "react-router-dom";
//import './../App.css'
const ArrPP = ['Página principal','Home','Page principal']
const ArrListado = ['Listado de productos','Products list','Liste de produits']
const ArrInfo = ['Información','Information','Information']

const Links = ({titulo,idioma}) => {



    return ( 
        <div className="links">
            <header>
            <h1> <NavLink to="/"> {titulo[idioma]} </NavLink></h1>  
                <nav>
                    <NavLink to="/">{ArrPP[idioma]}</NavLink>
                    <NavLink to="listado">{ArrListado[idioma]}</NavLink>
                    <NavLink to="informacion">{ArrInfo[idioma]}</NavLink>
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
     );
}
 
export default Links;