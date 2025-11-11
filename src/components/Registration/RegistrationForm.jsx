import { useState } from "react";
import { Formik, Form, Field } from "formik";

import * as Yup from "yup";
import "./Cart.css";



const RegistrationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Անունը չափազանց կարճ է")
    .max(30, "Անունը չափազանց երկար է")
    .required("Անունը պարտադիր է"),
  lastName: Yup.string()
    .min(2, "Ազգանունը չափազանց կարճ է")
    .max(30, "Ազգանունը չափազանց երկար է")
    .required("Ազգանունը պարտադիր է"),
  username: Yup.string()
    .min(4, "Լոգինը պետք է լինի առնվազն 4 նիշ")
    .max(20, "Լոգինը շատ երկար է")
    .required("Լոգինը պարտադիր է"),
  email: Yup.string().email("Սխալ էլ․ հասցե").required("Էլ․ փոստը պարտադիր է"),
  password: Yup.string()
    .min(6, "Գաղտնաբառը պետք է լինի առնվազն 6 նիշ")
    .required("Գաղտնաբառը պարտադիր է"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Գաղտնաբառերը չեն համընկնում")
    .required("Կրկնեք գաղտնաբառը"),
});

const RegistrationForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="form-container">
      
      <div className="logopic">
        <h1>Գրանցում</h1>
    
      </div>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={RegistrationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          setIsModalOpen(true);
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form className="registration-form">
            <div className="form-group">
              <label>Անուն</label>
              <Field name="firstName" placeholder="Անուն" />
              {errors.firstName && touched.firstName && (
                <div className="error">{errors.firstName}</div>
              )}
            </div>

            <div className="form-group">
              <label>Ազգանուն</label>
              <Field name="lastName" placeholder="Ազգանուն" />
              {errors.lastName && touched.lastName && (
                <div className="error">{errors.lastName}</div>
              )}
            </div>

            <div className="form-group">
              <label>Լոգին</label>
              <Field name="username" placeholder="Լոգին" />
              {errors.username && touched.username && (
                <div className="error">{errors.username}</div>
              )}
            </div>

            <div className="form-group">
              <label>Էլ․ փոստ</label>
              <Field name="email" type="email" placeholder="example@mail.com" />
              {errors.email && touched.email && (
                <div className="error">{errors.email}</div>
              )}
            </div>

            <div className="form-group">
              <label>Գաղտնաբառ</label>
              <Field name="password" type="password" placeholder="Գաղտնաբառ" />
              {errors.password && touched.password && (
                <div className="error">{errors.password}</div>
              )}
            </div>

            <div className="form-group">
              <label>Կրկնեք գաղտնաբառը</label>
              <Field
                name="confirmPassword"
                type="password"
                placeholder="Կրկնեք գաղտնաբառը"
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <div className="error">{errors.confirmPassword}</div>
              )}
            </div>

            <button type="submit">Հաստատել</button>
            
          </Form>
        )}
      </Formik>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>✅ Գրանցումը հաջողվեց!</h2>
            <p>Շնորհակալություն, Մեր կայքից օգտվելու համար։</p>
        
      
            <button onClick={() => setIsModalOpen(false)}>❌</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
