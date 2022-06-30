export const SIGNUP_REQUEST = 'signUp';

export const signUp = user => ({
  type: SIGNUP_REQUEST,
  user: user,
});
