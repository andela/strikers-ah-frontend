import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-localstorage-mock';

export default Enzyme.configure({
  adapter: new Adapter(),
});
