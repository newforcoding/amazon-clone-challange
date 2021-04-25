import React from 'react'
import styled from 'styled-components'

function CartTotal({getTotalPrice,getCount}){

    return (
        <Container>
            <Subtotal>Subtotal ({getCount()} Items) :₹ {getTotalPrice()} </Subtotal>
            <CheckoutButton>Proceed to checkout</CheckoutButton>
        </Container>
    )
}

export default CartTotal

const Container = styled.div`
background-color:white;
height:200px;
flex:0.2;
padding:20px;
`
const Subtotal = styled.h3`
margin-bottom:16px;
`

const CheckoutButton = styled.button`
background-color:#f0c14b;
width:100%;
padding:4px 8px;
border:2px solid #a88734;
border-radius:4px;
cursor:pointer;
font-size:16px;
:hover{
    background:#ddb347;
}
`