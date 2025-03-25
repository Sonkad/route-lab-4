import { Link } from "react-router-dom";

const Users = ({ users = [] }) => {     //указываем значение поо умолчаниюююю
  if (users.length === 0) return <p>Loading...</p>;

  return (
    <div className="page">
      <h1>Users</h1>
      <div className="user-list">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
            <h3>{user.first_name} {user.last_name}</h3>
            <p>{user.email}</p>
            <Link to={`/user/${user.id}`}>View Profile</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
