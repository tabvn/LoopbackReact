import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {withCookies, Cookies} from 'react-cookie';
import {Button, Card, CardTitle, CardText, CardActions, CardMenu, IconButton} from 'react-mdl';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };


  }

  componentDidMount() {

    const {cookies} = this.props;

    this.state = {
      name: cookies.get('name') || 'Ben'
    };


    axios.get(`http://0.0.0.0:3000/api/tests`)
      .then(res => {


        const posts = res.data.map(obj => obj);
        this.setState({posts});
      });
  }


  render() {


    const {posts} = this.state;
    return <div className="posts" style={{
      margin: '0 auto',
      width: '600px'
    }}>
      <button onClick={() => this.addPost()}>Add {this.state.name}</button>

        <h1>Our Posts</h1>
        {posts.map((post, index) =>
          <Card key={index} shadow={0} style={{
            marginBottom: '20px',
            width: '100%'
          }}>
            <CardTitle style={{
              color: '#fff',
            }}><Link to={"/post/" + post.id}>{post.title}</Link></CardTitle>
            <CardText>
              {post.body}
            </CardText>
            <CardActions border>
              <Link className="mdl-button mdl-js-button mdl-button--colored" to={"/post/" + post.id}>Read more</Link>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share"/>
            </CardMenu>
          </Card>
        )}
      </div>


      }

      addPost() {

      const posts = this.state.posts;
      const newPost = {title: "New Post", body: "Content of the new post"};
      posts.push(newPost);

      this.setState(posts);

      const {cookies} = this.props;

      const name = "Toan " + posts.length;
      cookies.set('name', name, {path: '/'});
      this.setState({name});


    }

      }

      export default withCookies(Home);
