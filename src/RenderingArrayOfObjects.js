const users = [
  {
    id: 1,
    name: "John Doe",
    email: "email@gmail.com",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "email@yahoo.com",
  },
  {
    id: 3,
    name: "John Smith",
    email: "email@outlook.com",
  },
];

const RenderingArrayOfObject = () => {
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default RenderingArrayOfObject;
