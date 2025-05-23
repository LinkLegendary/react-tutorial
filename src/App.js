import Nav from "./components/Nav";

import "./app.css";

import Footer from "./components/Footer.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books.jsx";
import { books } from "./data";
import BookInfo from "./pages/BookInfo.jsx";
import Cart from "./pages/Cart.jsx";
import { useEffect, useState } from "react";


function App() {

  const [cart, setCart] = useState([]);

function addTocart(book){
  setCart([...cart, {...book, quantity: 1}])
}

function changeQuantity(book, quantity){
 
  setCart(
    cart.map((item)  => item.id === book.id 

     ? {
       ...item,
        quantity: +quantity,
       }
     : item  
    ) 
    );
    
  

}   


// if (item.id === book.id) {
    //   return { 
    //     ...item,
    //     quantity: +quantity,
    //   }
    // }
    // else {
    //   return item
    // }
 


function removeItem(item){
  setCart(cart.filter(book => book.id !== item.id))

}

function numberOfItems(){
     let counter = 0;
     cart.forEach(item => {
      counter += item.quantity
     })
     return counter
}


useEffect(() => {
    console.log(cart)
}, [cart])






 

  return (
    <Router>
      <div>
        <Nav numberOfItems={numberOfItems()} />
       
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={ () => <Books books={books} />} />
        <Route
          path="/books/:id"
          render={() => <BookInfo books={books} addTocart={addTocart} cart={cart} />}
        />
        <Route path="/cart" render={() => <Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem}/>} />

        <Footer />
      </div>
    </Router>
  );
}

export default App;














 // function addTocart(book) {
  //   const dupeItem = cart.find((item) => +item.id === +book.id);
  //   if (dupeItem) {
  //     //  dupeItem.quantity += 1;
  //     setCart(
  //       cart.map((item) => {
  //         if (item.id === dupeItem.id) {
  //           return {
  //             ...item,
  //             quantity: item.quantity + 1,
  //           };
  //         } else {
  //           return item;
  //         }
  //       })
  //     );
  //   }
  //   else {
  //     setCart([...cart, {...book, quantity: 1}])
  //   }

  //   console.log(dupeItem);
  //   // setCart([...cart, { ...book, quantity: 1 }]);
  // }

  // useEffect(() => {
  //   //  console.log(cart);
  // }, [cart]);