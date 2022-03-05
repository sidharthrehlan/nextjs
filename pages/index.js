import Link from 'next/link';
import { useRouter } from 'next/router';

function Home() {
  const route = useRouter();

  const clickHandler = () => {
    route.push('/product');
  };
  return (
    <>
      <h1>Home page</h1>
      <Link href='/product'>Products</Link>
      <Link href='/users'>Users</Link>
      <input type='button' value='Go to Product' onClick={clickHandler} />
    </>
  );
}
export default Home;
