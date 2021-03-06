import React from 'react'
import { FormBox, InputField, InputSubHeading, Error } from '../masterCss'
import { Formik } from 'formik'
import Button from '../button'

function Register2({ setReg2 }) {
  return (
    <>
      <Formik
        initialValues={{ child_name: '', child_birth: '', gender: '' }}
        validate={values => {
          const errors = {}
          if (!values.child_name) {
            errors.child_name = "Child's name required"
          } else if (!values.child_birth) {
            errors.chiild_birth = "Child's birthday required"
          }
          // else if (!values.gender) {
          //   errors.gender = "Child's gender selection required"
          // }
          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          setReg2(values)
        }}
      >
        {({ isSubmitting }) => (
          <FormBox>
            <InputSubHeading>
              What is your Child's name?
              <InputField type="text" name="child_name" />
              <Error name="child_name" component="div" />
            </InputSubHeading>

            <InputSubHeading>
              When is your child's birthday?
              <InputField
                type="date"
                name="child_birth"
                placeholder="e.g. 20/12/2016"
              />
              <Error name="child_birth" component="div" />
            </InputSubHeading>

            <InputSubHeading>
              What is your child's gender?
              <InputField component="select" name="gender">
                <option name="gender" type="text">
                  Male
                </option>
                <option name="gender" type="text">
                  Female
                </option>
                <option name="gender" type="text">
                  Prefer not to say
                </option>
              </InputField>
              <Error name="gender" component="div"></Error>
            </InputSubHeading>

            <Button
              type="submit"
              disabled={isSubmitting}
              buttonText={'Continue'}
              bottom
            ></Button>
          </FormBox>
        )}
      </Formik>
    </>
  )
}

export default Register2
