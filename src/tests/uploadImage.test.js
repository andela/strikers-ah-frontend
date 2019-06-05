import '../enzymeConfig';
import { getConnectedComponent } from './profile/test-helpers';
import UploadImage from '../components/common/UploadImageForm';

describe('TEST UPLOAD IMAGE FORM', () => {
  let wrapper;
  let uploadForm;
  let event;
  beforeEach(() => {
    wrapper = getConnectedComponent(UploadImage, {}, { toggleForm: jest.fn() });
    uploadForm = wrapper.instance();
    event = {
      target: { files: ['firstFile'], name: 'image' },
      preventDefault: jest.fn(),
    };
  });

  test('on file changes', () => {
    uploadForm.getFile(event);
    const { state } = uploadForm;
    expect(state.files).toBe('firstFile');
  });

  test('on image upload', () => {
    uploadForm.uploadImage(event);
    const { state } = uploadForm;
    expect(state.files).toEqual({});
  });
});
