import styled from "styled-components";

export const Topo = styled.header`
  max-width: 1100px;
  margin: 0 auto;
  padding: 30px 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media(max-width: 600px) {
    flex-direction: column;
    max-width:100%;
  }
`;

export const Redes = styled.div`
  display: flex;

  > a{
    margin-left: 10px;
  }
  @media(max-width: 600px) {
    padding: 20px 0;
  }
`

export const Form = styled.form`
  width: 530px;
  display: flex;

  input{
    border: none;
    background-color: #e7e7e7;
    border-radius: 11px;
    flex:1;
    height: 37px;
    padding: 0 10px;
    margin-right: 4px;
    
    &:focus{
      outline: 0;
    }

  }
  button{
    border:none;
    border-radius: 11px;
    background: #0063b4;
    color:#fff;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    width: 110px;
    height: 37px;
     
   } 

   @media(max-width: 600px) {
    flex-direction: column;
    max-width:100%;
    padding: 20px 0;

    input{
      display: block;
      width: 300px;
      height: 40px;
      padding: 10px;
      margin: 0 auto;
    }

    button{
      display: block;
      margin: 0 auto;
      margin-top:25px;
    }
  }
`

export const Barra = styled.div`
  border-top: 1px solid #2160B0;
`

export const Menu = styled.div`
padding:53px 0;
border-bottom: 1px solid #2160B0;

  display:flex;
  justify-content: center;
  align-items: center;
  

  ul{
    display: flex;
    li{
      list-style-type: none;
      padding-right:120px;
      a{
        color: #2160B0;
        cursor: pointer;
        font-size: 20px;
        font-weight: 700;
        text-decoration: none;
      }
      &:lastchild {
        padding-right:0;
      }
    }
  }
`