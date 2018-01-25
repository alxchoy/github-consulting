import React from 'react';

import {Link} from 'react-router-dom';

import img from '../img/avatar.png';

import UserProfile from './UserProfile';
import UserDetail from './UserDetail';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {value: ''}
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div className="user-default">
        <img src={img} alt="user"/>
        <div>
          <input type="text" placeholder="github username" value={this.state.value} onChange={this.handleChange}/>
          <Link to={"/user/" + this.state.value}>Prueba</Link>
          <button type="submit" >Buscar</button>
        </div>
      </div>
    )
  }
}

export default Home;