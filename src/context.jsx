import { createContext, useState, useReducer, useContext } from "react";
import axios from "axios";
import { InitialState, ReducerTerms } from "./ReducerFile";
import Reducer from "./ReducerFile";
import { useNavigate } from "react-router-dom";

export const Context = createContext();

const ContextProvier = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, InitialState);
  /* const [email, setEmail] = useState("");"http://localhost:4000"
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCpassword] = useState("");
  const [name, setName] = useState("") */
  const BASE_URL = "https://cozyhomes.vercel.app";
  const handleBookApartment = async (_id) => {
    console.log(_id);
    try {
      dispatch({
        type: ReducerTerms.BOOK_APARTMENT_START,
      });
      const res = await axios.post(
        `${BASE_URL}/api/airbnb/apartment/bookApartment`,
        { _id },
        { withCredentials: true }
      );
      const data = await res.data.msg;
      dispatch({
        type: ReducerTerms.BOOK_APARTMENT_SUCCESS,
      });
      alert(data);
    } catch (error) {
      console.log(error);
      dispatch({
        type: ReducerTerms.BOOK_APARTMENT_ERROR,
      });
      alert(error.response.data.msg);
    }
  };
  const navigate = useNavigate()
  const handleLogout = async () => {
    try {
      dispatch({
        type: ReducerTerms.LOGOUT_START,
      });
      const res = await axios.get(`${BASE_URL}/api/airbnb/user/logout`, {
        withCredentials: true,
      });
      const data = await res.data.msg;
      dispatch({
        type: ReducerTerms.LOGOUT_SUCCESS,
      });
      alert(data);
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Context.Provider
      value={{
        state,
        dispatch,
        BASE_URL,
        handleBookApartment,
        handleLogout,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default ContextProvier;

export const myApp = () => {
  const appContext = useContext(Context);

  if (appContext === undefined) {
    throw new Error("i dont know oooh");
  }
  return appContext;
};
