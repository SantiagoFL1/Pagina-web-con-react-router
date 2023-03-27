import { Link } from "react-router-dom";

const NoEncontrada = ['Página no encontrada',
                        'Page not found',
                        'Page non trouvée']

const ArrVolverPP = ['Volver a la página principal',
                    'Return to homepage',
                    "Retourner á la page principal"]

const PagError = ({idioma}) => {
    return ( 
        <div className="error pagina">
            <h1>{NoEncontrada[idioma]}</h1>
            <Link to="/"> <h3> {ArrVolverPP[idioma]}</h3></Link>
        </div>
     );
}
 
export default PagError;