/* eslint-disable no-undef */
import '../../enzymeConfig';
import App from '../../App';
import { getConnectedComponent } from './test-helpers';

describe('Render app components', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = getConnectedComponent(
      App,
      {},
      { match: { params: { username: 'Mwibutsa' } } },
    );
  });
  it('should render app component', () => {
    expect(wrapper.length).toBe(1);
  });
});
