const PagPrincipal = ({idioma}) => {
    const ArrBienvenido = ['Bienvenido','Welcome','Bienvenu']
    const Arrh3 = ['Cliquee alguno de los links de arriba para ver la lista de productos o la información del sitio',
                    'Click any of the links above to see the product list or the page information.',
                    "Cliquez sur quelque link au-dessus pour voir la liste de produits ou l'information du site"]
    return ( 
        <div className="PagPrincipal pagina">
        <h2>{ArrBienvenido[idioma]}</h2> 
        <h3>{Arrh3[idioma]}</h3>
        </div>
     );
}
 
export default PagPrincipal;