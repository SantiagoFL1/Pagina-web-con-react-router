import { useLoaderData, useParams } from "react-router-dom";

const ArrPrecio = ['Precio','Price','Prix']
const ArrVendedor = ["Vendedor","Seller","Vendeur"]
const ArrDescripcion = ["Descripción","Description","Description"]

export default function DetalleProducto  ({idioma})  {
    
    const Producto = useLoaderData()
    return ( 
        <div className="DetalleProducto subpagina">
            <h3>{Producto.nombre}</h3>
            <p>{ArrPrecio[idioma]}: {Producto.nombre}</p>
            <p>{ArrVendedor[idioma]}: {Producto.vendedor}</p>
            <p>{ArrDescripcion[idioma]}: 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            </p>
        </div> 
 
        );
}


 
export const DetalleProductoLoader = async({params} )=>{
    const {id} = params
    
    const res = await fetch('http://localhost:4000/ListaJSON/'+id)
 
    if (!res.ok){ 
        throw Error()
    }
    return res.json()

}
 