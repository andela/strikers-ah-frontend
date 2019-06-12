import '../enzymeConfig';
import { getConnectedComponent } from './profile/test-helpers';
import UploadImage from '../components/common/UploadImageForm';
import imageSource from '../img/icons/search.svg';

describe('TEST UPLOAD IMAGE FORM', () => {
  let wrapper;
  let uploadForm;
  let event;
  let image;
  let modalContainer;
  beforeEach(() => {
    modalContainer = `<div id="modal-container"></div>`;
    document.body.innerHTML += modalContainer;
    wrapper = getConnectedComponent(
      UploadImage,
      {},
      { toggleForm: jest.fn(), onComplete: jest.fn() },
    );
    wrapper.setState({
      imageSource,
    });
    uploadForm = wrapper.instance();
    image = {
      naturalWidth: 110,
      naturalHeight: 110,
      width: 50,
      height: 50,
    };
    event = {
      target: { files: ['firstFile'], name: 'image' },
      preventDefault: jest.fn(),
    };
  });
  test('on image upload', () => {
    uploadForm.uploadImage(event);
    const { state } = uploadForm;
    expect(state.files).toBeUndefined();
  });
  describe('TEST CROPPING IMAGE', () => {
    test('On Crop change', () => {
      uploadForm.handleCropChange({});
      const { state } = uploadForm;
      expect(state.crop).toEqual({});
    });

    test('On Image Loaded', () => {
      const expectedImage = image;
      uploadForm.handleImageLoaded(expectedImage);
      const { imageReference } = uploadForm;
      expect(imageReference).toEqual(expectedImage);
    });

    test('On get cropped Image', async () => {
      uploadForm.handleCropComplete({
        aspect: 1,
        x: 1,
        y: 1,
        width: 1,
        height: 1,
      });
    });

    test('Preview cropped image', async () => {
      window.URL.createObjectURL = jest.fn();
      window.URL.revokeObjectURL = jest.fn();
      document.body.innerHTML += `<canvas id='previewSection' className='preview-section crop-tool' />`;
      const fakeImage = new Image(100, 100);
      await uploadForm.previewCroppedImage(fakeImage, {
        aspect: 1,
        x: 1,
        y: 1,
        width: 1,
        height: 1,
      });
      expect(uploadForm.state.file).toBeDefined();
    });

    test('on toggle Modal', () => {
      const modal = wrapper.find('#modal-container');
      modal.simulate('click', { target: modal });
      modal.simulate('keydown');
    });

    test('on drop', () => {
      uploadForm.handleDrop([new Blob([''], { type: 'image/jpeg' })]);
      uploadForm.reader.onload();
    });
  });
});
