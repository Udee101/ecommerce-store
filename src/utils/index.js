import axios from "axios";
import * as Yup from 'yup'

export const http = axios.create();

export const baseUrl = () => {
  return 'https://fakestoreapi.com'
}

export const formatTitle = (string, length) => {
  let text = string.slice(0, length)
  return `${text}...`
};

export const formatMoney = (price) => {
  let currentNairaValue = 1450.00
  let priceInNaira = currentNairaValue * price
  return `${String.fromCodePoint(0x20A6) + Intl.NumberFormat().format(priceInNaira)}`
};

export const checkoutFormSchema = Yup.object().shape({
  first_name: Yup.string().required('First name is required'),
  last_name: Yup.string().required('Last name is required'),
  phone: Yup.string().required('Phone number is required'),
  address: Yup.string().required('Address is required'),
  city: Yup.string().required('City is required'),
  payment_method: Yup.string().required('Payment method is required'),
})
