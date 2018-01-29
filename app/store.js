import { createStore } from 'redux';

const reducer = (state, action) => {
  if (action.type == 'ADD_USER') {
    return {
      user: action.user,
      data: state.data,
      repos: state.repos,
      followers: state.followers,
      following: state.following
    }
  } else if (action.type == 'ADD_USER_DATA') {
    return {
      user: state.user,
      data: action.data,
      repos: state.repos,
      followers: state.followers,
      following: state.following
    }
  } else if (action.type == 'ADD_USER_REPOS') {
    return {
      user: state.user,
      data: state.data,
      repos: action.repos,
      followers: state.followers,
      following: state.following
    }
  } else if (action.type == 'ADD_USER_FOLLOWERS') {
    return {
      user: state.user,
      data: state.data,
      repos: state.repos,
      followers: action.followers,
      following: state.following
    }
  } else if (action.type == 'ADD_USER_FOLLOWING') {
    return {
      user: state.user,
      data: state.data,
      repos: state.repos,
      followers: state.followers,
      following: action.following
    }
  }

  return state
}

const store = createStore(reducer, {
  user: null,
  data: [],
  repos: [],
  followers: [],
  following: []
});

export default store;