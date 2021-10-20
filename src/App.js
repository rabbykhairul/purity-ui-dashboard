import { Switch, Route, Redirect } from "react-router";
import MainPage from "./components/MainPage";
import SignInScreen from "./components/SignInScreen";
import SignUpScreen from "./components/SignUpScreen";

function App() {
  return (
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
  );
}

export default App;
