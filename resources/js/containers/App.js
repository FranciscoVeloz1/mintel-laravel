import React from 'react';
import ReactDOM from 'react-dom';

import '../../css/app.css'

import Header from '../components/Header'
import Main from '../components/Main'
import Products from '../components/Products'
import Software from '../components/Software'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Example() {
    return (
        <div>
            <Header />
            <Main />
            <Products />
            <Software />
            <About />
            <Contact />
            <Footer />
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
