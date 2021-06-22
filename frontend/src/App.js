import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/auth/login";
import Navbar from "./components/Navbar";
import AddTransaction from "./pages/transactions/addTransaction";
import SignUp from "./pages/auth/signUp";

const AppStyled = styled.div`
  /* TODOS make this a desktop view later */
  background-color: #111111;
  padding: 12px;
`;

const App = () => {
  // use router link
  return (
    <Router>
      <Navbar />
      <AppStyled>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/add">
            <AddTransaction />
          </Route>
          <Route exact path="/sign-up">
            <SignUp />
          </Route>
        </Switch>
      </AppStyled>
    </Router>
  );
};

export default App;
