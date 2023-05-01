/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../constants/commonSchema";
import { fetchData } from "../helpers";

const ROLE = createAsyncThunk(
  "role/role",
  // eslint-disable-next-line default-param-last
  async (
    // eslint-disable-next-line default-param-last
    payload = {},
    { rejectWithValue }
  ) => {
    try {
      const data = await fetchData(
        payload?.data,
        payload?.method,
        payload?.apiName
      );
      return {
        ...defaultState.List,
        message: data?.data.Message,
        data: data?.data?.data,
      };
    } catch (error) {
      return rejectWithValue({
        ...defaultReject.List,
        message: error.message,
      });
    }
  }
);

const ROLE_CREATE = createAsyncThunk(
  "role/roleCreate",
  // eslint-disable-next-line default-param-last
  async (
    // eslint-disable-next-line default-param-last
    payload = {},
    { rejectWithValue }
  ) => {
    try {
      console.log(payload, "createData");
      const data = await fetchData(
        payload?.data,
        payload?.method,
        payload?.apiName
      );
      return {
        ...defaultState.List,
        message: data?.data.Message,
        data: data?.data?.data,
      };
    } catch (error) {
      return rejectWithValue({
        ...defaultReject.List,
        message: error.message,
      });
    }
  }
);
const ROLE_EDIT = createAsyncThunk(
  "role/roleEdit",
  // eslint-disable-next-line default-param-last
  async (
    // eslint-disable-next-line default-param-last
    payload = {},
    { rejectWithValue }
  ) => {
    try {
      const data = await fetchData(
        payload?.data,
        payload?.method,
        `${payload?.apiName}${payload?.id}`
      );
      return {
        ...defaultState.List,
        message: data?.data.Message,
        data: data?.data?.data,
      };
    } catch (error) {
      return rejectWithValue({
        ...defaultReject.List,
        message: error.message,
      });
    }
  }
);

const ROLE_DELETE = createAsyncThunk(
  "role/roleDelete",
  // eslint-disable-next-line default-param-last
  async (
    // eslint-disable-next-line default-param-last
    payload = {},
    { rejectWithValue }
  ) => {
    try {
      const data = await fetchData(
        payload?.data,
        payload?.method,
        `${payload?.apiName}${payload?.id}`
      );
      return {
        ...defaultState.List,
        message: data?.data.Message,
        data: data?.data?.data,
      };
    } catch (error) {
      return rejectWithValue({
        ...defaultReject.List,
        message: error.message,
      });
    }
  }
);

const ROLE_GET = createAsyncThunk(
  "role/roleGet",
  // eslint-disable-next-line default-param-last
  async (
    // eslint-disable-next-line default-param-last
    payload = {},
    { rejectWithValue }
  ) => {
    try {
      console.log(payload, "getData");

      const data = await fetchData(
        payload?.data,
        payload?.method,
        `${payload?.apiName}${payload?.id}`
        // payload?.apiName
      );
      return {
        ...defaultState.List,
        message: data?.data.Message,
        data: data?.data?.data,
      };
    } catch (error) {
      return rejectWithValue({
        ...defaultReject.List,
        message: error.message,
      });
    }
  }
);

const roleSlice = createSlice({
  name: "roleSlice",
  initialState: {
    role: {
      ...defaultState.List,
    },
    roleEdit: {
      ...defaultState.List,
    },
    roleCreate: {
      ...defaultState.List,
    },
    roleDelete: {
      ...defaultState.List,
    },
    roleGet: {
      ...defaultState.List,
    },
  },
  extraReducers: {
    [ROLE.fulfilled]: (state, action) => {
      (state.role.loading = false),
        (state.role.error = false),
        (state.role = action.payload);
    },
    [ROLE.pending]: (state, action) => {
      (state.role.loading = true),
        (state.role.error = false),
        (state.role.loading = true);
    },
    [ROLE.rejected]: (state, action) => {
      (state.role.loading = false),
        (state.role.error = true),
        (state.role = action.payload);
    },
    [ROLE_CREATE.fulfilled]: (state, action) => {
      (state.roleCreate.loading = false),
        (state.roleCreate.error = false),
        (state.roleCreate = action.payload);
    },
    [ROLE_CREATE.pending]: (state, action) => {
      (state.roleCreate.loading = true),
        (state.roleCreate.error = false),
        (state.roleCreate.loading = true);
    },
    [ROLE_CREATE.rejected]: (state, action) => {
      (state.roleCreate.loading = false),
        (state.roleCreate.error = true),
        (state.roleCreate = action.payload);
    },
    [ROLE_EDIT.fulfilled]: (state, action) => {
      (state.roleEdit.loading = false),
        (state.roleEdit.error = false),
        (state.roleEdit = action.payload);
    },
    [ROLE_EDIT.pending]: (state, action) => {
      (state.roleEdit.loading = true),
        (state.roleEdit.error = false),
        (state.roleEdit.loading = true);
    },
    [ROLE_EDIT.rejected]: (state, action) => {
      (state.roleEdit.loading = false),
        (state.roleEdit.error = true),
        (state.roleEdit = action.payload);
    },
    [ROLE_DELETE.fulfilled]: (state, action) => {
      (state.roleDelete.loading = false),
        (state.roleDelete.error = false),
        (state.roleDelete = action.payload);
    },
    [ROLE_DELETE.pending]: (state, action) => {
      (state.roleDelete.loading = true),
        (state.roleDelete.error = false),
        (state.roleDelete.loading = true);
    },
    [ROLE_DELETE.rejected]: (state, action) => {
      (state.roleDelete.loading = false),
        (state.roleDelete.error = true),
        (state.roleDelete = action.payload);
    },
    [ROLE_GET.fulfilled]: (state, action) => {
      (state.roleGet.loading = false),
        (state.roleGet.error = false),
        (state.roleGet = action.payload);
    },
    [ROLE_GET.pending]: (state, action) => {
      (state.roleGet.loading = true),
        (state.roleGet.error = false),
        (state.roleGet.loading = true);
    },
    [ROLE_GET.rejected]: (state, action) => {
      (state.roleGet.loading = false),
        (state.roleGet.error = true),
        (state.roleGet = action.payload);
    },
  },
});

const roleAction = {
  ROLE,
  ROLE_CREATE,
  ROLE_EDIT,
  ROLE_DELETE,
  ROLE_GET,
};
export { roleAction };
export default roleSlice.reducer;
