import { userAction } from "slices/UserCreate";
import { loginAction } from "slices/SignIn";


const actions = {
  ...userAction,
  ...loginAction,


};

export default actions;
