import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import AppRouter from "./router/AppRouter";
const GlobalStyle = createGlobalStyle`
  ${reset}
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <AppRouter />
    </>
  );
}

export default App;
