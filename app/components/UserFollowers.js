import React from 'react';
import axios from 'axios';

class UserFollowers extends React.Component {
  constructor(props) {
    super(props);

    this.state ={followers: []} 
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.props.user}/followers`)
      .then(res => {
        if (res.status == 200) {
          console.log(res);
          this.setState({followers: res.data})
        }
      })
  }

  render() {
    const followers = this.state.followers;
    return (
      <div className="user-followers">
        {followers.length == 0 ? <p>LOADING...</p> : 
          followers.map((item) => (
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

export default UserFollowers;