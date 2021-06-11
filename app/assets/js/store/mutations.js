export function LOGGING_IN(state, status) {
  state.logging_in = status;
}

export function LOGIN_SUCCESFUL(state, { user }) {
  state.user = user;
  state.loggingIn = false;
  state.loggedIn = true;
}

export function LOGOUT(state){
  state.user = {};
  state.loggedIn = false;
}