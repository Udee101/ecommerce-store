import SectionHeader from "../components/shared/SectionHeader"
import CheckoutForm from "../components/Checkout/CheckoutForm"
import { checkout } from "../assets"

const Checkout = () => {
  return (
    <section className="mt-24 p-4">
      <div className="max-w-site mx-auto py-8">
        <SectionHeader
          firtsText={'check'}
          secondText={'out'}
        />

        <p className="mt-6">
          <strong>Kindly fill out the form to proceed with your order</strong>
        </p>

        <div className="lg:grid lg:grid-cols-3 lg:items-center">
          <div className="lg:col-span-2">
            <CheckoutForm />
          </div>
          <img src={checkout} alt="" className="hidden lg:block " />
        </div>
      </div>
    </section>
  )
}

export default Checkout
