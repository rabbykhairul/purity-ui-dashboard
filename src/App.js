import { useState } from "react";
import { Switch, Route, Redirect } from "react-router";
import UserContext from "./contexts/UserContext";
import MainPage from "./components/MainPage";
import SignInScreen from "./components/SignInScreen";
import SignUpScreen from "./components/SignUpScreen";
import { logoutUser } from "./services/authService";

function App() {
  const [user, setUser] = useState(null);

  const storeUserInfo = (user) => setUser(user);
  const destroyUserSession = () => {
    setUser(null);
    logoutUser();
  }

  return (
    <UserContext.Provider value={{ user, userLoggedIn: storeUserInfo, userLoggedOut: destroyUserSession }}>
      <Switch>
        <Route path="/login">
          <SignInScreen />
        </Route>
        <Route path="/register">
          <SignUpScreen />
        </Route>
        <Route path="/pages">
          <MainPage />
        </Route>
        <Redirect from="/" to="/pages" />
      </Switch>
    </UserContext.Provider>
  );
}

export default App;
