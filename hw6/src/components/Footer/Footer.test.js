import Footer from "./Footer";
import {render} from "@testing-library/react";

describe('Footer snapshot testing', ()=>{
    test('should Footer match snapshot', () => {
        const {asFragment} = render(<Footer/>);
        expect(asFragment()).toMatchSnapshot();
    })
})