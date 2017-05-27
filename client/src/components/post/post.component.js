import React, {Component} from 'react';
class Post extends Component {


  constructor(props,) {
    super(props);

    this.state = {
      post: {}
    };


    console.log(this.props.match.params.id);

  }

  render() {


    return (
      <div>
        <h2>Post detail {this.props.match.params.id}</h2><p>Body content</p>
      </div>
    )

  }

}

export default Post;
