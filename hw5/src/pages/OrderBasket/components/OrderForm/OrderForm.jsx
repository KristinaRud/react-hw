import {Formik, Form} from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionForm,actionConfirm } from "../../../../reducer";
import { validationSchema } from "./validation";
import { Input } from "../../../../components/Form";

import "./OrderForm.scss";

const OrderForm = () => {
  const formOrder = useSelector((state) => state.form.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="page">
      <Formik
       
        initialValues={formOrder}
        onSubmit={(values, { resetForm }) => {
          (()=>{
            dispatch(actionForm({
              ...values,
              order: JSON.parse(localStorage.getItem(`arrOrder`)),
            }));
            dispatch(actionConfirm());
          })();
          console.log(useSelector(state=>state));
          //navigate("/");
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Input
              type="text"
              name="firstName"
              placeholder="Enter your First Name"
              label={"First Name"}
              error={errors.firstName && touched.firstName}
            />
            <Input
              type="text"
              name="lastName"
              placeholder="Enter your Last Name"
              label={"Last Name"}
              error={errors.lastName && touched.lastName}
            />
            <Input
              type="text"
              name="age"
              placeholder="Enter your Age"
              label={"Age"}
              error={errors.age && touched.age}
            />
            <Input
              type="text"
              name="address"
              placeholder="Enter your Address"
              label={"Address"}
              error={errors.address && touched.address}
            />
            <Input type="text" name="phone"
													       placeholder="phone" label={"Phone"}
													       error={errors.phone && touched.phone}/>


            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default OrderForm;
