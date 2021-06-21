import Home from "./pages/home";
import styled from "styled-components";

const AppStyled = styled.div`
  /* TODOS make this a desktop view later */
  background-color: #111111;
  padding: 12px;
`;

const App = () => {
  return (
    <AppStyled>
      <Home></Home>
    </AppStyled>
  );
};

export default App;
