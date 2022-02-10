import React from "react";
import './Header.css';
import 'boxicons';
import { Link, Outlet } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <header>
        <div className="menu">
          <box-icon color="black" size="lg" name="menu"></box-icon>
        </div>
        <div className="logo">
          <img src="https://drive.google.com/uc?export=download&id=1BJl-ZWJ2M96NGV0lFWproPsIorakBNVB" alt="imglogo"/>
        </div>
        <ul>
          <li>
            <Link to='/'>Inicio</Link>
          </li>
          <li>
            <Link to='/'>Nosotros</Link>
          </li>
          <li>
            <Link to="/">Comprar</Link>
          </li>
          <li>
            <Link to="/">Contacto</Link>
          </li>
        </ul>
        <div className="cart">
          <box-icon color="black" name="cart"></box-icon>
          <span className="item_total">0</span>
        </div>
      </header>

      <div>
        <Outlet />
      </div>
    </>
  )
};