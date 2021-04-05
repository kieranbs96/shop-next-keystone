import Link from 'next/link';
import NavStyles from './styles/NavStyles';
import { useUser } from './User';
import Logout from './Logout';
import CartCount from './CartCount';
import { useCart } from '../lib/cartState';

export default function Nav() {
  const user = useUser();
  const { openCart } = useCart();

  return (
    <NavStyles>
      <Link href="/products">Products</Link>
      {user && (
        <>
          <Link href="/sell">Sell</Link>
          <Link href="/orders">Orders</Link>
          {/* <Link href="/account">Account</Link> */}
          <Logout>Logout</Logout>
          <button type="button" onClick={openCart}>
            My Cart{' '}
            <CartCount
              count={user.cart.reduce(
                (tally, cartItem) =>
                  tally + (cartItem.product ? cartItem.quantity : 0),
                0
              )}
            />
          </button>
        </>
      )}
      {!user && (
        <>
          <Link href="/login">Login</Link>
        </>
      )}
    </NavStyles>
  );
}
