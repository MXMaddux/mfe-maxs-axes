import React from 'react'
import styled from 'styled-components'
import StripeCheckout from '../components/StripeCheckout'

// extra imports

import { useCartContext } from '../store/cart_context'
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
  const { cart } = useCartContext()

  return (
    <main>
      <Wrapper className='page'>
        {cart.length < 1 ? (
          <div className='empty'>
            <h2>Your cart is empty</h2>
            <Link to='/axes' className='btn'>
              fill it
            </Link>
          </div>
        ) : (
          <StripeCheckout />
        )}
      </Wrapper>
    </main>
  )
}
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 13px);
  .empty {
    text-align: center;
  }
  h2 {
    color: var(--clr-primary-9);
  }
`
export default CheckoutPage
