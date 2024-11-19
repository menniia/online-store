
const addItem = (itemToAdd) => {
    return {
        type: "cart/addItem",
        payload: itemToAdd
    }
}

const changeItemQuantity = (name, newQuantity) => {
    return {
        type: "cart/changeItemQuantity",
        payload: {
            name,
            newQuantity
        }
    }
}

const initialCart = {}
const cartReducer = (cart = initialCart, action) => {
    switch (action.type) {
        case "cart/addItem": {
            const { name, price } = action.payload;

            // if quantity already exists, increase quantity by 1, else set to 1
            const quantity = cart[name] ? cart[name].quantity + 1 : 1;

            // creating a new item with the current price and updated quantity
            const newItem = { price, quantity };

            // add new item to cart or replace it if it already exists
            return {
                ...cart,
                [name]: newItem
            }
        }
        case "cart/changeItemQuantity": {
            const { name, newQuantity } = action.payload

            // get the item in the cart to update its quantity
            const itemToUpdate = cart[name]

            // create a copy of itemToUpdate and update the quantity prop
            const updatedItem = {
                ...itemToUpdate,
                quantity: newQuantity
            }

            // return a copy of the cart with the updated item
            return {
                ...cart,
                [name]: updatedItem
            }
        }

        default: {
            return cart
        }
    }
}

export { addItem, changeItemQuantity, cartReducer }