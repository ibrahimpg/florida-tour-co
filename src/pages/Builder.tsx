import React from 'react';
import { Layout, Container } from '../components/Containers';
import BuilderForm from '../components/BuilderForm';

function Builder() {
  return (
    <Layout>
      <Container>
        <BuilderForm />
      </Container>
    </Layout>
  );
}

export default Builder;
