import React from 'react';
import axios from 'axios';

import {Route, BrowserRouter, Switch} from 'react-router-dom';

import img from '../img/avatar.png';
import UserDetail from './UserDetail';
import UserRepos from './UserRepos';
import UserFollowers from './UserFollowers';

// UserDefault Component
const UserDefault = (props) => (
  <div className="user-default">
    <img src={img} alt="user"/>
    <div>
      <input type="text" placeholder="github username" value={props.value.bind} onChange={props.change.bind(null)}/>
      <button type="submit" onClick={props.clickSearch.bind(null)}>Buscar</button>
    </div>
  </div>
)

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
    <button onClick={props.onReset.bind(null, null)}>Reset</button>
  </div>
)

// UserProfile Component
class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      searchUser: null,
      dataUser: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClickSearch = this.handleClickSearch.bind(this);
    this.handleClickReset = this.handleClickReset.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleClickSearch(event) {
    const user = this.state.value;
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

  handleClickReset(val) {
    this.setState({
      searchUser: val,
      dataUser: '',
      value: ''
    });
  }

  render() {
    const dataUser = this.state.dataUser;
    const searchUser = this.state.searchUser;
    return (
      <div>
        {!searchUser && <UserDefault value={this.state.value} change={this.handleChange} clickSearch={this.handleClickSearch}/>}
        {searchUser &&
          <UserInformation
            avatar={dataUser.avatar_url}
            name={dataUser.name}
            userName={dataUser.login}
            followers={dataUser.followers}
            following={dataUser.following}
            repos={dataUser.public_repos}
            blog={dataUser.blog}
            onReset={this.handleClickReset}
          />
        }
        {searchUser && <UserDetail user={dataUser.login}/>}

        <BrowserRouter>
          <div>
            <Route component={UserDetail}/>
            <Switch>
              <Route exact path="/repos" component={UserRepos}/>
              <Route path="/followers" component={UserFollowers}/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default UserProfile;