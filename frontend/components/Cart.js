import CartStyles from './styles/CartStyles';
import CloseButton from './styles/CloseButton';
import Supreme from './styles/Supreme';
import { useUser } from './User';
import CartItem from './CartItem';
import formatMoney from '../lib/formatMoney';
import calcTotalPrice from '../lib/calcTotalPrice';
import { useCart } from '../lib/cartState';
import { Checkout } from './Checkout';

export default function Cart() {
  const user = useUser();
  const { cartOpen, closeCart } = useCart();

  if (!user) return null;

  return (
    <CartStyles open={cartOpen}>
      <header>
        <Supreme>{user.name}'s Cart</Supreme>
        <CloseButton onClick={closeCart}>&times;</CloseButton>
      </header>
      <ul>
        {user.cart.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </ul>
      <footer>
        <p>{formatMoney(calcTotalPrice(user.cart))}</p>
        <Checkout />
      </footer>
    </CartStyles>
  );
}
