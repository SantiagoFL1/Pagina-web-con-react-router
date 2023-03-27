import { useLoaderData , Link } from "react-router-dom";

const Listado = ({idioma}) => {
    
  const Productos = useLoaderData()
  
  return ( 
    
    <div className="ListaProductos pagina">
      {Productos.map(Producto=>(   
        <Link to={Producto.id.toString()} key={Producto.id}>
            
          <div className="FichaProducto"> 
            <h2>{Producto.nombre}</h2>
            <h2>{Producto.precio}</h2>
          </div>
        </Link>
    ))}      
    </div>
    
     );
}
 
export default Listado;

export const LoaderProductos = async()=>{
  const res = await fetch('http://localhost:4000/ListaJSON')
  return res.json()
}