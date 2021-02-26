import React from 'react';
import styled from 'styled-components';

/* This component is mainly used as Homepage
   This component uses styled-components for styling (see const Wrapper below)*/

function Homepage() {
  return (<Wrapper>
    <p>"My Personal Diary!"</p>
    <section>

      <h2>Hello</h2>
    </section>
  </Wrapper>);
};
const Wrapper = styled.div `
  min-height: calc(91vh - 55px);
  background-image: url('https://cdn.wallpapersafari.com/58/31/e2DOgl.png');
  padding: 20px;
  p {
    text-align: center;
    color: #fff;
    font-size: 40px;
    text-decoration: underline overline wavy black;
    text-underline-offset: 0.3em;
    text-shadow: black 2px 2px;
  }

  img {
    position: absolute;
    margin-top: -30px;
  }

  h2, h3 {
    color:black;
    position: relative;
    left: 40%;
    width: 60%;
    font-family: 'Quantico';
  }

  span {
    color:white;
  }

  section {
    color: #fff;
  }
`;
export default Homepage;
