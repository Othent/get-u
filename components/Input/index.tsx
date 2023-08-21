import { DMSans700 } from '../../utils/fonts';
import styled from 'styled-components';

const button_theme = "35, 117, 239";
const button_active = "28, 94, 191";


const Input = styled.input<Props>`
  cursor: pointer;
  padding: 12px 16px;
  width: auto;
  border-radius: 8px;
  border: 2px solid rgba(${button_theme}, 0);
  font-size: 1rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  gap: .8rem;
  ${DMSans700.style}

  color: rgb(255, 255, 255);
  background: rgb(${button_theme});
  transition: all .23s ease-in-out;

  &:hover {
    background: rgba(${button_theme}, .8);
    border-color: #f2f2f2;
    color: rgba(${button_theme}, .8);
  }

  &:active {
    background: rgba(${button_active}, 1);
    border-color: rgba(${`${button_active}, 1`});
    color: rgba(${button_active}, 1);
  }

  @media (min-width: 550px) {
    padding: 12px 1rem;
  }
`;


interface Props {
    secondary?: boolean;
    fullWidth?: boolean;
  }

export default Input;
