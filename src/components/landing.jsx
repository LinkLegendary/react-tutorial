import React from 'react'
import UndrawBooks from '../assets/Undraw_Books.svg'


const Landing = () => {
  return (
    <section>
        <header>
            <div className="header__container">
                <div className="header__description">
                    <h1>Audtralia's most awarded online Library platform</h1>
                    <h2>Find your dream book with <span className="purple">Library</span></h2>
                    <a href="#features">
                        <button className="btn">Browse books</button>
                    </a>
                </div>
                <figure className="header__img--wrapper">
                    <img src={UndrawBooks} alt="" />
                </figure>
            </div>
        </header>
    </section>
  )
}

export default Landing
