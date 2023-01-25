import React,{useState,useEffect} from "react"
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import styled from "styled-components";
import NavBar from "../components/NavBar"
import Home from "../components/Home"
import Header from "../components/Header"
import Basket from "../components/Basket"


const MainContainer=()=>{
    const [listProducts,setlistProducts]=useState([{
        id:0,
        name:"Jam Roll",
        price:100
    },
    {
        id:1,
        name:"Ham Roll",
        price:10
    },
    {
        id:2,
        name:"Spam Roll",
        price:5
    }])
    const [basketList,setBasketList]=useState([])

    // console.log(listProducts)

    const addToBasket=(product)=>{
        console.log(product,'prkjnvqksbvjsdvqsjndvjnsvfifvsdfvndnvsjnvj')
        
        const copyofList=[...basketList,product]
        setBasketList(copyofList)
        // console.log('wowoww',basketList)
    }
    
    return(
        <Router>
            <Header/>
            <NavBar/>
            <Routes>
                <Route exact path="/" element={< Home listProducts={listProducts} addToBasket={addToBasket}/>} ></Route>
                <Route path="/basket" element={< Basket basketList={basketList}/>} ></Route>
            </Routes>
        </Router>
    )
}
export default MainContainer