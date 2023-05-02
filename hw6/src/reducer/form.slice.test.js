import formSlice from "./form.slice";
import { actionForm} from "../reducer"

const initialState = {
    data:{
        firstName: "",
        lastName: "",
		age: "",
		address: "",
		phone: "",
        order:[],
    }
}

describe('Form reducer work', () => {
    test('should return the initial state', () => {
        expect(formSlice(undefined, { type: undefined })).toEqual(initialState);
    });

    test('should changed form data', () => {
        expect(formSlice(initialState, { type: actionForm, payload: {
            firstName: "Krystyna",
            lastName: "",
            age: "",
            address: "",
            phone: "",
            order:[],
        } })).toEqual({
            data: {
                firstName: "Krystyna",
                lastName: "",
                age: "",
                address: "",
                phone: "",
                order:[],
            },
        })
    });
});
