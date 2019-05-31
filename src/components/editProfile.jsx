/* eslint-disable valid-jsdoc */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from './common/textInput';
import TextArea from './common/textArea';
import { handleInputValueChange, addImage } from '../redux/actions/formActions';
import { editLoggedInUserProfile } from '../redux/actions/userAction';
import Button from './common/SubmitButton';
import '../styles/css/profileForm.css';

/**
 * @author Mwibutsa Floribert
 */
class EditProfile extends Component {
  /**
   * @author Mwibutsa Floribert
   * @returns { * } --
   */
  componentDidMount() {
    const {
      handleInputValueChange: handleInputChange,
      currentValues,
    } = this.props;
    handleInputChange(currentValues);
  }

  renderInput = ({ type, name, value, label, ...rest }) => {
    return (
      <Input
        name={name}
        type={type}
        value={value}
        label={label}
        handleChange={this.handleChange}
        {...rest}
      />
    );
  };

  /**
   * @param { Object } e -- event Object
   * @returns { * } --
   */
  handleSubmit = e => {
    e.preventDefault();
    const {
      editLoggedInUserProfile: editProfile,
      toggleEditProfile,
    } = this.props;
    const { values } = this.props;
    editProfile({ ...values });
    toggleEditProfile();
  };

  handleChange = e => {
    const { handleInputValueChange: handleInputChange } = this.props;
    handleInputChange({ [e.target.name]: e.target.value });
  };

  /**
   * @author Mwibutsa Floribert
   * @returns { Component } --
   */
  render() {
    const { values } = this.props;
    const { firstname, lastname, username, email, bio } = values;
    return (
      <div className="form-container" test-data="profileFormComponent">
        <form onSubmit={this.handleSubmit} className="edit-profile-form">
          <div className="input-grid">
            {this.renderInput({
              type: 'text',
              name: 'firstname',
              value: firstname,
              label: 'Firstname',
              required: 'required',
            })}
            {this.renderInput({
              type: 'text',
              name: 'lastname',
              value: lastname,
              label: 'Lastname',
              required: 'required',
            })}
          </div>
          <div className="input-grid">
            {this.renderInput({
              type: 'text',
              name: 'username',
              value: username,
              label: 'Username',
              ...(username.length
                ? { disabled: 'disabled' }
                : { required: 'required' }),
            })}
            {this.renderInput({
              type: 'email',
              name: 'email',
              value: email,
              label: 'Email',
              ...(email.length
                ? { disabled: 'disabled' }
                : { required: 'required' }),
            })}
          </div>
          <TextArea
            name="bio"
            value={bio}
            handleChange={this.handleChange}
            placeholder="Add a bio to your profile"
            required
          />
          <Button label="Save" type="submit" value="Save" />
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    values: state.profileForm.values,
    erros: state.profileForm.errors,
  };
};
export default connect(
  mapStateToProps,
  { handleInputValueChange, editLoggedInUserProfile, addImage },
)(EditProfile);
