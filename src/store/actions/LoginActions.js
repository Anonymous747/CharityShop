import {fetchUsersData} from '../services/http-requests';

export const LOADING_ACTION = 'Loading';
export const LOADED_ACTION = 'Loaded';
export const AUTHORIZED_ACTION = 'Authorized';
export const ERROR_ACTION = 'Error';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';

export const loadingAction = () => ({
  type: LOADING_ACTION,
});

export const loadedAction = () => ({
  type: LOADED_ACTION,
});

export const authorizedAction = () => ({
  type: AUTHORIZED_ACTION,
});

export const errorAction = () => ({
  type: ERROR_ACTION,
});

export const fetchData = () => fetchUsersData().then();

export const login = user => ({
  type: LOGIN_REQUEST,
  user: user,
});
