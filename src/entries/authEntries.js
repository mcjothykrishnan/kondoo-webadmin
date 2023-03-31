const entries = [
  {
    textField: true,
    name: "email",
    label: "Username",
    placeholder: "Email",
    type: "text",
    pattern: /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,
    validation: { required: true },
    requiredField: true,
  },
  {
    passwordTextField: true,
    name: "password",
    label: "Password",
    placeholder: "Password",
    type: "password",
    validation: { required: true },
    requiredField: true,
  },
];
export default entries;
