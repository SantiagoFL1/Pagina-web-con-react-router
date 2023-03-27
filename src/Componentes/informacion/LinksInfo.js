import { NavLink , Outlet } from "react-router-dom";
const ArrTituloInfo = ['Información','Information','Information']
const ArrSitio = ['Sitio','Site','Site']
const ArrAutor = ['Autor','Author','Auteur']


const LinksInfo = ({idioma}) => {
    return ( 
        <div className="LinksInfo pagina">
            <div className="EncabezadoInfo">
                <h1>{ArrTituloInfo[idioma]}</h1>
                <nav>
                    <NavLink to="sitio">      {ArrSitio[idioma]}</NavLink>
                    <NavLink to="autor">  {ArrAutor[idioma]}</NavLink>
                </nav>
            </div>
            <Outlet/>   
        </div>
     );
}
 
export default LinksInfo;