import { useRouter } from 'next/router';

function ProductDetail() {
  const route = useRouter();
  const productId = route.query.productId;

  return <h1>ProductDetail page - {productId}</h1>;
}
export default ProductDetail;
