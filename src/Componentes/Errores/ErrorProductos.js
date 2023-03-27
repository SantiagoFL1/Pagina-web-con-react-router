import { Link , useRouteError } from "react-router-dom";

const ArrMensajeError = ["No se encontró el producto",
                        "Could not find that product",
                        "On n'est pas trouvé le produit"]

const ArrVolverListado = ['Volver a la lista de productos',
                    'Return to product list',
                    "Retourner á la liste de produits"]
const ErrorProductos = ({idioma}) => {
    const error = useRouteError()
    return ( 
        <div className="ErrorPdtos pagina">
            <h1>{ArrMensajeError[idioma]}</h1>
           <Link to="/listado"> <h2> {ArrVolverListado[idioma]}</h2></Link>
        </div>
     );
}
 
export default ErrorProductos;