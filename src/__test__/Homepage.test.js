import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import Homepage from '../components/Homepage';
import store from '../redux/configureStore';

describe('HomePage tests', () => {
  test('should render', () => {
    const homepage = render(
      <Provider store={store}>
        <BrowserRouter>
          <Homepage />
        </BrowserRouter>
        ,
      </Provider>,
    );

    expect(homepage).toMatchSnapshot();
  });
});
