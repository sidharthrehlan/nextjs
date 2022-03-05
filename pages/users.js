function Users(props) {
  const users = props.users;
  console.log(users);
  return (
    <>
      <h1>User page</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}
export default Users;

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  console.log(data);
  return {
    props: { users: data },
  };
}
