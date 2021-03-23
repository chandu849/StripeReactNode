import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51IVhJtIoDfZAb7a9PQGkrqJaOAvIcBCJ7CkuPq4mugcOeTlrDeUgmnNP4waicUgqJFXsnTYgOkISDMHWc0Cr8CGG0020XVkaEx"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}
