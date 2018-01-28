import React from 'react';
import axios from 'axios';

import star from '../img/star.svg';
import github from '../img/github.svg';

class UserRepos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.props.user}/repos`)
      .then(res => {
        if (res.status == 200) {
          console.log(res);
          this.setState({repos: res.data})
        }
      })
  }

  render() {
    const repositories = this.state.repos;
    return (
      <div className="user-repos">
        {repositories.length == 0 ? <p>LOADING...</p> : 
          repositories.map((item) => (
            <div className="card" key={item.id}>
              <div className="card__header">
                <h3>{item.name}</h3>
                <span>{item.language}</span>
              </div>
              <div className="card__body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elint quo at rerum reprehenderit.</p>
              </div>
              <div className="card__footer">
                <a href={item.html_url} target="_blank"><img src={github} alt="github"/></a>
                <img src={star} alt="star"/>
                <span>{item.stargazers_count}</span>
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}

export default UserRepos;