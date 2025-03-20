import Nav from "./components/Nav";
import Landing from "./components/landing.jsx";
import "./app.css";
import Highlights from "./components/Highlights";
import Featured from "./components/Featured.jsx";
import Discounted from "./components/Discounted.jsx";
import Explore from "./components/Explore.jsx";
import Footer from "./components/Footer.jsx";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Books from "./pages/Books.jsx";
import { books } from "./data";
import BookInfo from "./pages/BookInfo.jsx";

function App() {
  return (
    <Router>
      {/* <div> */}
        <Nav />
       
        <Route path="/" exact component={Home} />
        <Route path="/books" render={() => <Books books={books} />} />
        <Route path="/books/1" render={() => <BookInfo books={books} />} />
        <Footer />
      {/* </div> */}
    </Router>
  );
}

export default App;
