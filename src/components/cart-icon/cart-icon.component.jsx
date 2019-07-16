import React from 'react'

import {ReactComponent as ShoppingCartIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
const CartIcon = ({toggleCartHidden, itemsCount}) => {
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingCartIcon className='shopping-icon'/>
      <span className='item-count'>{itemsCount}</span>
    </div>
  )
}

const mapStateToProps = state =>({
  itemsCount: selectCartItemsCount(state)
})
const mapDispatchToProps =  dispatch =>({
 toggleCartHidden: ()=> dispatch(toggleCartHidden())
});
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)
