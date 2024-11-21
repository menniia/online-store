import Cart from '../features/cart/Cart'
import CurrencyFilter from '../features/currencyFilter/currencyFilter'
import Inventory from '../features/inventory/Inventory'
import './App.css'

const App = ({ state, dispatch }) => {
  return (
    <div>
      <CurrencyFilter
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

      <Inventory
        inventory={state.inventory}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

      <Cart
        cart={state.cart}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />
    </div>
  )
}

export default App
