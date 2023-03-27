import { useEffect, useState } from 'react';


const Encabezado = (props) => {

//const [idioma,setIdioma] = useState(props.idioma)



const titulo = props.palabras[0]
const principal= props.palabras[1]
const listado= props.palabras[2]
const info= props.palabras[3]

return ( 
        <nav className="encabezado">
     {/*}  <h1>{titulo[idioma]}</h1>
            <div className="links">
             
                <a href="/">{principal[idioma]} | </a>
                <a href="/listado">    {listado[idioma]} | </a>
                <a href="/informacion">{info[idioma]}</a>
               
            </div>{*/}
        </nav>
        );
}
export default Encabezado;