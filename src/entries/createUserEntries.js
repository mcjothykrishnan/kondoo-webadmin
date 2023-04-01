export const userEntries = [
  {
    isTextInput: true,
    name: "first_name",
    label: "Name",
    breakpoint: 4,
    // pattern: /^[A-Za-z][A-Za-z0-9_]{7,29}$/,
    // validation: { required: true },
    requiredField: true,
    error_message: "First Text",
    customClass: "textBox",
    validation_error_message: "Text is in Invalid format",
    placeholder: "Enter Name",
  },
  {
    isTextInput: true,
    name: "email",
    label: "Email",
    breakpoint: 4,
    // pattern: /^[A-Za-z][A-Za-z0-9_]{7,29}$/,
    // validation: { required: true },
    requiredField: true,
    error_message: "First Text",
    customClass: "textBox",
    validation_error_message: "Text is in Invalid format",
    placeholder: "Enter Email",
  },
  {
    isTextInput: true,
    name: "phone_number",
    label: "Mobile Number",
    breakpoint: 4,
    // pattern: /^[A-Za-z][A-Za-z0-9_]{7,29}$/,
    // validation: { required: true },
    requiredField: true,
    error_message: "First Text",
    customClass: "textBox",
    validation_error_message: "Text is in Invalid format",
    placeholder: "Enter Mobile Number",
  },

  {
    isDropdownInput: true,
    name: "user_role",
    label: "Role",
    breakpoint: 4,
    // pattern: /^[A-Za-z][A-Za-z0-9_]{7,29}$/,
    // validation: { required: true },
    requiredField: true,
    customClass: "textBox",
    validation_error_message: "Text is in Invalid format",
    placeholder: "Select Role",
  },

  {
    isPasswordInput: true,
    name: "password",
    label: "Password",
    breakpoint: 4,
    // pattern: /^[A-Za-z][A-Za-z0-9_]{7,29}$/,
    // validation: { required: true },
    requiredField: true,
    error_message: "First Text",
    customClass: "textBox",
    validation_error_message: "Text is in Invalid format",
    placeholder: "Password",
  },

  {
    isPasswordInput: true,
    name: "confirmPassword",
    label: "Confirm Password",
    breakpoint: 4,
    // pattern: /^[A-Za-z][A-Za-z0-9_]{7,29}$/,
    // validation: { required: true },
    requiredField: true,
    error_message: "First Text",
    customClass: "textBox",
    validation_error_message: "Text is in Invalid format",
    placeholder: "Confirm Password",
  },
];
// export const userDefaultEntries = [
//   {
//     // username: "",
//     email: "",
//     password: "",
    
//     // user_type: "",
//   },
// ];

// Read All Function Payload
export const userPayload = {
  data: {},
  method: 'get',
  apiName: 'users/list?skip=0&take=50',
};

// Read By Id
export const getUserPayload = {
  data: {},
  method: 'GET',
  apiName: `users/`,
};

// Update Function Payload

export const editUserPayload = {
  method: 'PUT',
  apiName: `users/update/`,
};


// Create Function Payload

export const createUserPayload = {
  method: 'POST',
  apiName: `users/create`,
};

// Delete Function Payload

export const deleteUserPayload = {
  method: 'DELETE',
  apiName: `deleteSpeciality/`,
};
