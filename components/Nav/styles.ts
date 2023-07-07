import styled from 'styled-components';
import Button from '../Button';

export const NavBar = styled.header`
  * {
    margin: 0;
  }

  width: 100%;
  display: flex;
  position: fixed;
  padding: 1.1rem 2rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  z-index: 999;

  @media (max-width: 720px) {
    padding: 1.1rem;
    gap: 1rem;
  }

  .site-a-warp {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

`;

export const NavLogo = styled.div`
  display: flex;
  align-items: center;

  gap: 0.6rem;

  p {
    color: #2375ef;
    font-size: 1.125rem;

    @media (min-width: 550px) {
      font-size: 1rem;
    }
  }

  .toggle {
    width: 60px;
    height: 35px;
    border-radius: 2rem;
    background: #2375ef;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    div {
      height: 33px;
      width: 33px;
      margin-right: 1px;
      border-radius: 50%;
      background: #fff;
    }

    @media (min-width: 550px) {
      width: 57px;
      height: 32px;

      div {
        width: 30px;
        height: 30px;
      }
    }
  }
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.75rem;

  ${Button} {
    padding: 8px 14px;

    @media screen and (max-width: 720px) {
      padding: 6px 14px;
    }
  }

  a {
    transition: all .23s ease-in-out;

    &:hover {
      opacity: .8;
    }
  }

  @media screen and (max-width: 720px) {
    width: 100%;
    justify-content: space-between;
  }
`;



export const UserImgContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const userImg = styled.img`
  height: 32px;
  width: 32px;
  object-fit: cover;
  border-radius: 50%;
  cursor: pointer;
`;

export const DropdownArrow = styled.img`
  margin-left: 5px;
  height: 6px;
  margin-top: 6px;

  &.rotate {
    transform: rotate(180deg);
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  top: calc(90%);
  right: 2rem;
  background-color: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  z-index: 10;
`;

export const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 16px;
  color: #333333;
  padding: 8px 20px;
  cursor: pointer;
  transition: background-color 0.23s ease-in-out;

  &:hover {
    background-color: #f5f5f5;
  }
`;





export const BlurredBody = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Popup = styled.div`
  width: 400px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid #d3e3fc;
  background: white;
  @media screen and (max-width: 600px) {
    width: 90%;
    max-width: 400px;
  }
`;

export const PopupHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
`;

export const PopupHeader = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

export const PopupCloseButton = styled(Button)`
  margin-top: auto;
`;

export const PopupBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const UserPicture = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
`;

export const UserEmail = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 0.5rem;
`;

export const UserContractIdContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserContractId = styled.p`
  font-size: 16px;
  color: #666;
  word-break: break-all;
  text-align: center;
  width: 70%;
`;

export const UserContractIdCopy = styled.img`
  height: 15px;
  margin-left: 10px;
  cursor: pointer;
`;

export const ViewTransactionsButton = styled(Button)`
  margin-top: 2rem;
`;

export const copiedPopup = styled.div`
  background-color: #2DD264;
  color: white;
  padding: 1rem;
  position: fixed;
  top: 0;
  margin-top: 5rem;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 12px;
  z-index: 9999;

  opacity: 0;
  animation: fade 1s ease-in-out;
  @keyframes fade {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  &.hidden {
    animation-direction: reverse;
    @keyframes fade {
      from { opacity: 1; }
      to { opacity: 0; }
    }
  }
`;