import styled from "styled-components";

const ProductUl=styled.ul`
    display:grid;
    grid-template-columns:30% 30% 30%;
    grid-template-rows:auto auto auto;
    grid-column-gap:40px;
    grid-row-gap:20px;
    list-style:none;
    justify-content:center;
`
const ProductLi=styled.li`
    background-color:lightgray;
    border:3px solid;
    border-color:black;
    border-radius:10px;
    padding:40px;

`

const Basket=({basketList})=>{
    console.log(basketList,"sadkjsdfhsofgsafg")
    const basketNode=basketList.map((basket,index)=>{
        return (<ProductLi key={index}>
            <p>{basket.name}</p>
        </ProductLi>
        )
    })
    
    return(
        <ProductUl>
            {basketNode}
        </ProductUl>
    )
}
export default Basket