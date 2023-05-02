import Modal from "./Modal";
import {render, screen, fireEvent} from "@testing-library/react";
import { Provider, useDispatch } from 'react-redux';
import store from "../../store";
import '@testing-library/jest-dom';
import {actionModal} from "../../reducer";

const Component = ({modalTitle,buttonContent})=>{
    const dispatch=useDispatch();
    return(
        <>
            <button dispatch={()=>actionModal(false)}>CLOSE</button>
            <button onClick={()=>{dispatch(actionModal(true))}}>OPEN</button>
            <Modal modalTitle={modalTitle} buttonContent={buttonContent}/>
        </>
    )
}

const MockedProvider=({modalTitle, buttonContent})=>(
    <Provider store={store}>
        <Component modalTitle={modalTitle} buttonContent={buttonContent} />
    </Provider>
)

describe('Modal snapshot testing', ()=>{
    test('should Modal match snapshot', () => {
        const {asFragment} = render(<MockedProvider modalTitle={<h2>Test</h2>} buttonContent="Button"/>);
        fireEvent.click(screen.getByText('OPEN'));
        expect(asFragment()).toMatchSnapshot();
    })
})

describe('Modal close testing background', ()=>{
    test('should Modal background close work', () => {
        const {container}=render(<MockedProvider modalTitle={<h2>Test</h2>} buttonContent="Button"/>);
        
        fireEvent.click(screen.getByText("OPEN"));

        expect(screen.queryByText('Test')).toBeInTheDocument();
        
        fireEvent.click(container.querySelector('.modal-wrapper'));

        expect(screen.queryByText("<h2>Test</h2>")).not.toBeInTheDocument();
    })
})

describe('Modal close testing icon', ()=>{
    test('should Modal icon close work', () => {
        const {container}=render(<MockedProvider modalTitle={<h2>Test</h2>} buttonContent="Button"/>);

        fireEvent.click(screen.getByText('OPEN'));

        expect(container.querySelector('.modal-close')).toBeInTheDocument();

        fireEvent.click(container.querySelector('.modal-close'));

        expect(screen.queryByText("<h2>Test</h2>")).not.toBeInTheDocument();
    })
})