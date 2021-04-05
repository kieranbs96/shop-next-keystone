import styled from 'styled-components';
import RequestReset from '../components/RequestReset';
import Login from '../components/Login';
import SignUp from '../components/SignUp';

const GridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
`;

export default function LoginPage() {
  return (
    <GridStyles>
      <Login />
      <SignUp />
      <RequestReset />
    </GridStyles>
  );
}
