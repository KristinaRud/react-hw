import Modal from "./Modal";
import {render} from "@testing-library/react";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import store from "../../store";

const Component = ()=>(
    <Provider store={store}>
        <Modal modalTitle="Test" buttonContent="Button"/>
    </Provider>
)

describe('Modal snapshot testing', ()=>{
    test('should Modal match snapshot', () => {
        const {asFragment} = render(<Component/>);
        expect(asFragment()).toMatchSnapshot();
    })
})