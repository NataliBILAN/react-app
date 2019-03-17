import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const baseStyle = createGlobalStyle`
${reset}
body {
  background-color: #660066;
  font-family: 'Gochi Hand', cursive;
  font-size: 20px;
  padding:20px;
  color:#494a4b;
}
a {
    text-decoration: none;
}
`;

export default baseStyle;
