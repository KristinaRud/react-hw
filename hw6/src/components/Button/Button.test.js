import Button from './Button'
import {fireEvent, render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';


const handleClick = jest.fn();

describe('Button test work', () => {
	test('should Button snapshot', () => {
		const {asFragment} = render(<Button type={'submit'} className='btn-test' content="SUBMIT"/>)
		expect(asFragment()).toMatchSnapshot();
	});

	test('should handle click works', () => {
		render(<Button type={'submit'} className='btn-test' onClick={handleClick} content="SUBMIT"/>)
		const btn = screen.getByText("SUBMIT");
		fireEvent.click(btn);
		expect(handleClick).toHaveBeenCalled();
	});

	test('should have the className', () => {
		render(<Button className={'test'} content="TEST BUTTON"/>);
		const btn = screen.getByText("TEST BUTTON");

		expect(btn).toHaveClass('test');
	});

	test('should have children', () => {
		render(<Button content="TEST BUTTON"/>);
		const btn = screen.getByText("TEST BUTTON");
		expect(btn).not.toBeEmptyDOMElement();
	});
})
