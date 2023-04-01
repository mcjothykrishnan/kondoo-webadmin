/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../constants/commonSchema";
import { fetchData } from "../helpers";

const USER = createAsyncThunk(
  "user/user",
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

const USER_CREATE = createAsyncThunk(
  "user/userCreate",
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
const USER_EDIT = createAsyncThunk(
  "user/userEdit",
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

const USER_DELETE = createAsyncThunk(
  "user/userDelete",
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

const USER_GET = createAsyncThunk(
  "user/userGet",
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

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    user: {
      ...defaultState.List,
    },
    userEdit: {
      ...defaultState.List,
    },
    userCreate: {
      ...defaultState.List,
    },
    userDelete: {
      ...defaultState.List,
    },
    userGet: {
      ...defaultState.List,
    },
  },
  extraReducers: {
    [USER.fulfilled]: (state, action) => {
      (state.user.loading = false),
        (state.user.error = false),
        (state.user = action.payload);
    },
    [USER.pending]: (state, action) => {
      (state.user.loading = true),
        (state.user.error = false),
        (state.user.loading = true);
    },
    [USER.rejected]: (state, action) => {
      (state.user.loading = false),
        (state.user.error = true),
        (state.user = action.payload);
    },
    [USER_CREATE.fulfilled]: (state, action) => {
      (state.userCreate.loading = false),
        (state.userCreate.error = false),
        (state.userCreate = action.payload);
    },
    [USER_CREATE.pending]: (state, action) => {
      (state.userCreate.loading = true),
        (state.userCreate.error = false),
        (state.userCreate.loading = true);
    },
    [USER_CREATE.rejected]: (state, action) => {
      (state.userCreate.loading = false),
        (state.userCreate.error = true),
        (state.userCreate = action.payload);
    },
    [USER_EDIT.fulfilled]: (state, action) => {
      (state.userEdit.loading = false),
        (state.userEdit.error = false),
        (state.userEdit = action.payload);
    },
    [USER_EDIT.pending]: (state, action) => {
      (state.userEdit.loading = true),
        (state.userEdit.error = false),
        (state.userEdit.loading = true);
    },
    [USER_EDIT.rejected]: (state, action) => {
      (state.userEdit.loading = false),
        (state.userEdit.error = true),
        (state.userEdit = action.payload);
    },
    [USER_DELETE.fulfilled]: (state, action) => {
      (state.userDelete.loading = false),
        (state.userDelete.error = false),
        (state.userDelete = action.payload);
    },
    [USER_DELETE.pending]: (state, action) => {
      (state.userDelete.loading = true),
        (state.userDelete.error = false),
        (state.userDelete.loading = true);
    },
    [USER_DELETE.rejected]: (state, action) => {
      (state.userDelete.loading = false),
        (state.userDelete.error = true),
        (state.userDelete = action.payload);
    },
    [USER_GET.fulfilled]: (state, action) => {
      (state.userGet.loading = false),
        (state.userGet.error = false),
        (state.userGet = action.payload);
    },
    [USER_GET.pending]: (state, action) => {
      (state.userGet.loading = true),
        (state.userGet.error = false),
        (state.userGet.loading = true);
    },
    [USER_GET.rejected]: (state, action) => {
      (state.userGet.loading = false),
        (state.userGet.error = true),
        (state.userGet = action.payload);
    },
  },
});

const userAction = {
  USER,
  USER_CREATE,
  USER_EDIT,
  USER_DELETE,
  USER_GET,
};
export { userAction };
export default userSlice.reducer;
