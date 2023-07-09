import styled from 'styled-components';
import Button from '../Button'
import { FeatureHeaderText, FeaturesContainer } from '../common';



export const MainWrapper = styled(FeaturesContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10vh;
  flex-direction: column;
  background-size: 40% 85%, 110% 80%;
  background-repeat: no-repeat, no-repeat;
  background-position: -15% 160%, -380% 80%;
  background-image: url('/bkg-squares.svg'), url('bkg-circles.svg');
  margin-top: 0;
`;
export const heroContainer = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;



export const getUContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 350px;
  height: fit-content;
  background-color: white;
  padding: 50px;
  border-radius: 5px;
  gap: 50px;
  border: 1px solid black;
  .u-logo {
    height: 150px;
  }
  .u-title {
    font-weight: normal;
  }
  .u-p {
    word-wrap: break-word;
    text-align: center;
    font-size: 15px;
  }
  .walletAddressLink {
    text-decoration: underline;
    color: #2375ef;
  }
`;


export const ULogo = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  height: fit-content;
  background-color: red;
`;



export const logIn = styled(Button)`
  cursor: pointer;
`;


