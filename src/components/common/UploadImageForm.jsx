/* eslint-disable require-jsdoc */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  addImage,
  handleInputValueChange,
} from '../../redux/actions/formActions';

class UploadImageForm extends Component {
  state = {
    files: {},
  };

  getFile = e => {
    const { handleInputValueChange: handleInputChange } = this.props;
    const file = e.target.files[0];
    handleInputChange({ [e.target.name]: file });
    this.setState({ files: file });
  };

  uploadImage = e => {
    e.preventDefault();
    const { currentUserInfo } = this.props;
    const { addImage: uploadImage } = this.props;
    const { files } = this.state;
    uploadImage({ image: files, userInfo: currentUserInfo });
    const { toggleForm } = this.props;
    toggleForm();
  };

  render() {
    const { toggleForm } = this.props;
    return (
      <div className="uploadImageModal" test-data="uploadImageComponent">
        <button type="button" className="btn-cancel" onClick={toggleForm}>
          Cancel
        </button>
        <form className="profileImageInput" onSubmit={this.uploadImage}>
          <input type="file" name="image" onChange={this.getFile} />
          <input type="submit" value="Upload" />
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    prop: state.prop,
  };
};
export default connect(
  mapStateToProps,
  { addImage, handleInputValueChange },
)(UploadImageForm);
