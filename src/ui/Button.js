import styled from 'styled-components';

const Button = styled.button`
  padding: 15px 50px;
  border: none;
  text-decoration: none;
  font-family: 'Gochi Hand', cursive;
  font-size: 30px;
  color: #494a4b;
  padding-bottom: 3px;
  border-radius: 5px;
  box-shadow: 0 2px 0 #494a4b;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  background-color: rgba(0, 255, 196, 0.7);
  outline: transparent;
  cursor: pointer;
  opacity: 0.8;

  &:active {
    transform: translateY(4px);
    padding-bottom: 0px;
    outline: 0;
  }

  &:hover {
    opacity: 1;
  }
`;
export default Button;
