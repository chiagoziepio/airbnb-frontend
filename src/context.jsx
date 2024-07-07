import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvier = ({ children }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCpassword] = useState("");
  const [name, setName] = useState("")
  return (
    <Context.Provider
      value={{
        email,
        setEmail,
        username,
        setUsername,
        password,
        setPassword,
        cPassword,
        setCpassword,
        name, 
        setName
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvier;
