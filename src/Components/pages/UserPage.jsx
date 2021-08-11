// import router-dom & hooks
import { Link } from "react-router-dom";
import { useEffect } from "react";

// import css styles
import "./user-page.css";

// import redux
import { useDispatch, useSelector } from "react-redux";
import { getSingleUser } from "../../redux/actions/usersActions";

const UserPage = ({ match }) => {
  // use redux
  const {
    user: { avatar_url, name, location, bio, blog, html_url },
  } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  // run the getSingleUser func for making user page

  // eslint-disable-next-line
  useEffect(() => dispatch(getSingleUser(match.params.login)), []);

  return (
    <div className="profile-wrapper">
      <div className="profile">
        <Link to="/" className="back-btn">
          Back to searchs
        </Link>
        <div className="profile-pic-name">
          <img src={avatar_url} alt={name} />
          <h2 className="name">Name: {name}</h2>
          {location && <h2 className="location">Location: {location}</h2>}
        </div>
        <div className="bio-blog">
          {bio && <p className="bio">Bio: {bio}</p>}
          {blog && <address className="blog">Blog: {blog}</address>}
          <a
            className="github-page"
            href={html_url}
            target="_blank"
            rel="noreferrer"
          >
            Github page
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
