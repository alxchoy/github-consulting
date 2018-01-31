import React from 'react';

import {Link} from 'react-router-dom';

import img from '../img/avatar.png';

import UserProfile from './UserProfile';
import UserDetail from './UserDetail';

import { getUserData } from '../service';
import store from '../store';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = { user: '' }
    this.handleChange = this.handleChange.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  handleChange(event) {
    this.setState({
      user: event.target.value
    })
  }

  getData() {
    getUserData(this.state.user).then(res => {
      store.dispatch({
        type: 'ADD_USER_DATA',
        data: res
      })
    });
  }

  render() {
    return (
      <div className="user-default">
        <img src={img} alt="user"/>
        <div>
          <input type="text" placeholder="github username" value={this.state.user} onChange={this.handleChange}/>
          { this.state.user != '' && 
            <Link to={`/user/${this.state.user}/repos`} className="search" onClick={this.getData}>Search</Link>
          }
        </div>
      </div>
    )
  }
}

export default Home;