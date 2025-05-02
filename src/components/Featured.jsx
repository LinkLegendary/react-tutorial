
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Book from './UI/Book'
import {books} from '../data'

const Featured = () => {
    console.log(books);
 console.log();

   
  return (
    <section className="" id="features">
        <div className="container">
            <div className="row">
                <h2 className="section__title">
                    Featured <span className="purple">Books</span>
                </h2>
                <div className="books">
                    {books
                    .filter(book => book.rating === 5)
                    .slice(0 , 4)
                    .map(book =>  <Book book={book} key={book.id} /> )
                    }
                    {/* <Book />
                    <Book />
                    <Book />
                    <Book /> */}
                    {/* <div className="book">
                        <a href="">
                            <figure className="book__img--wrapper">
                                <img src="https://m.media-amazon.com/images/I/61mIq2iJUXL._AC_UF1000,1000_QL80_.jpg" alt="" />

                            </figure>
                        </a>
                        <div className="book__title">
                            Atomic Habits
                        </div>
                        <div className="book__ratings">
                            <FontAwesomeIcon icon="star" />
                            <FontAwesomeIcon icon="star" />
                            <FontAwesomeIcon icon="star" />
                            <FontAwesomeIcon icon="star" />
                            <FontAwesomeIcon icon="star-half-alt" />
                        </div>
                        <div className="book__price">
                            <span className="book__price--normal">$15</span>
                            $10.00
                        </div>

                    </div> */}
                   
                </div>
            </div>
        </div>
    </section>
  )
}

export default Featured
