import Product from "./Product"
import styled from "styled-components";

const ProductUl=styled.ul`
    display:grid;
    grid-template-columns:30% 30% 30%;
    grid-template-rows:auto auto auto;
    grid-column-gap:40px;
    list-style:none;
    justify-content:center;
`


const Home=({listProducts,addToBasket})=>{
    const productsNodes=listProducts.map((product)=>{
        return <Product product={product} key={product.id} addToBasket={addToBasket}/>
    })
    
    return(
        <ProductUl>
            {productsNodes}
        </ProductUl>
    )
}
export default Home