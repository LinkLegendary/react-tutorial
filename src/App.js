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
  setCart([...cart, book])
}

useEffect(() => {
    console.log(cart)
}, [cart])






 

  return (
    <Router>
      <div>
        <Nav />

        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route
          path="/books/:id"
          render={() => <BookInfo books={books} addTocart={addTocart} />}
        />
        <Route path="/cart" render={() => <Cart books={books} />} />

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