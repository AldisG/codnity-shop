import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store/redux/store';
import App from './App';
import '@testing-library/jest-dom'
// import '@testing-library/jest-dom/extend-expect';

const AppElement = (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
)
describe('Render anything', () =>{
  it('Should render anything', () => {
    render(AppElement);
    const react = screen.getByText(/This is displayed as a Route/i)
    expect(react).toBeInTheDocument()
  });
})
