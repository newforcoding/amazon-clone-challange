import React from 'react'
import styled from 'styled-components'
import ItemComponents from './CartItemComponents'

function CartItems({cartItems}) {
    return (
        <Container>
           <Title>Shopped Items</Title>
           <hr/>
           <ItemContainer>
               {
                  cartItems.map((item)=>(
                    <ItemComponents 
                     id={item.id}
                     item={item.product}
                    />
                  ))
               }
           </ItemContainer>
        </Container>
    )
}

export default CartItems

const Container = styled.div`
background-color:white;
flex:0.8;
margin-right:18px;
padding:20px;
`
const Title = styled.h4`
margin-bottom:8px;

`

const ItemContainer = styled.div``