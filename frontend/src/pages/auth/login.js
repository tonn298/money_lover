//TODOS add REDUX

// lib
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

// services
import { loginUser } from "../../services/authentication";

const LoginStyled = styled.div`
  background-color: #aaaaaa;
  .loginForm {
    margin-top: 2px;
  }
`;

const LogOutStyled = styled.div`
  background-color: #aaaaaa;
  padding: 12px;
`;

const Login = () => {
  const [token, setToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);

  const [isClcikLogIn, setIsClcikLogIn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    // console.log("data", data);
    const response = await loginUser(data);
    // console.log("see reponse:", response);
    setStateToken(response);
  };

  const handleLogout = () => {
    // console.log("handle log out :  ", refreshToken);
    logout(refreshToken);
  };
  const logout = (refreshToken) => {
    const body = { refresh_token: refreshToken };
    console.log("actual log out", body);
    setIsLoggedIn(false);
    // all this make it one
    setIsClcikLogIn(false);
    setToken(null);
    setRefreshToken(null);
  };

  const setStateToken = (res) => {
    setToken(res.access);
    setRefreshToken(res.refresh);
    setIsClcikLogIn(true);
  };

  useEffect(() => {
    console.log("useEffectRun +1 from is Clcik logged in");
    if (token !== null && refreshToken !== null) {
      console.log("User have log in");
      setIsLoggedIn(true);
      return;
    }
    return console.log("not logged in yet// logout");
  }, [isClcikLogIn]);

  return isLoggedIn ? (
    <LogOutStyled>
      you have logged in
      <br />
      <button onClick={() => handleLogout()}>Log out ? </button>
    </LogOutStyled>
  ) : (
    <LoginStyled>
      <Grid className="loginForm" textAlign="center" verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="black" textAlign="center">
            Log-in to your account
          </Header>
          <Form size="large" onSubmit={handleSubmit(onSubmit)}>
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Username"
                {...register("username")}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                {...register("password")}
              />

              <Button
                color="black"
                fluid
                size="large"
                // onClick={(e) => login(e)}
              >
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            <Link to="/sign-up">Sign Up</Link>
          </Message>
        </Grid.Column>
      </Grid>
      <div>tester_owner_transactions</div>
      <div>tony1150</div>
    </LoginStyled>
  );
};

export default Login;
