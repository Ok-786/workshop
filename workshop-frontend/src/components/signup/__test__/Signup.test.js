import React from 'react';
import  ReactDOM  from 'react-dom';
import Signup from './../Signup';
import '@testing-library/jest-dom';
import {render} from '@testing-library/react';

it("renders without crashing!", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Signup/>, div);
})



