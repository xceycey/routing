import React from 'react'
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import validations from "./validations"
import './styles.css'

function Contact() {
  const { handleSubmit, handleChange,handleBlur, values, isSubmitting, errors ,touched} = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    },
    onSubmit: async (values, bag) => {
      await new Promise(r => setTimeout(r, 1000))
      console.log(values);
      if (values.email=='test@test.com'){
        return bag.setErrors({email:'Bu mail adresi zaten kullanılıyor.'})
      }

      bag.resetForm()
    },
    validationSchema: validations,
  });
  return (
    <div>
      <h2>İletişim</h2>

      <form onSubmit={handleSubmit} className='form'>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            placeholder="Jane"
            value={values.firstName}
            onChange={handleChange("firstName")}
            disabled={isSubmitting}
            onBlur={handleBlur("firstName")} />
          {
            errors.firstName &&touched.firstName && <div className='error'>{errors.firstName}</div>
          }

        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            placeholder="Doe"
            value={values.lastName}
            onChange={handleChange("lastName")}
            disabled={isSubmitting} 
            onBlur={handleBlur("lastName")}/>
          {
            errors.lastName &&touched.lastName && <div className='error'>{errors.lastName}</div>
          }
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
            value={values.email}
            onChange={handleChange("email")}
            disabled={isSubmitting}
            onBlur={handleBlur("email")}
          />
          {
          errors.email&&touched.email && <div className='error'>{errors.email }</div>
        }
        </div>

        <div>
          <label htmlFor="email">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Mesajınız..."
            value={values.message}
            onChange={handleChange("message")}
            disabled={isSubmitting}
            onBlur={handleBlur("message")}
          />
          {
          errors.message &&touched.message && <div className='error'>{errors.message }</div>
        }
        </div>

        <button type="submit" disabled={isSubmitting}>Submit</button>
      </form>
    </div>
  )
}

export default Contact