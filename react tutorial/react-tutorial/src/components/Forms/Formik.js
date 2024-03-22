import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function FormikForm() {
  const handleSubmit = (values) => {
    // Handle form submission using the values object
  };

  return (
    <Formik initialValues={{ inputValue: '' }} onSubmit={handleSubmit}>
      <Form>
        <Field type="text" name="inputValue" />
        <ErrorMessage name="inputValue" component="div" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default FormikForm;
