import styled from "styled-components";

import barraImg from '../../assets/images/barra.jpg'

export const Rodape = styled.footer`
  background: url(${barraImg}) no-repeat;
  background-size: cover;
  min-height: 230px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p{
    color: #fff;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    padding-top: 22px;

    &.whats{
      a{
        color:#FEB712;
        font-weight: 700;
        font-size:24px;
        padding: 0 10px;
        text-decoration: none;
      }
    }
  }

  @media(max-width: 600px) {
      flex-direction:column;
      padding: 0 20px;
      p{
        font-size:13px;
        line-height:18px;
        text-align:center;
      }
  }

`