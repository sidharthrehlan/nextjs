import { useRouter } from 'next/router';

function Docs() {
  const route = useRouter();

  const params = route.query.param || [];
  if (params.length === 1) {
    return <h1>docs - documentid : {params[0]}</h1>;
  } else if (params.length === 2) {
    return (
      <h1>
        docs - documentid : {params[0]} and content id : {params[2]}
      </h1>
    );
  }
  return <h1>docs</h1>;
}
export default Docs;
