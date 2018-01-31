import React from 'react';
import axios from 'axios';

import store from '../store';

import star from '../img/star.svg';
import github from '../img/github.svg';

class UserRepos extends React.Component {
  constructor(props) {
    super(props);

  }

  // componentDidMount() {
  //   store.subscribe(() => {
  //     console.log("subscribe")
  //     this.setState({
  //       user: store.getState().userRepos
  //     })
  //   })
  // }

  render() {
    console.log(this.props.data);
    const repositories = this.props.data;
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