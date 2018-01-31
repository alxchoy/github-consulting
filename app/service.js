import axios from 'axios';
import store from './store';

const getProfile = user => axios.get(`https://api.github.com/users/${user}`);

const getRepos = user => axios.get(`https://api.github.com/users/${user}/repos`);

const getFollowers = user => axios.get(`https://api.github.com/users/${user}/followers`);

const getFollowing = user => axios.get(`https://api.github.com/users/${user}/following`);

const getUserData = user => (
  axios.all([
    getProfile(user),
    getRepos(user),
    getFollowers(user),
    getFollowing(user)
  ]).then(data => data)
)

export { getUserData };