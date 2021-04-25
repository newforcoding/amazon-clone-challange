import React from 'react'
import styled from 'styled-components'
import CartItems from './CartItems'
import {db} from './firebase'

function Products({title,price,rating,image,id}) {
  const addtoCart=()=>{
    console.log(id)
    const cartItems = db.collection('CartItems').doc(id)
    cartItems.get()
    .then((doc)=>{
      console.log(doc)
      if(doc.exits){
        CartItems.update({ 
           quantity:doc.data().quantity + 1 
          })
      }
      else{
        db.collection('CartItems').doc(id).set({
          name:title,
          image:image,
          price:price,
          quantity:1
        })
      }
    })
  }

    return (
        <Container>
            <Title>{title}</Title>
              {/* <ItemDetails>APPLE IPHONE 6 16GB </ItemDetails> */}
               <Price> ₹ {price}</Price>
                <Rating>{Array(rating).fill().map(rating=><p>⭐</p>)}</Rating>
                 <Image src={image}/>
                  <ActionSection>
                    <AddToCart onClick={addtoCart}>Add to cart</AddToCart>
                  </ActionSection> 
        </Container>
    )
}

export default Products

const Container = styled.div`
background-color:white;
z-index:100;
flex:1;
max-height:400px;
padding:20px;
margin:10px;
display:flex;
flex-direction:column;
`

const Title = styled.span`
text-align:center;
font-weight:bolder;
`
const Price = styled.span`
font-weight:500;
margin-top:3px;
text-align:center;
`
const Rating = styled.div`
display:flex;
`
const Image = styled.img`
max-height:200px;
object-fit:contain;
`
const AddToCart = styled.button`
width:100px;
background-color:#f0c14b;
border:2px solid #a88734;
border-radius:2px;
cursor:pointer;
`
const ActionSection = styled.div`
margin-top:12px;
display:grid;
place-items:center;
`
// const ItemDetails = styled.div`
// text-align:center;
// font-weight:bolder;
// `