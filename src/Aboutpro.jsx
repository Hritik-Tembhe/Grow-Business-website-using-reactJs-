import React from 'react';
import { NavLink } from 'react-router-dom';
import Abimg from '../src/About_img.png';
import Common from './Common';

const About = () => {
    return (
        <>
        <Common name='Welcome to About page' 
        imgsrc={Abimg}  
        visit='/contact' 
        btname ='Contact Now'/>
        </>
    )
}

export default About;