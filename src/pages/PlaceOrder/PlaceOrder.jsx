import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

  const { getTotalCartAmount } = useContext(StoreContext)

  return (
    <form className='place-order'>
      <div className="place-order-left">

      </div>
      <div className="place-order-right">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First name'/>
          <input type="text"placeholder='last name' />
        </div>
        <input type="email" placeholder='Email address' />
        <input type="text" placeholder='street'/>
        <div className="multi-fields">
          <input type="text" placeholder='Zip Code'/>
          <input type="text"placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone number' />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p> GH₵ {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>  GH₵ {getTotalCartAmount()===0 ? 0 : 2} </p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b> GH₵ {getTotalCartAmount()===0 ? 0 : (getTotalCartAmount() + 2)} </b>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
