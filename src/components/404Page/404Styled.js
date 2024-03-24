import styled from "styled-components";


export const ErrorPageStyled = styled.div`
    min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url("../../assets/images/Page404/banner-404.png");
  background-size: 100% 100%;
  background-color: #161b4a;

  @media (max-width: 43.75em) {
    padding-left: 2.4rem;
    padding-right: 2.4rem;
    background-image: url("../../assets/images/Page404/banner-404-mobile.png");
  }

  .KMNMCQQJOL {
    color: #fff;
    text-align: center;
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -1.16px;
    max-width: 63.5rem;
    margin-top: 6.3rem;
    position: relative;
    left: 3rem;

    @media (max-width: 43.75em) {
      margin-top: 3.3rem;
      left: 0;
      max-width: 100%;
    }
  }
  .ABKSLGRQKQ {
    padding-top: 4rem;
    display: flex;
    justify-content: center;
    .AOASNUNQIR {
      max-width: 71.3rem;
      img {
        padding: 1.5rem;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .OLTZOHUJTR {
    margin-top: 6rem;
    button {
      cursor: pointer;
      color: #003003;
      font-family: Montserrat;
      font-size: 3.6rem;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: -1.44px;
      border-radius: 10px;
      border: 2px solid #002903;
      width: 44.4rem;
      height: 7.4rem;
      text-transform: uppercase;

      @media (max-width: 43.75em) {
        width: 24.4rem;
        font-size: 2rem;
      }

      &:hover {
        opacity: 0.8;
      }
    }
  }
  .VDFKHCXTLJ {
    margin-top: 2.4rem;

    @media (max-width: 43.75em) {
      width: 100%;
    }
  }
`;