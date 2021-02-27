import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import styled from 'styled-components';

const HomePage = () => {
  return (<Wrapper>
    <Jumbotron>
      <Container>
        <h1>Welcome!</h1>
        <p>A diary is a place where you record events, experiences and other personal things that interest you. You can write about whatever you like, free of outside judgment or criticism. It should be an extension of your mind: safe and free. A diary can be whatever you decide and should be a place where you can be honest.</p>
        <p>Why did i choose to design this app ? My father is a very disciplined man who strictly follows his routine each day without fail. His first action every morning is to write in his diary of all the events he performed the previous day and note down any upcoming events. As a child i always got inspired by his discipline. Now, i finally got a chance to gift him this online diary!</p>
        <p>Technologies used to design this diary are: React Bootstrap, React, Java/Springboot, Postgres</p>
        <p>How to use it ? Just use and see !!</p>
      </Container>
    </Jumbotron>
  </Wrapper>
  );
};

const Wrapper = styled.div `
h1{
  color:rgb(91, 2, 84);
  background-color:pink;
}
`;
export default HomePage;
