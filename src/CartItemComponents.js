import React from 'react'
import styled from 'styled-components'
import {db} from './firebase'

function ItemComponents({id,item}) {
    
    const deleteItem = (e) =>{
       e.preventDefault()
       db.collection('CartItems').doc(id).delete()
    }

    let options = []

    for(let i=1;i<Math.max(item.quantity+1,20);i++){
        options.push(<option value={i}> Qty:{i}</option>)
    }

    const changeQuantity = (e) =>{
       db.collection('CartItems').doc(id).update({
           quantity:parseInt(e)
       })
    }
    return (
        <Container>
            <ImageContainer>
                <img src={item.image}/>
            </ImageContainer>
            <CartItemInfo>
                <CartItemInfoTop>
                    <h4>{item.name}</h4>
                </CartItemInfoTop>
                <CartItemInfoBottom>
                    <CartItemQuantity>
                        <select value={item.quantity}
                                onChange={(e)=>changeQuantity(e.target.value)}
                            // onChange={(e)=>changeQuantity(e)}
                            >
                            {options}
                            </select>
                    </CartItemQuantity>
                    <CartItemDelete onClick={deleteItem}>
                        Delete
                    </CartItemDelete>
                </CartItemInfoBottom>
            </CartItemInfo>
            <CartItemPrice>
            ₹ {item.price}
            </CartItemPrice>
        </Container>
    )
}

export default ItemComponents

const Container = styled.div`
padding-top:12px;
padding-bottom:12px;
display:flex;
border-bottom: 1px solid black;
`

const ImageContainer = styled.div`
width:180px;
height:180px;
flex-shrink:0;
flex-grow:0;
margin-right:16px;
img{
    object-fit:contain;
    height:100%;
    width:100%;
}
`

const CartItemInfo = styled.div`
flex-grow:1`

const CartItemInfoTop = styled.div`
color:black;
h4{
    font-size:18px;
}
`

const CartItemInfoBottom = styled.div`
display:flex;
margin-top:4px;
align-item:center;
`
const CartItemQuantity = styled.div`
select{
border-radius:7px;
background-color:#F0F2F2;
padding:5px;
box-shadow:0 2px 5px rgba(15,17,17,.15);
:focus{
    outline:none;
}
}`
const CartItemDelete = styled.div`
color:black;
margin-left:16px;
cursor:pointer;
`
const CartItemPrice = styled.div`
font-size:18px;
font-weight:700;
margin-left:16px;
`
