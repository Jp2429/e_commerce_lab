import styled from "styled-components";


const ProductLi=styled.li`
    background-color:lightgray;
    border:3px solid;
    border-color:black;
    border-radius:10px;
    padding:40px;

`

const Product=({product,addToBasket})=>{
    const handleClick=()=>{
        addToBasket(product)
    }


    return(
        <ProductLi>
                <p>{product.name}</p>
                <p>£{product.price}</p>
                <button onClick={handleClick}>Add to Basket</button>

        </ProductLi>
        
    )
}
export default Product