//import styles
import "./search-user.css";

// import redux
import { useDispatch, useSelector } from "react-redux";
import {
  setInputValue,
  searchUsers,
  clrInput,
} from "../../redux/actions/usersActions";

const SearchUsers = () => {
  // use redux
  const { users, inputValue } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  // serach submit func
  const submitHandler = (e) => {
    e.preventDefault();
    inputValue !== "" && dispatch(searchUsers(inputValue));
  };

  return (
    <div className="search-wrapper">
      <form className="search-form" onSubmit={(e) => submitHandler(e)}>
        <button className="search-btn">
          <i className="fa fa-search search-btn"></i>
        </button>
        <input
          type="text"
          className="search-input"
          placeholder="Search users"
          value={inputValue}
          onChange={(e) => dispatch(setInputValue(e.target.value.trim()))}
        />

        <button className="clr-input" onClick={(e) => dispatch(clrInput(e))}>
          {users.length > 0 && "X"}
        </button>
      </form>
    </div>
  );
};

export default SearchUsers;
