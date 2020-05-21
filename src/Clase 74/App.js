import React from "react";
import Icon from "./components/Icon/Icon";
import Button from "./components/Button/Button";
import Tag from "./components/Tag/Tag";
import Title from "./components/Title/Title";
import Text from "./components/Text/Text";
import Flex from "./components/Flex/Flex";

const App = () => {
  return (
    <div className="App">
      <Flex direction="vertical">
        <Icon name={"heart"} color="error" size="xs" />
        <Icon name={"home"} color="success" size="l" />
        <Icon name={"arrow"} color="info" size="md" />
        <Icon name={"react"} color="primary" size="xl" />
      </Flex>
      <Flex>
        <Button
          text="Enviar"
          variant="info"
          iconLeft={<Icon name={"heart"} color="error" size="xs" />}
        />
        <Button
          text="Enviar"
          variant="error"
          rounded="l"
          iconRight={<Icon name={"arrow"} color="info" size="md" />}
        />
        <Button text="Enviar" variant="success" />
        <Button text="Enviar" variant="default" rounded="md" />
        <Button text="Enviar" variant="primary" rounded="s" />
      </Flex>
      <Flex>
        <Tag>Hola hola</Tag>
        <Tag color="error" rounded="md">
          Hola hola
        </Tag>
      </Flex>
      <Flex direction="vertical">
        <Title as="h1">Soy un H1</Title>
        <Title as="h3" align="center">
          Soy un H3
        </Title>
        <Text color="error">Soy un texto rojo</Text>
        <Text align="center">Soy un texto alineado en el centro</Text>
        <Title as="h4">Soy un H4</Title>
        <Title align="right">Soy un H2</Title>
        <Text align="right" size="xl">
          Yo estoy alineado a la derecha y soy grande
        </Text>
      </Flex>
    </div>
  );
};

export default App;
