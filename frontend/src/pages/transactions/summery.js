import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";

import { getTransactions } from "../../services/transactions";

const TransactionStyled = styled.div`
  padding: 20px;
  background-color: #888888;
`;

const TransactionDiv = styled.div`
  padding: 20px;
  margin: 10px;
  background-color: #aaaaaa;
`;

const TransactionSummery = () => {
  const [transactions, setTransactions] = useState(null);

  //   useEffect(async () => {
  //     const data = await getTransactions();
  //     const dataBelongToUser = data.filter((each) => each.id === 8);
  //     setTransactions(dataBelongToUser);
  //     // console.log("after set", transactions);
  //   }, []);

  return (
    <TransactionStyled>
      {transactions === null ? (
        <div style={{ backgroundColor: "#ff0000" }}> no transaction </div>
      ) : (
        <div>
          {transactions === undefined
            ? null
            : transactions.map((each) => (
                <TransactionDiv className="container">
                  <div className="id">{`ID:${each.id}`}</div>
                  <div>
                    <div className="result1">{`amount:${each.amount}`}</div>
                    <div className="result2">{`description:${each.description}`}</div>
                    <div className="result3">{`is_expense:${each.is_expense}`}</div>
                    <div className="result4">{`user:${each.owner_name}`}</div>
                    <div className="result5">{`category:${each.category_name}`}</div>
                  </div>
                </TransactionDiv>
              ))}
        </div>
      )}
    </TransactionStyled>
  );
};

export default TransactionSummery;
