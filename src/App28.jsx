import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Home from './Home';
import About from './Aboutpro';
import Service from './Servicespro';
import Contact from './Contactpro';
import NavBar from './NavBar';
import Footer from "./Footerpr";
import { Switch , Route, Redirect} from 'react-router-dom';

const App28 = () => {
    return (
        <>
        <NavBar/>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
        </Switch>
        <br/>
        <Footer/>
        </>
    )
}

export default App28;
