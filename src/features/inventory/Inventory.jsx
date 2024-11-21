import { useEffect } from "react"
import { loadData } from "./inventorySlice"
import { addItem } from "../cart/cartSlice"


const Inventory = ({ inventory, currencyFilter, dispatch }) => {
    const onMount = () => {
        dispatch(loadData())
    }
    useEffect(onMount, [dispatch]);

    const onClickHandler = inventoryItem => {
        dispatch(addItem(inventoryItem))
    }

    if (inventory.length === 0) {
        return <p> Sorry, no products are currently available</p>
    }
}

export default Inventory;