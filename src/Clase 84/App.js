import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const Title = styled.h2`
  font-size: 26px;
  color: firebrick;
`;
const Text = styled.p`
  font-size: 18px;
  color: grey;
`;

const GlobalStyle = createGlobalStyle`
body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
`;

const Image = styled.img`
  border-radius: 10px;
  width: 300px;
`;

const Card = styled.article`
  display: flex;
  flex-direction: column;
  width: 75%;
`;

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Card>
        <Title>Soy una card</Title>
        <Image src="https://images.pexels.com/photos/4586258/pexels-photo-4586258.jpeg" />
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique,
          magni nam, quasi sed repudiandae assumenda consequuntur deleniti iste
          aliquam quos velit distinctio. Fugiat autem libero omnis architecto,
          officia corporis temporibus!
        </Text>
      </Card>
    </div>
  );
};

export default App;
