import styled from 'styled-components';

const Layout = styled.div`
  background: url('/wave.svg') no-repeat bottom center;
  background-size: cover;
  display: flex;
  justify-content: center;
  min-height: 90vh;
`;

const Container = styled.div`
  background: url('/poly.svg') no-repeat bottom center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px;
  padding: 40px;
  width: 100%;
  border-radius: 20px;
`;

export { Layout, Container };
