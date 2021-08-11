// import hooks and packages
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import components
import Users from "./Components/users/Users.jsx";
import Navbar from "./Components/layouts/Navbar.jsx";
import NotFound from "./Components/pages/NotFound.jsx";
import UserPage from "./Components/pages/UserPage.jsx";
import SearchUsers from "./Components/users/SearchUsers.jsx";

// import Redux
import { Provider } from "react-redux";
import store from "./redux/store.js";

//import styles
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <SearchUsers />
                <Users />
              </>
            )}
          />
          <Route
            exact
            path="/user/:login"
            render={(props) => <UserPage {...props} />}
          />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
