import { useParams } from "react-router-dom";

const UserDetails = ({ users = [] }) => {
  const { id } = useParams();
  const user = users.find((u) => u.id === parseInt(id));

  if (!user) return <p>User not found</p>;

  return (
    <div className="page">
      <h1>{user.first_name} {user.last_name}</h1>
      <img src={user.avatar} alt={user.first_name} />
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserDetails;
