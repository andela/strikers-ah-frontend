/* eslint-disable no-undef */
import '../../enzymeConfig';
import App from '../../App';
import { getConnectedComponentNoDive } from './test-helpers';

describe('Render app components', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = getConnectedComponentNoDive(
      App,
      {},
      { match: { params: { username: 'Mwibutsa' } } },
    );
  });
  it('should render app component', () => {
    expect(wrapper.length).toBe(1);
  });
});
