import axios from 'axios'
import {showAlert} from './alert'

const stripe = Stripe('pk_test_51IAafACuibjm3eLz2uiM1HWUA1CjLEp3DzwszuvNOqeVyJnA0LRFsolZ5oid7BRXqxvjb0jEH0pRS3JhJRwJPmtm00fTY4yxMg')

export const bookTour = async tourId => {
    // 1) Get checkout session from endpoint API

    try {
        const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`)
        // console.log(session)

        // 2) Create checkout form + charge credit card
        await stripe.redirectToCheckout({
            sessionId: session.data.session.id
        })

    } catch (err) {
        console.log(err)
        showAlert('error', err)
    }



}