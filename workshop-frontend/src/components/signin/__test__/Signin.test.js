import React from 'react';
import  ReactDOM  from 'react-dom';
import Signin from './../Signin';
import '@testing-library/jest-dom';
import {render} from '@testing-library/react';

it("renders without crashing!", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Signin/>, div);
})

it("renders Signin correctly!", () => {
    const {getByTestId} = render(<Signin />);
    expect(getByTestId('password')).toBeVisible(true);

})

