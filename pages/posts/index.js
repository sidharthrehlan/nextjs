import Link from 'next/link';
function Posts({ posts }) {
  console.log(posts);
  return (
    <>
      <h1>Posts</h1>
      {posts.map((post) => {
        return (
          <li>
            <Link key={post.id} href={`posts/${post.id}`}>
              {post.title}
            </Link>
          </li>
        );
      })}
    </>
  );
}

export default Posts;

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return {
    props: {
      posts: data,
    },
  };
}
