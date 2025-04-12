import { createContext } from "react";
import "./App.css";
import User from "./components/User";

export const userContext = createContext();
function App() {
  const name = "something";
  return (
    <userContext.Provider value={name}>
      <User />
    </userContext.Provider>
  );
}

export default App;
