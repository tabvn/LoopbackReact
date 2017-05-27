import React, {Component} from 'react';
import axios from 'axios';


class Block extends Component {


  render() {
    const posts = this.props.posts;

    return <div><h2>Block:</h2>
      <ul>
        {posts.map((p, index) => <li key={index}>{p.title}</li>)}

      </ul>
    </div>
  }
}

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };


  }

  componentWillMount() {

    axios.get(`http://0.0.0.0:3000/api/tests`)
      .then(res => {


        const posts = res.data.map(obj => obj);
        this.setState({posts});
      });
  }


  render() {
    const {posts} = this.state;
    return <div>
      <button onClick={()=> this.logout}>Logout</button>
      <h1>Blogs</h1>
      {posts.map((post, index) =>
        <article key={index}><h2>{post.title}</h2><p>{post.body}</p></article>
      )}
      <Block posts={posts}/>

    </div>


  }

  logout(){
    console.log("User pressed logout");
  }

}

export default Home;
