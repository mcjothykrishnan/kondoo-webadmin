export const entries = [
    {
      textField: true,
      name: "user_role",
      label: "User Role",
      placeholder: "Enter User Role",
      type: "text",
    //   pattern: /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,
      validation: { required: true },
      requiredField: true,
    },
  ];