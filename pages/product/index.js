import Link from 'next/link';
function Product() {
  return (
    <>
      <h1>Product page</h1>
      <Link href='product/1'>Products 1</Link>
      <br />
      <Link href='product/2'>Products 2</Link>
    </>
  );
}
export default Product;
