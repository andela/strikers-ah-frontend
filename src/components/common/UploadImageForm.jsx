import React, { Component } from 'react';
import { connect } from 'react-redux';
import DropZone from 'react-dropzone';
import resetOrientation from 'reset-image-orientation';
import CropImage from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import {
  addImage,
  handleInputValueChange,
} from '../../redux/actions/formActions';

/**
 * @author Mwibutsa Floribert
 * @returns { * }  ---
 */
class UploadImageForm extends Component {
  /**
   * @author mwibutsa Floribert
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.state = {
      file: {},
      imageSource: null,
      crop: {
        aspect: 1 / 1,
        width: 200,
        height: 200,
      },
      rotationDegrees: 0,
    };
  }

  /**
   * @author Mwibutsa Floribert
   * @returns { 8 } --
   */

  toggleModal = event => {
    const { toggleForm } = this.props;
    const modalContainer = document.querySelector('#modal-container');
    if (event.target === modalContainer) {
      toggleForm();
    }
  };

  /**
   * @author Mwibutsa Floribert
   * @param { * } acceptedFiles --
   * @returns { * } --
   */
  handleDrop = acceptedFiles => {
    const currentFile = acceptedFiles[0];
    this.reader = new FileReader();
    this.reader.onload = () =>
      resetOrientation(currentFile, orientedFile => {
        this.setState({ imageSource: orientedFile });
      });
    this.reader.readAsDataURL(currentFile);
  };

  /**
   * @author Mwibutsa Floribert
   * @param { * } crop --
   * @returns { * } --
   */
  handleCropChange = crop => {
    this.setState({ crop });
  };

  /**
   * @author Mwibutsa Floribert
   * @param { * } image --
   * @returns { * } --
   */
  handleImageLoaded = image => {
    this.imageReference = image;
  };

  /**
   * @author Mwibutsa Floribert
   * @param { * } crop --
   * @returns { * } --
   */
  handleCropComplete = crop => {
    this.getCroppedImage(crop);
  };

  // GET CROPPED IMAGE

  /**
   * @author Mwibutsa Floribert
   * @param { * } crop --
   * @returns { * } --
   */
  getCroppedImage = async crop => {
    await this.previewCroppedImage(this.imageReference, crop, 'profile.jpeg');
  };

  /**
   * @author Mwibutsa Floribert
   * @param { * } image --
   * @param { * } crop --
   * @param { * } fileName --
   * @returns { * } --
   */
  previewCroppedImage = (image, crop, fileName = 'profile.jpeg') => {
    if (image && crop.width && crop.height) {
      const previewSection = document.querySelector('#previewSection');
      const scaleX = image.naturalWidth / image.width;
      const scaleY = image.naturalHeight / image.height;
      previewSection.width = crop.width;
      previewSection.height = crop.height;

      // create a drawing context (2d)

      const context2D = previewSection.getContext('2d');

      // draw an Image to preview
      context2D.drawImage(
        image,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width,
        crop.height,
      );

      // process an image to uploadable and viewable

      return new Promise(resolve => {
        // convert previewSection image to a file
        previewSection.toBlob(blob => {
          blob.name = fileName;
          // create cropped image url
          this.croppedImageURL = '';
          window.URL.revokeObjectURL(this.croppedImageURL);
          this.croppedImageURL = window.URL.createObjectURL(blob);
          this.setState({ file: previewSection.toDataURL('image/jpeg') });
          resolve(this.croppedImageURL);
        }, 'image/jpeg');
      });
    }
  };

  /**
   * @author Mwibutsa Floribert
   * @param { * } e --
   * @returns { * } --
   */
  uploadImage = e => {
    e.preventDefault();
    const { currentUserInfo } = this.props;
    const { addImage: uploadImage } = this.props;
    const { file } = this.state;
    uploadImage({ image: file, userInfo: currentUserInfo });
    const { toggleForm } = this.props;
    toggleForm();
  };

  /**
   * @author Mwibutsa Floribert
   * @returns { * } --
   */
  render() {
    const { toggleForm } = this.props;
    const { imageSource, crop, rotationDegrees } = this.state;
    return (
      <div
        role="presentation"
        test-data="uploadImageComponent"
        onKeyDown={() => {}}
        className="upload-image-modal"
        onClick={this.toggleModal}
        id="modal-container"
      >
        <style />
        <div className="upload-page" id="modal">
          <h1 className="text-center web-heading">Set a profile picture</h1>
          <div className="drop-zone">
            <DropZone className="dropzone" onDrop={this.handleDrop}>
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()} className="dropzone">
                  <input {...getInputProps()} />
                  <p className="drop-message">
                    Clikc or drag and drop your Image here to Upload
                  </p>
                </div>
              )}
            </DropZone>
          </div>
          {imageSource !== null && (
            <div className="crop">
              <div className="crop-section">
                <div className="cropper">
                  <CropImage
                    src={imageSource}
                    crop={crop}
                    onChange={this.handleCropChange}
                    onComplete={this.handleCropComplete}
                    onImageLoaded={this.handleImageLoaded}
                    minHeight={200}
                    minWidth={200}
                    maxHeight={250}
                    maxWidth={250}
                    style={{ transform: `rotate(${rotationDegrees}deg)` }}
                    className="crop-tool"
                  />
                </div>
                <div className="separator" />
                <div className="crop-preview" id="crop-preview">
                  <h3 className="preview-heading">Preview</h3>
                  <canvas
                    id="previewSection"
                    className="preview-section crop-tool"
                  />
                </div>
              </div>
            </div>
          )}
          <button type="button" className="btn btn-cancel" onClick={toggleForm}>
            Cancel
          </button>
          {imageSource && (
            <React.Fragment>
              <button
                type="button"
                className="btn btn-upload"
                onClick={this.uploadImage}
              >
                Upload
              </button>
            </React.Fragment>
          )}
        </div>
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
