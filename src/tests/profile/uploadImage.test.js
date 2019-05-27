/* eslint-disable no-undef */
import '../../enzymeConfig';
import UploadImageForm from '../../components/common/UploadImageForm';
import { findByTestAttribute, getConnectedComponent } from './test-helpers';

describe('Test Upload Image Model', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = getConnectedComponent(UploadImageForm, {}, {});
  });
  it('should render upload Image form', () => {
    const uploadModal = findByTestAttribute(wrapper, 'uploadImageComponent');
    expect(uploadModal.length).toBe(1);
  });
});
