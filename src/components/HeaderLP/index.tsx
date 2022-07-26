import React from "react";

import logoImg from '../../assets/images/logo-reflexa.png'
import faceImg from '../../assets/images/facebook.png'
import instaImg from '../../assets/images/instagram.png'

import { Topo,Redes, Barra } from './styles'

export function HeaderLP() {
  
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
    </>
  )
}
