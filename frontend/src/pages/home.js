import React from "react";
import styled from "styled-components";

import TransactionSummery from "./transactions/summery";

const HomeStyled = styled.div`
  background-color: #aaaaaa;
`;

const Home = () => {
  return (
    <HomeStyled>
      <TransactionSummery />
    </HomeStyled>
  );
};

export default Home;
