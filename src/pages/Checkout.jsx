import SectionHeader from "../components/SectionHeader"
import CheckoutForm from "../components/checkout/CheckoutForm"

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

        <CheckoutForm />
      </div>
    </section>
  )
}

export default Checkout
