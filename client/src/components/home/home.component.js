import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };


  }

  componentDidMount() {



    axios.get(`http://0.0.0.0:3000/api/tests`)
      .then(res => {


        const posts = res.data.map(obj => obj);
        this.setState({posts});
      });
  }


  render() {

    console.log(this.props);

    const {posts} = this.state;
    return <div>
      <button onClick={() => this.logout}>Logout</button>
      <h1>Blogs</h1>
      {posts.map((post, index) =>
        <article key={index}><h2><Link to={"/post/" + post.id}>{post.title}</Link></h2><p>{post.body}</p></article>
      )}

    </div>


  }

  logout() {
    console.log("User pressed logout");
  }

}

export default Home;
