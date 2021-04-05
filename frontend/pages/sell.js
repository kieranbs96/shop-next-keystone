import CreateProduct from '../components/CreateProduct';
import PleaseLogin from '../components/PleaseLogin';

export default function SellPage() {
  return (
    <div>
      <PleaseLogin>
        <CreateProduct />
      </PleaseLogin>
    </div>
  );
}
