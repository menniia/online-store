import { calculateTotalPrice, getCurrencySymbol } from "../../utils/utils";
import { changeItemQuantity } from "./cartSlice";

const Cart = ({ cart, currencyFilter, dispatch }) => {

    const onChangeInputHandler = (name, input) => {
        if (input === "") {
            return;
        }

        // else convert the input to a number and pass it along as the new quantity
        const newQuantity = Number(input);

        // dispatch action to change the quantity of the given name and quantity
        dispatch(changeItemQuantity(name, newQuantity));
    }

    const createCartItem = (name) => {
        const item = cart[name]

        if (item.quantity === 0) {
            return;
        }

        return (
            <li key={name}>
                <p>{name}</p>
                <select
                    className="item-quantity"
                    value={item.quantity}
                    onChange={(e) => onChangeInputHandler(name, e.target.value)}>
                    {[...Array(100).keys()].map((_, index) => (
                        <option value={index} key={index}>
                            {index}
                        </option>
                    ))}
                </select>
            </li>
        )
    }

    // use cart and cartFilter slices to render their data
    const cartElements = [];
    for (let key in cart) {
        cartElements.push(createCartItem(key))
    }
    const total = calculateTotalPrice(cart, currencyFilter);

    return (
        <div id="cart-container">
            <ul id="cart-items">{cartElements}</ul>
            <h3 className="total">
                Total{""}
                <span className="total-value">
                    {getCurrencySymbol(currencyFilter)}
                    {total} {currencyFilter}
                </span>
            </h3>
        </div>
    );
}

export default Cart;