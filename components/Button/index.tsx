import { DMSans700 } from '../../utils/fonts';
import styled from 'styled-components';

const button_theme = "35, 117, 239";
const button_active = "28, 94, 191";

const Button = styled.a<Props>`
  cursor: pointer;
  padding: 12px ${props => props.fullWidth ? "0" : "16px"};
  width: ${props => props.fullWidth ? "calc(100% - 2px * 2)" : "auto"};
  border-radius: 8px;
  border: 2px solid rgba(${button_theme}, ${props => props.secondary ? "1" : 0});
  font-size: 1rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  gap: .8rem;
  ${DMSans700.style}

  color: rgb(${props => props.secondary ? button_theme : "255, 255, 255"});
  background: ${props => props.secondary ? "#f2f2f2" : `rgb(${button_theme})`};
  transition: all .23s ease-in-out;

  &:hover {
    background: ${props => props.secondary ? "#f2f2f2" : `rgba(${button_theme}, .8)`};
    border-color: ${props => props.secondary ?  `rgba(${button_theme}, .8)` : "#f2f2f2"};
    color: rgba(${(props) => (props.secondary ? `${button_theme}, .8` : '255, 255, 255, 1')});
  }

  &:active {
    background: ${(props) => (props.secondary ? '#f2f2f2' : `rgba(${button_active}, 1)`)};
    border-color: rgba(${`${button_active}, 1`});
    color: rgba(${(props) => (props.secondary ? `${button_active}, 1` : '255, 255, 255, 1')});
  }

  @media (min-width: 550px) {
    padding: 12px 1rem;
  }

  img {
    width: 15px;
    height: 15px;
  }
`;

interface Props {
  secondary?: boolean;
  fullWidth?: boolean;
}



export default Button;

