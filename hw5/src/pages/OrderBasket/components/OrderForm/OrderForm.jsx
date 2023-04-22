import { NumericFormat } from 'react-number-format';
import { PatternFormat } from 'react-number-format';
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionSetOrder } from "../../../../reducer";
import { validationSchema } from "./validation";
import { Input } from "../../../../components/Form";

import "./OrderForm.scss";

const OrderForm = ({ price }) => {
  //const formOrder = useSelector((state) => state.form.data);
  const orders = useSelector((state) => state.order.orderList);
  const countTotal = orders
    .map(({ count }) => count)
    .reduce((prev, curr) => prev + curr, 0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="page">
      <Formik
        //initialValues={formOrder}
        onSubmit={(values, { resetForm }) => {
          console.log("Your order:", JSON.stringify(orders));
          console.log("Your information:", JSON.stringify(values));
          dispatch(actionSetOrder([]));
          resetForm();
          navigate("/");
          
        }}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <Form className="form">
            <div className="form-container">
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
              <Input
                type="text"
                name="phone"
                placeholder="Enter your Phone"
                label={"Phone"}
                error={errors.phone && touched.phone}
              />   

                
            </div>

            <div className="checkout-total">
              <h4 className="checkout-total__hading">Total</h4>
              <dl className="checkout-total__row js-delivery-info">
                <dt className="checkout-total__label">
                  {" "}
                  {countTotal > 1
                    ? `${countTotal} products`
                    : `${countTotal} product`}{" "}
                  for the sum
                </dt>
                <dd className="checkout-total__value">{price} $</dd>
              </dl>
              <dl className="checkout-total__row js-delivery-info">
                <dt className="checkout-total__label">Delivery</dt>
                <dd className="checkout-total__value">Free</dd>
              </dl>
              <dl className="checkout-total__row checkout-total__row_type_bordered">
                <dt className="checkout-total__label">To be paid</dt>
                <dd className="checkout-total__value_size_large total-price">
                  {price}
                  <span className="currency">$</span>
                </dd>
              </dl>
              <button type="submit" className="checkout-total__submit">
                I confirm the order
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default OrderForm;
