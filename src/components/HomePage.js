import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import styled from 'styled-components';

const HomePage = () => {
  return (<Wrapper>
    <Jumbotron>
      <Container>
        <h1>Welcome!</h1>
        <p>A diary is a place where you record events, experiences, and other personal things that interest you. You can write about whatever you like, free of outside judgment or criticism. It should be an extension of your mind: safe and free. A diary can be whatever you decide and should be a place where you can be honest.</p>
        <p>Why did i choose to design this app ? My father is a very disciplined man who strictly follows his routine each day without fail. His first action of the day is to write all of the experiences from the previous day, in his diary. As a child I was fascinated by his punctuality in performing this task and wanted to help him go green. Now, I finally got a chance to gift him this online diary!</p>
        <p>Technologies used to design this diary are: React Bootstrap, React, Java/Springboot, Postgres</p>
        <p>How to use it ? Just use and see !!</p>
      </Container>
    </Jumbotron>
  </Wrapper>
  );
};

const Wrapper = styled.div `
.jumbotron{
    background: #b1f522;
    text-align:center;
}
h1{
  text-align: center;
      color: rgb(82, 20, 20);
      font-size: 40px;
      text-underline-offset: 0.3em;
      text-shadow: white 2px 2px;
}
p{
  color:black;
  text-align:center;
  font-family: 'Quantico';
}
`;
export default HomePage;
