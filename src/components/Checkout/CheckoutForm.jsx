import { useFormik } from "formik";
import { checkoutFormSchema } from "../../utils";
import Button from "../shared/Button";
import FormInput from "../shared/FormInput";

const CheckoutForm = () => {

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      phone: "",
      address: "",
      city: "",
      postal_code: "",
      payment_method: ""
    },
    validationSchema: checkoutFormSchema,
    onSubmit: (values) => {
      console.log(values);
    }
  })

  return (
    <form action="" onSubmit={handleSubmit} className="w-full py-8">
      <div className="space-y-4 mb-4">
        <div className="grid md:grid-cols-2 gap-4">
          <FormInput 
            type='text'
            placeholder='First Name'
            name='first_name'
            containerClass='grid'
            inputClass='input text-gray-600'
            touched={touched}
            errors={errors}
            value={values.first_name}
            onBlur={handleBlur}
            onChange={handleChange}
          />

          <FormInput 
            type='text'
            placeholder='Last Name'
            name='last_name'
            containerClass='grid'
            inputClass='input text-gray-600'
            touched={touched}
            errors={errors}
            value={values.last_name}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </div>

        <div>
          <FormInput 
            type='text'
            placeholder='Phone'
            name='phone'
            containerClass='grid'
            inputClass='input text-gray-600'
            touched={touched}
            errors={errors}
            value={values.phone}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </div>

        <div>
          <FormInput 
            type='text'
            placeholder='Address'
            name='address'
            containerClass='grid'
            inputClass='input text-gray-600'
            touched={touched}
            errors={errors}
            value={values.address}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <FormInput 
            type='text'
            placeholder='City'
            name='city'
            containerClass='grid'
            inputClass='input text-gray-600'
            touched={touched}
            errors={errors}
            value={values.city}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        
          <FormInput 
            type='text'
            placeholder='Postal Code'
            name='postal_code'
            containerClass='grid'
            inputClass='input text-gray-600'
            value={values.postal_code}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </div>

        <div className="md:pr-2 md:w-1/2 relative">
          <FormInput 
            isselectfield='true'
            name='payment_method'
            containerClass='grid relative'
            touched={touched}
            errors={errors}
            value={values.payment_method}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </div>

        <Button 
          type='submit' 
          label='Make Payment'
          className='btn btn_primary w-36'
        />
      </div>
    </form>
  )
}

export default CheckoutForm
