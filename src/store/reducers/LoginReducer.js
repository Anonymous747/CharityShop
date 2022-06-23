import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  initialized: false,
  loaded: false,
  authorized: false,
  error: false,
};

export const getProps = state => ({
  ...state.initialized,
  ...state.loaded,
  ...state.authorized,
  ...state.error,
});

const loginSlice = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: {
    loading: state => {
      state.initialized = true;
    },
    loaded: state => {
      state.loaded = true;
    },
    error: state => {
      state.error = true;
    },
  },
});

// const loginReducer = (state = initialState, action) => {
//   console.log('LoginReducer + ' + initialState);
//   switch (action.type) {
//     case actions.LOADING_ACTION: {
//       return {
//         ...initialState,
//         initialized: true,
//       };
//     }
//     case actions.LOADED_ACTION: {
//       return {
//         ...initialState,
//         loaded: true,
//       };
//     }
//     case actions.AUTHORIZED_ACTION: {
//       return {
//         ...initialState,
//         authorized: true,
//       };
//     }
//     case actions.ERROR_ACTION: {
//       return {
//         ...initialState,
//         error: true,
//       };
//     }
//   }
// };

const {actions, reducer} = loginSlice;
export const {loading, loaded, error} = actions;
export default reducer;
