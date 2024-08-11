 import Product from "./Products.jsx";

function ProductTab(){
    let styles={
        display:"flex",
        flexDirection:"row",
    }
    return (
        
        <div style={styles}>
        
        <Product  idx={0}/>
        <Product idx={1}/>
        <Product idx={2}/>
        <Product idx={3}/> 
        </div>
        
    )
}
export default ProductTab