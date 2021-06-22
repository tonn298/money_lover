import React from "react";
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

import { registerUser } from "../../services/authentication";

const SignUpStyled = styled.div`
  background-color: #aaaaaa;
  margin-top: 12px;
`;

const SignUp = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const response = await registerUser(data);
    console.log(response);
    window.location.href = "/login";

    // const test = data.filter((each) =>
    //   each.filter((each) => each === undefined)
    // );
    // console.log("see test", test);
  };

  return (
    <SignUpStyled>
      <Grid className="loginForm" textAlign="center" verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="black" textAlign="center">
            Sign up
          </Header>
          <Form size="large" onSubmit={handleSubmit(onSubmit)}>
            {/* <Form size="large"> */}
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
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                {...register("password_again")}
              />
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="email"
                {...register("email")}
              />
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="first_name"
                {...register("first_name")}
              />
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="last_name"
                {...register("last_name")}
              />

              <Button
                color="black"
                fluid
                size="large"
                // onClick={(e) => login(e)}
              >
                Sign up
              </Button>
            </Segment>
          </Form>
          {/* <Message>
            New to us? <Link to="/sign-up">Sign Up</Link>
          </Message> */}
        </Grid.Column>
      </Grid>
    </SignUpStyled>
  );
};

export default SignUp;
