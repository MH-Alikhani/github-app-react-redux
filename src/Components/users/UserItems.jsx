//import styles
import "./userItems.css";

// import link from router-dom
import { Link } from "react-router-dom";

const UserItems = ({ user: { avatar_url, login } }) => {
  return (
    <div className="user-card">
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      <Link to={`/user/${login}`} className="more-btn">
        more
      </Link>
    </div>
  );
};

export default UserItems;
