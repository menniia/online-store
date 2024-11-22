import { useEffect } from "react"
import { loadData } from "./inventorySlice"
import { addItem } from "../cart/cartSlice"
import { calculatePrice, getCurrencySymbol } from "../../utils/utils"


const Inventory = ({ inventory, currencyFilter, dispatch }) => {
    const onMount = () => {
        dispatch(loadData())
    }
    useEffect(onMount, [dispatch]);

    const onClickHandler = inventoryItem => {
        dispatch(addItem(inventoryItem))
    }

    const createInventoryItem = (inventoryItem) => {
        const { price, name, img } = inventoryItem
        const displayPrice = calculatePrice(price, currencyFilter);

        return (
            <li key={name} className="item">
                <img src={img} alt={""} />
                <h3>{name}</h3>
                <h3 className="price">
                    {getCurrencySymbol(currencyFilter)}
                    {displayPrice.toFixed(2)} {currencyFilter}
                </h3>
                <button
                    onClick={() => onClickHandler(inventoryItem)}
                    className="add-to-cart-button"
                >
                    Add to Cart
                </button>
            </li>
        )
    }

    if (inventory.length === 0) {
        return <p> Sorry, no products are currently available</p>
    }
    return <ul id="inventory-container">{inventory.map(createInventoryItem)}</ul>
}

export default Inventory;