import React from "react";

import { Rodape } from './styles'

export function Footer() {
  return (
    <Rodape>
      <p>Segunda a sexta das 8:00 as 18:00 - Sábado Não abrimos </p>
      <p className="whats">Whatsapp: <a href="https://api.whatsapp.com/send?phone=5541999099627&text=Bem-Vindo%20ao%20nosso%20WhatsApp%20Reflexa%20Embalagens">(41) 99909 - 9627 </a>  |  <a href="https://api.whatsapp.com/send?phone=5541996739627&text=Bem-vindo%20ao%20nosso%20WhatsApp%20Reflexa%20Embalagens">(41) 99673 -9627</a></p>
      <p>Reflexa Embalagens | Comércio de Embalagens em Curitiba | Todos os direitos reservados</p>
      <p>Atendemos CURITIBA  |  REGIAO METROPOLITANA MEDIANTE CONSULTA</p>
    </Rodape>
  )
}
