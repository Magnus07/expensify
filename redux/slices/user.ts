import {createSlice} from '@reduxjs/toolkit';

// Define a type for the slice state
interface UserState {
  user: {} | undefined;
  isUserLoading: boolean;
}

// Define the initial state using that type
const initialState: UserState = {
  user: undefined,
  isUserLoading: false,
};

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user += action.payload;
    },
    setIsUserLoading: (state, action) => {
      state.isUserLoading = action.payload;
    },
  },
});

export const {setUser, setIsUserLoading} = userSlice.actions;

export default userSlice.reducer;
