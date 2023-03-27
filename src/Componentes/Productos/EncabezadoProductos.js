import { Outlet } from "react-router-dom";


const ArrProductos = ['Productos','Products','Produits']

export default function EncabezadoProductos  ({idioma})  {
    return ( 
        <div className="EncabezadoProductos pagina">
            <h2>{ArrProductos[idioma]}</h2>
           
           <main>
            <Outlet/> 
            </main>
        </div>        
     );
}
 