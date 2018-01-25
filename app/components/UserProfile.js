import React from 'react';
import axios from 'axios';

import {Route, BrowserRouter, Switch} from 'react-router-dom';


import UserDetail from './UserDetail';
import UserRepos from './UserRepos';
import UserFollowers from './UserFollowers';


// UserInformation Component
const UserInformation = (props) => (
  <div className="user-information">
    <img src={props.avatar} alt={`Avatar of ${props.name}`}/>
    <h2>@{props.userName}</h2>
    <ul>
      <li>{props.name}</li>
      <li>Followers: {props.followers}</li>
      <li>following: {props.following}</li>
      <li>Repos: {props.repos}</li>
      {props.blog && <li>Blog: <a href={props.blog} target="_blank">{props.blog}</a></li>}
    </ul>
    <button>Reset</button>
  </div>
)

// UserProfile Component
class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchUser: false,
      dataUser: ''
    };
  }

  componentDidMount() {
    const user = this.props.match.params.id;
    axios.get(`https://api.github.com/users/${user}`)
      .then(res => {
        if (res.status == 200) {
          this.setState({
            searchUser: true,
            dataUser: res.data
          });
        }
      });
  }

  render() {
    const dataUser = this.state.dataUser;
    const searchUser = this.state.searchUser;
    return (
      <div>
        <UserInformation
          avatar={dataUser.avatar_url}
          name={dataUser.name}
          userName={dataUser.login}
          followers={dataUser.followers}
          following={dataUser.following}
          repos={dataUser.public_repos}
          blog={dataUser.blog}
          onReset={this.handleClickReset} />
        {searchUser && 
          <BrowserRouter>
            <div>
              <Route component={UserDetail} user={dataUser.login}/>
              <Switch>
                <Route exact path="/repos" component={UserRepos} user={dataUser.login}/>
                <Route path="/followers" component={UserFollowers}/>
              </Switch>
            </div>
          </BrowserRouter>
        }
      </div>
    )
  }
}

export default UserProfile;