import React, {Component} from 'react'
import {withCookies, Cookies} from 'react-cookie';
import {Textfield, Button, Card, CardTitle, CardText, CardActions} from 'react-mdl';

class LoginComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {email: "", password: ""};

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  render() {
    return (
      <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
        <CardTitle>Login</CardTitle>
        <CardText>
          <div className="form-group">
            <Textfield
              required={true}
              onChange={this.handleInputChange}
              label="Email"
              name="email"
              type="email"
              value={this.state.email}
              style={{width: '100%'}}
            />
          </div>
          <div className="form-group">
            <Textfield
              required={true}
              onChange={this.handleInputChange}
              label="Password"
              name="password"
              type="password"
              value={this.state.password}
              style={{width: '100%'}}
            />
          </div>
        </CardText>

        <CardActions border>
          <Button colored onClick={() => {
            this.login()
          }}>Login</Button>
        </CardActions>

      </Card>
    );
  }


  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }


  login() {

    console.log("Logging...", this.state.email, this.state.password);

  }

}


export default withCookies(LoginComponent);
