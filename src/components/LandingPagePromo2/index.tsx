import React from "react";

import { Section, Container } from './styles';

import BannerPromocao2 from '../../assets/images/Promocao2-sempreco.png';


export function LandingPagePromo2() {
  
  return (
    <>
        <Section>
          <Container>
            <img src={BannerPromocao2} alt="Saco de Lixo 150 Litros" />

            <div className="headline">
              <h1>No Tamanho Ideal para Sua necessidade!</h1>
              <h2>Aproveite a oportunidade!</h2>
              <a href="https://api.whatsapp.com/send?phone=5541999099627&text=Reflexa%20Embalagens%20-%20Or%C3%A7ar%20Saco%20Lixo100L" rel="noreferrer" target="_blank"> Faça seu orçamento</a>
            </div>

            <div className="descDetailProduct">
              <h2>LIXO PRETO 150 L ECONOMICO - 12 micra</h2>
              <p> 
              Medida 90 x 100 x com 12 micas espessura, indicado para uso Doméstico, Condomínios, Restaurantes, Hotéis, Comercio em Geral, composto com material reciclado contribuído com Meio Ambiente, de acordo com as normas de legislação em vigor. Possui ótima resistência mecânica. As Embalagens vêm embalado em fardos contendo 100 unidades.
              </p>
            </div>
            <span>
              *Promoção Válida 29/07/2022 a 05/08/2022 ou enquanto durar o estoque. <br/>
              *Atende CURITIBA *** REGIAO METROPOLITANA MEDIANTE CONSULTA
            </span>
          </Container>
        </Section>
    </>
  )
}
