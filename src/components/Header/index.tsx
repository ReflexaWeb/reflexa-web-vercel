import React from "react";
import {Link} from 'react-router-dom';

import logoImg from '../../assets/images/logo-reflexa.png'
import faceImg from '../../assets/images/facebook.png'
import instaImg from '../../assets/images/instagram.png'

import { Topo,Redes, Barra, Menu } from './styles'

export function Header() {
  
  return (
    <>
      <Topo>
      <a href="/">
        <img src={logoImg} alt="Reflexa Comercial de Manufaturados" />
      </a>
      <Redes>
        <a href="https://pt-br.facebook.com/reflexaembalagens/">
          <img src={faceImg} alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/reflexaembalagens/">
          <img src={instaImg} alt="Instagram" />
        </a>
      </Redes>
      </Topo>
      <Barra />
      <Menu>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/contato">Contato</Link></li>
        </ul>
      </Menu>
    </>
  )
}
