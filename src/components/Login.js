import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "../style/styles";
import "../style/index.css";
import "../css/main.css";
import { signIn } from "../redux/actions/LoginAction";
import { connect } from "react-redux";

class Login extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      authCode: []
    };
    this.signIn = this.signIn.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.inputRef = React.createRef();
  }

  signIn = () => {
    var data = {
      authCode: this.state.authCode.join(""),
      bedId: this.props.bedId,
      facilityId: this.props.facilityId
    };
    this.props.signIn(data);
  };

  handleChange = event => {
    let id = event.target.id;
    var newArray = this.state.authCode;
    newArray[id] = event.target.value;
    this.setState({
      authCode: newArray
    });
    let index = parseInt(id) + 1;

    if (event.target.value !== "" && this.refs[index] !== undefined) {
      this.refs[index].focus();
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="image_outer">       

        <div className="login_box">
          <div className="logo_outer">
            <img alt="" src={require("../images/logo.svg")} />
          </div>
          <h1 styleName="text-align: center;">
            <span>My</span>Meal
          </h1>
          <h4>Authorization Code</h4>

          <form className={classes.container} noValidate autoComplete="off">
            <input
              type="text"
              className="custum_input"
              maxLength="1"
              ref="0"
              id="0"
              onChange={this.handleChange}
              value={this.state.authCode[0]}
              margin="normal"
            />
            <input
              type="text"
              maxLength="1"
              ref="1"
              id="1"
              className="custum_input"
              margin="normal"
              onChange={this.handleChange}
              value={this.state.authCode[1]}
            />
            <input
              type="text"
              maxLength="1"
              id="2"
              ref="2"
              className="custum_input"
              margin="normal"
              onChange={this.handleChange}
              value={this.state.authCode[2]}
            />
            <input
              type="text"
              maxLength="1"
              id="3"
              ref="3"
              className="custum_input"
              margin="normal"
              onChange={this.handleChange}
              value={this.state.authCode[3]}
            />
            <input
              type="text"
              maxLength="1"
              id="4"
              ref="4"
              className="custum_input"
              margin="normal"
              onChange={this.handleChange}
              value={this.state.authCode[4]}
            />
            <input
              type="text"
              maxLength="1"
              id="5"
              ref="5"
              className="custum_input"
              margin="normal"
              onChange={this.handleChange}
              value={this.state.authCode[5]}
            />
            <input
              type="text"
              maxLength="1"
              id="6"
              ref="6"
              className="custum_input"
              margin="normal"
              onChange={this.handleChange}
              value={this.state.authCode[6]}
            />

            <input
              type="text"
              maxLength="1"
              id="7"
              ref="7"
              className="custum_input"
              margin="normal"
              onChange={this.handleChange}
              value={this.state.authCode[7]}
            />
          </form>

          <Button
            variant="contained"
            color="primary"
            className="button_login"
            onClick={this.signIn}
          >
            Sign in
          </Button>
		  <a className="link" href="http://192.168.0.58:3000/patientordering/">2019 © Compass Group North America</a>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  signIn
};

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(Login));
