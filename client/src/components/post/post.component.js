import React, {Component} from 'react';
import axios from 'axios';
class Post extends Component {


  constructor(props) {
    super(props);

    this.state = {
      post: []
    };


  }

  componentDidMount() {


    const id = this.props.match.params.id;

    if (id) {

      axios.get(`http://0.0.0.0:3000/api/tests/${id}`)
        .then(res => {
          const post = res.data;
          this.setState({post});
        });
    }


  }


  render() {


    const {post} = this.state;

    return (
      <div>
        <h2>{post.title}</h2><p>{post.body}</p>
      </div>
    )

  }

}

export default Post;
