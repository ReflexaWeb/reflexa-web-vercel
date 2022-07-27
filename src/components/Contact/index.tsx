import React from "react";
import { BsFillPinMapFill, BsWhatsapp  } from "react-icons/bs";

import { Section, Container, About, Title, Endereco, Whatsapp } from './styles'

export function Contact() {
  return (
    <>
      <Section>
        <Container>
          <About>
            <Title>Contato</Title>
            <Whatsapp>
              <p><span><BsWhatsapp /> Whatsapp:</span> <a href="https://api.whatsapp.com/send?phone=5541999099627&text=Bem-vindo(a)%20a%20Reflexa%20Embalagens!"> 99909-9627 </a></p>
            </Whatsapp>
              <Endereco>
              <p><span>Endereço:</span> R. José Casagrande, 42 - Vista Alegre, Curitiba - PR</p>
              <a href="https://www.google.com/maps/place/Reflexa+Embalagens/@-25.4151012,-49.3010911,15z/data=!4m5!3m4!1s0x0:0x9eae8d4d6df6e7c8!8m2!3d-25.4151013!4d-49.3010913">
                <BsFillPinMapFill /> Como chegar
              </a>
            </Endereco>
          </About>
        </Container>
      </Section>
    </>
  );
}