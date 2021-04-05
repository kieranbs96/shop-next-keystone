import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';

const LOGOUT_MUTATION = gql`
  mutation LOGOUT_MUTATION {
    endSession
  }
`;

export default function Logout({ children }) {
  const [logout] = useMutation(LOGOUT_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  return (
    <button type="button" onClick={logout}>
      {children}
    </button>
  );
}
