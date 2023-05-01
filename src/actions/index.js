import { userAction } from "slices/UserCreate";
import { loginAction } from "slices/SignIn";
import { roleAction } from "slices/UserRole";

const actions = {
  ...userAction,
  ...loginAction,
  ...roleAction,
};

export default actions;
