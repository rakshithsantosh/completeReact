import "./App.css";
import UpdateUserText from "./component/UpdateUserText";
import UseReducer from "./component/UseReducer";
import UserProfile from "./component/UserProfile";
import { UserProvider } from "./userContext";

function App() {
  return (
    <UserProvider>
      <UserProfile />
      <UpdateUserText />
      <UseReducer />
    </UserProvider>
  );
}

export default App;
