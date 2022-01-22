import axios from "axios"
import { LoginStart, loginSuccess, LoginFail } from "./components/context/AuthAction";

export const loginCall = async (userCredentials, dispatch)=>{
    dispatch({type: "LOGIN_START"});
    try {
        const res = await axios.post("auth/login", userCredentials);
        dispatch({type: "LOGIN_SUCCESS", payload: res.data});

    } catch (error) {
        dispatch({type: "LOGIN_FAIL", payload: error});
    }
}