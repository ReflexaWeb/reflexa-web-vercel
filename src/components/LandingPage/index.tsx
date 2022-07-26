import React from "react";

import { Section, Container } from './styles';

import BannerPromocao1 from '../../assets/images/Promocao1-sempreco.png';


export function LandingPage() {
  
  return (
    <>
        <Section>
          <Container>
            <img src={BannerPromocao1} alt="Saco de Lixo 100 Litros" />

            <div className="headline">
              <h1>No Tamanho Ideal para Sua necessidade!</h1>
              <h2>Aproveite a oportunidade!</h2>
              <a href="https://api.whatsapp.com/send?phone=5541996739627&text=Reflexa%20Embalagens%20-%20Or%C3%A7ar%20Saco%20Lixo100L" rel="noreferrer" target="_blank"> Faça seu orçamento</a>
            </div>

            <div className="descDetailProduct">
              <h2>LIXO PRETO 100 L ECONOMICO - 12 micra</h2>
              <p> 
              Na Medida 75 x 85 com 12 micas espessura, indicado para uso Doméstico, Condomínio, Restaurantes, Hotéis, Comercio em Geral, composto com material reciclado contribuído com Meio Ambiente, de acordo com as normas de legislação em vigor. Possui ótima resistência mecânica. As Embalagens vêm embalado em fardos contendo 100 unidades.
              </p>
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
