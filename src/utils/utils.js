const calculatePrice = (price, currency) => {
    if (currency === "EUR") {
        return price * 0.86
    } else if (currency === "GHS") {
        return price * 16.36
    } else {
        return price
    }
}

const calculateTotalPrice = (cart, currency) => {
    let totalUSD = 0
    Object.keys(cart).forEach((itemName) => {
        totalUSD = cart[itemName].price * cart[itemName].quantity
    })
    return calculatePrice(totalUSD, currency).toFixed(2)
}

const getCurrencySymbol = (currencyFilter) => {
    switch (currencyFilter) {
        case "USD":
            return "$";
        case "GHS":
            return "GH₵";
        case "EUR":
            return "€";
        default:
            return "";
    }
}

export { calculatePrice, calculateTotalPrice, getCurrencySymbol }