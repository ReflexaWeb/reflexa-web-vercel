import styled from "styled-components";

export const Section = styled.section`
  background: #f1f1f1;
`

export const Container = styled.div`
  display: flex;
  max-width: 1100px;
  margin: 0 auto;
  flex-direction: column;
  padding:50px 0 50px 0;

  .descDetailProduct{
    h2{
      color: #0063b4;
      font-size: 40px;
      font-weight: 600;
      line-height: 50px;
      margin-bottom: 45px;
      margin-top:100px;
      text-align: center;
      @media(max-width: 600px) {
        font-size: 30px;
        line-height: 40px;
      }
    }

    p{
      display: block;
      font-size: 22px;
      line-height:32px;
      margin-bottom: 100px;

      strong{
        font-weight: 600;
      }
    }

    a{
      background:  #FFC801;
      border-radius: 11px;
      color: #0063b4;
      display: block;
      font-size: 24px;
      font-weight: 600;
      padding-top: 12px;
      width: 415px;
      padding: 30px;
      margin:auto;
      text-align: center;
      text-decoration: none;
      text-transform: uppercase;
    }

    @media(max-width: 600px) {
      padding: 20px;
    }
  }

  span{
      display: block;
      font-size:10px;
      margin-top: 80px;
      text-align: right;
    }

  @media(max-width: 600px) {
    flex-direction: column;
    max-width:100%;
  }
`