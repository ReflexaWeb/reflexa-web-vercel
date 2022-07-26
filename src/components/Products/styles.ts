import styled from "styled-components";


export const Section = styled.section`
  background: #fff;
`

export const Container = styled.div`
  display: flex;
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 0;

  select{
    border-radius: 5px;
    border:none;
    background-color: #0063b4;
    width: 216px;
    height: 40px;
    color:#fff;
    font-size: 18px;
    padding: 10px;
  }

  @media(max-width: 600px) {
    flex-direction: column;
    max-width:100%;
    select {
      width:90%;
      margin: 0 20px;
    }
  }
`

export const Title = styled.div`
  background:#FEB712 ;
  padding:20px 0;
  width: 100%;
  display: block;

  h2{
  color:#fff;
  font-family: OpenSans;
  font-size: 32px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  text-shadow: 3px 3px 4px rgba(0, 0, 0, 0.25);
  width: 100%;

    @media(max-width: 600px) {
      text-align:center;
    }
  }
`

export const Produtos = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  .card{
    background: #f1f1f1;
    border-radius: 10px;
    display: block;
    max-width: 256px;
    padding: 30px 25px;
    margin-bottom: 60px;
    margin-right: 25px;
    text-decoration: none;

    &:nth-child( 4n ){
      margin-right: 0;
    }

    p{
      color: #0063b4;
      font-size: 18px;
      font-weight: 600;
      font-family: "Open-sans", sans-serif;
      line-height: 24px;
      padding-top: 35px;
      padding-bottom:20px;
      text-align: center;
    }

    span{
      color: #404347;
      display: block;
      font-size: 16px;
      margin-top: 15px;
      text-align:center;

      &.obs{
        color: #000000;
        font-size:12px;
        margin-top:15px;
      }
    }

    img{
      height: 200px;
      width: 200px;
      object-fit: cover;
    }

    @media(max-width: 600px) {
     max-width:100%;
     margin:20px;
      &:nth-child( 4n ){
        margin-right: 20px;
      }
      img{
        width:100% !important;
      }
    }

    a{
      background: #0063b4;
      border-radius: 11px;
      color: #fff;
      display: block;
      font-size: 16px;
      font-weight: 600;
      padding-top: 12px;
      width: 100%;
      height: 44px;
      margin-top: 25px;
      margin-bottom:35px;
      text-align: center;
      text-decoration: none;
      text-transform: uppercase;
    }
  }
`