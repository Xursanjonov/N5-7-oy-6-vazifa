import React, { memo, useState } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import logoIcon from "../../assets/icons/trend.svg";
import warningIcon from "../../assets/icons/warning.svg";
import nextIcon from "../../assets/icons/next.svg";
import hiddenIcon from "../../assets/icons/hidden-icon.svg";
import blockIcon from "../../assets/icons/block-icon.svg";
import "./login.css";

interface MyFormValues {
  password: string;
  email: string;
}

const initialState: MyFormValues = {
  password: "",
  email: "",
};

const Login: React.FC = () => {
  const { t } = useTranslation();
  const [typeInp, setTypeInp] = useState(false);

  const SignupSchema = Yup.object().shape({
    email: Yup.string().email(t("Noto'g'ri email")).required(t("Majburiy")),
    password: Yup.string()
      .min(2, t("Juda kam!"))
      .max(20, t("Juda ko'p!"))
      .required(t("Majburiy")),
  });

  const handleSubmit = (
    values: MyFormValues,
    { setSubmitting }: FormikHelpers<MyFormValues>
  ) => {
    console.log(values);
    setTimeout(() => {
      setSubmitting(false);
      // setValues(initialState)
    }, 2000);
  };

  return (
    <section className="login">
      <Formik
        initialValues={initialState}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="form">
            <div className="form-info">
              <img src={logoIcon} alt="" />
              <h1>Welcome to ByTrend!</h1>
              <p>
                Already have an account?
                <span className="form-sign-up">Sign up</span>
              </p>
            </div>
            <label htmlFor="email">
              <h4>
                Email
                <span>*</span>
              </h4>
              <Field
                className={`inp ${
                  errors.email && touched.email ? "error" : ""
                }`}
                name="email"
                placeholder="Email address"
                type="email"
              />
              <div className="error_message">
                <ErrorMessage name="email" />
              </div>
            </label>
            <label htmlFor="password">
              <h4>
                Password<span>* </span>
                <img className="warning-icon" src={warningIcon} alt="" />
              </h4>
              <div className="password">
                <Field
                  className={` ${
                    errors.password && touched.password ? "error" : ""
                  }`}
                  name="password"
                  type={typeInp ? "text" : "password"}
                  autoComplete="on"
                  placeholder="Password"
                />
                <button
                  type="button"
                  className="passwordBtn"
                  onClick={() => setTypeInp((p) => !p)}
                >
                  <img src={typeInp ? blockIcon : hiddenIcon} alt="" />
                </button>
              </div>
            </label>
            <div className="error_message">
              <ErrorMessage name="password" />
            </div>

            <button
              className={`form-submit ${
                isSubmitting ? "btn-disab" : "btn-color"
              }`}
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting ? "Loading..." : "Continue"}
              <img src={nextIcon} alt="" />
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default memo(Login);
