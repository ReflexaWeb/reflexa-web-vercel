import styled from "styled-components";

export const Section = styled.section`
  background: #f1f1f1;
`

export const Container = styled.div`
  display: flex;
  max-width: 1100px;
  margin: 0 auto;
  flex-direction: column;
  padding:0 0 50px 0;

  .headline{
    h1{
      color: #0063b4;
      font-size: 50px;
      font-weight: 600;
      line-height: 50px;
      margin-bottom: 45px;
      margin-top:40px;
      text-align: center;
      @media(max-width: 600px) {
        font-size: 30px;
        line-height: 40px;
      }
    }
    h2{
      color: #4D4D4D;
      font-size: 40px;
      font-weight: 600;
      line-height: 50px;
      margin-bottom: 30px;
      text-align: center;
      @media(max-width: 600px) {
        font-size: 30px;
        line-height: 40px;
      }
    }

    a{
      background: #32CD32;
      border-radius: 11px;
      color: #fff;
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
  }

  @media(max-width: 600px) {
      .headline{
        a{
          padding: 20px;
          width:100% ;
        }
      }
    }

  .descDetailProduct{
    h2{
      color: #0063b4;
      font-size: 25px;
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

      @media(max-width: 600px) {
        text-align:center;
        font-size:16px;
        margin-bottom: 40px;
      }
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