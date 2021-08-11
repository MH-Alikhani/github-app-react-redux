// import components
import UserItems from "./UserItems";
import Spinner from "../layouts/Spinner.jsx";

// import redux
import { useSelector } from "react-redux";

const Users = () => {
  // use redux
  const { users, loading } = useSelector((state) => state.users);

  if (loading) return <Spinner />;
  else {
    return (
      <main>
        {users.map((user) => (
          <UserItems key={user.id} user={user} />
        ))}
      </main>
    );
  }
};

export default Users;
