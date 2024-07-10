import { createContext, useState, useReducer } from "react";
import axios from "axios"
import { InitialState, ReducerTerms} from "./ReducerFile";
import Reducer from "./ReducerFile";


export const Context = createContext();

const ContextProvier = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, InitialState)
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCpassword] = useState("");
  const [name, setName] = useState("")
 
  const handleLogin = async()=>{
    
    try {
      dispatch({
        type: ReducerTerms.LOGIN_START
      })
      const res = await axios.post("http://localhost:4000/api/airbnb/user/login" ,{username,password});
      const data = await res.data.msg;
      dispatch({
        type: ReducerTerms.LOGIN_SUCCESS,
        payload: data
      })
      console.log(`this from reducer:${state.feedbackMsg}`);
    } catch (error) {
      console.log(error);
      dispatch({
        type:ReducerTerms.LOGIN_ERROR,
        payload: error.response.data.msg
      })
    }
  }

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
        setName,
        state,
        dispatch,
        handleLogin
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvier;
