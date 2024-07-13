import { createContext, useState, useReducer, useContext } from "react";
import axios from "axios"
import { InitialState, ReducerTerms} from "./ReducerFile";
import Reducer from "./ReducerFile";


export const Context = createContext();

const ContextProvier = ({ children }) => {
 
  const [state, dispatch] = useReducer(Reducer, InitialState)
  /* const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCpassword] = useState("");
  const [name, setName] = useState("") */
 const BASE_URL = "http://localhost:4000"

  return (
    <Context.Provider
      value={{
        state,
        dispatch,
        BASE_URL
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default ContextProvier;

export const myApp = ()=>{
  const appContext = useContext(Context)

  if(appContext === undefined){
    throw new Error("i dont know oooh")
  }
  return appContext
}