import React from 'react';

import { Container, Item, Title } from './styles';

interface Props {
  title: string;
  elements: React.ReactNode[];
}

const LIst: React.FC<Props> = ({ title, elements }) => {
  return (
    <Container>
      <Item>
        <Title>Tavez você curta!</Title>
      </Item>

      {elements.map((elements, index) => (
        <Item key={index}>{elements}</Item>
      ))}
    </Container>
  );
};

export default LIst;
