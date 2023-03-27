import './App.css';
import { useState } from 'react';
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'


//    COMPONENTES

import Links from './Componentes/Links';
import LinksInfo from './Componentes/informacion/LinksInfo';

import Listado, { LoaderProductos } from './Componentes/Productos/Listado'

import DetalleProducto, { DetalleProductoLoader } from './Componentes/Productos/DetalleProducto';

import PagPrincipal from './Componentes/PagPrincipal';

import Sitio from './Componentes/informacion/sitio';
import Autor from './Componentes/informacion/autor';

import EncabezadoProductos from './Componentes/Productos/EncabezadoProductos';

import ErrorProductos from './Componentes/Errores/ErrorProductos';
import PagError from './Componentes/Errores/PagError';

//OTROS

import español from './Imagenes/español.png'
import ingles from './Imagenes/ingles.jpg'
import frances from './Imagenes/frances.png'

//

const titulo = ['Tienda online de zapatos','Online shoe store','Magasin de chaussures en ligne']
const ArrIdioma = ['Idioma','Language','Langue']

function App() {
  const [idioma,setIdioma] = useState(0)  

  const Esp = () =>setIdioma(0)
  const Ing = () =>setIdioma(1)
  const Fr = () =>setIdioma(2)

  const router = createBrowserRouter(
    createRoutesFromElements(
     
    <Route className='Rutas' path='/' element={<Links titulo={titulo} idioma={idioma}/>}>

      
      <Route index element={<PagPrincipal idioma={idioma}/>}/>   
      
      
      <Route path='listado' element={<EncabezadoProductos idioma={idioma}/>} errorElement={<ErrorProductos idioma={idioma}/>} >
        <Route index
             element={<Listado idioma={idioma}/>} 
             loader={LoaderProductos}/>
        <Route path=':id' 
              element={<DetalleProducto idioma={idioma} />}
              loader={DetalleProductoLoader}
              />
      </Route> 

      
      <Route path='informacion' element={<LinksInfo idioma={idioma}/>}>
        <Route path='sitio' element={<Sitio idioma={idioma}/>}/>
        <Route path='autor' element={<Autor idioma={idioma}/>}/>
      </Route>
 
      
      <Route path='*' element={<PagError idioma={idioma}/>}/>
    </Route>))

  return (

    <div className="App">

      <div className='Encabezado'>
        <div className='Idioma'> <p>{ArrIdioma[idioma]}:</p>

          <p  onClick={Esp}>Español <img src={español} className="bandera"/>   </p> 
          <p onClick={Ing}> English <img src={ingles} className="bandera"/>   </p>
          <p onClick={Fr}> Français <img src={frances} className="bandera"/>   </p>
        </div>
        
        <RouterProvider router={router}/>
      
      </div>
    
    </div>
  );
}

export default App;
