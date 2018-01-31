import { createStore } from 'redux';

const reducer = (state, action) => {
  if (action.type == 'ADD_USER_DATA') {
    console.log(action);
    return {
      userData: action.data[0].data,
      userRepos: action.data[1].data,
      userFollowers: action.data[2].data,
      userFollowing: action.data[3].data
    }
  } else if (action.type == 'CHANGE_USER_DATA') {
    console.log(action);
    return {
      userData: action.data[0].data,
      userRepos: action.data[1].data,
      userFollowers: action.data[2].data,
      userFollowing: action.data[3].data
    }
  }

  return state
}

const store = createStore(reducer, {
  userData: [],
  userRepos: [],
  userFollowers: [],
  userFollowing: []
});

export default store;