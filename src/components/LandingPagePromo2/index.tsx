import React from "react";

import { Section, Container } from './styles';

import BannerPromocao2 from '../../assets/images/Promocao2-sempreco.png';


export function LandingPagePromo2() {
  
  return (
    <>
        <Section>
          <Container>
            <img src={BannerPromocao2} alt="Saco de Lixo 150 Litros" />

            <div className="descDetailProduct">
              <h2>LIXO PRETO 150 L ECONOMICO - 12 micra</h2>
              <p> 
              Medida 90 x 100 x com 12 micas espessura, indicado para uso Doméstico, Condomínios, Restaurantes, Hotéis, Comercio em Geral, composto com material reciclado contribuído com Meio Ambiente, de acordo com as normas de legislação em vigor. Possui ótima resistência mecânica. As Embalagens vêm embalado em fardos contendo 100 unidades.
              </p>
              <a href="https://api.whatsapp.com/send?phone=5541996739627&text=Reflexa%20Embalagens%20-%20Or%C3%A7ar%20Saco%20Lixo150L" rel="noreferrer" target="_blank"> Faça seu orçamento</a>
            </div>
            <span>
              *Promoção Válida 26/07/2022 a 31/07/2022 ou enquanto durarem estoque. <br/>
              *Atende CURITIBA *** REGIAO METROPOLITANTE MEDIANTE CONSULTA
            </span>
          </Container>
        </Section>
    </>
  )
}
