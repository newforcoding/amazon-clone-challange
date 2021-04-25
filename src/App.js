
import {useState,useEffect} from 'react'
import Header from './Header';
import './App.css'
import Cart from './Cart';
import Home from './Home';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import {db,auth} from './firebase'
import Login from './Login';

function App() {
  const [user,setUser] = useState(JSON.parse(localStorage.getItem('user ')))
  const [cartItems,setCartItems] = useState([])
  
  const getCartItem = () =>{
   db.collection('CartItems').onSnapshot((snapshot)=>{
     const tempItems = snapshot.docs.map((doc)=>({
       id:doc.id,
       product:doc.data()
     }))
     setCartItems(tempItems)
    })
  }

  const signOut =()=>{
    auth.signOut().then(()=>{
      localStorage.removeItem('user')
      setUser(null)
    })
  }
  useEffect(() => {
    getCartItem()
  }, [])
  
  console.log("user",user)

  return (
    <Router> 
      {
        !user ? (
          <Login setUser={setUser}/>
        ):(
    <div>
      <Header signOut={signOut} user={user} cartItems={cartItems}/>
        <Switch>
          <Route path='/cart'>
            <Cart cartItems={cartItems}/>
           </Route>
          <Route path='/'>
            <Home/>
          </Route>
        </Switch>
       </div>
      )
    }
  </Router>
 );
}

export default App;
