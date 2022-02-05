import React, { Component } from "react";
import { Auth } from "aws-amplify";
import {
  HelpBlock,
  FormGroup,
  FormControl,
  ControlLabel,
} from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";

export default class ConfirmationCode extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      confirmationCode: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  validateConfirmationForm() {
    return this.state.confirmationCode.length > 0;
  }

  handleConfirmationSubmit = async (event) => {
    event.preventDefault();

    this.setState({ isLoading: true });

    try {
      await Auth.confirmSignUp(this.props.email, this.state.confirmationCode);
      await Auth.signIn(this.props.email, this.props.password);

      this.props.confirmSuccess();
    } catch (e) {
      // TODO: Improve
      alert(e.message);
      this.setState({ isLoading: false });
    }
  };

  render() {
    console.log(this.props);
    return (
      <form onSubmit={this.handleConfirmationSubmit} id="registration">
        <FormGroup controlId="confirmationCode" bsSize="large">
          <ControlLabel>Confirmation Code</ControlLabel>
          <FormControl
            autoFocus
            type="tel"
            value={this.state.confirmationCode}
            onChange={this.handleChange}
          />
          <HelpBlock>Please check your email for the code.</HelpBlock>
        </FormGroup>
        <LoaderButton
          block
          bsSize="large"
          disabled={!this.validateConfirmationForm()}
          type="submit"
          isLoading={this.state.isLoading}
          text="Verify"
          loadingText="Verifying…"
        />
      </form>
    );
  }
}
