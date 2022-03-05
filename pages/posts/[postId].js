import { useRouter } from 'next/router';

function Post({ post }) {
  const router = useRouter();

  const postId = router.query.postId;

  return (
    <>
      <h1>Post # {post.id} </h1>
      Title {post.title}
    </>
  );
}
export default Post;

export async function getStaticPaths() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  const paths = data.map((post) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const params = context.params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();
  return {
    props: {
      post: data,
    },
  };
}
