import { useUser } from './User';
import Login from './Login';

export default function ({ children }) {
  const user = useUser();
  if (!user) return <Login />;
  return children;
}
