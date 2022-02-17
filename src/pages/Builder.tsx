import React from 'react';
import PageContainer from '../components/Containers';
import BuilderForm from '../components/BuilderForm';

function Builder() {
  return (
    <PageContainer style={{ background: "url('/wave.svg') no-repeat bottom center", backgroundSize: 'cover' }}>
      <BuilderForm />
    </PageContainer>
  );
}

export default Builder;
