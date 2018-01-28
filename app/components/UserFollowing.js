import React from 'react';
import axios from 'axios';

class UserFollowing extends React.Component {
  constructor(props) {
    super(props);

    this.state ={following: []} 
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.props.user}/following`)
      .then(res => {
        if (res.status == 200) {
          console.log(res);
          this.setState({following: res.data})
        }
      })
  }

  render() {
    const following = this.state.following;
    return (
      <div className="user-following">
        {following.length == 0 ? <p>LOADING...</p> : 
          following.map((item) => (
            <div className="follower" key={item.id}>
              <img src={item.avatar_url} alt={`Avatar de ${item.login}`}/>
              <span>@{item.login}</span>
            </div>
          ))
        }
      </div>
    )
  }
}

export default UserFollowing;