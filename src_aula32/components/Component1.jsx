import Component2 from "./Component2";
import { createContext, useState } from "react";
const UserContext = createContext();
function Component1() {
  const [user, setUser] = useState("Linus");

  return (
    <>
      <h1>{`Hello ${user}!`}</h1><UserContext.Provider value={user}>
        <Component2 />
      </UserContext.Provider>
    </>
  );
}
export default Component1;