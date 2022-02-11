import React from "react";
import './Home.css';
import { Company } from '../Company/Company';
import { Buy } from '../Buy/Buy';
import { Contact } from '../Contact/Contact';

export const Home = () => {
    return (
        <>
        <div className="home">     
            <img className="home__image" src="https://drive.google.com/uc?export=download&id=1BW7TNbTeDPBNNTerEOqme6jfM41kMW8m"/>
            <h1 className="home__title"> Helados caseros</h1>
            <p className="home__text">¿Piensas que lo has probado todo?<b><br/>¡Debes conocer Helados Kremig!</b></p>
        </div>
        <Company/>
        <Buy/>
        <Contact/>
        </>
    )
};

