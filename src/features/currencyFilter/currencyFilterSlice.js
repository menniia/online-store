
const setCurrency = currency => {
    return {
        type: "currencyFilter/setCurrency",
        payload: currency
    }
}


const initialCurrencyFilter = "GHS";
const currencyFilterReducer = (currencyFilter = initialCurrencyFilter, action) => {
    switch (action.type) {
        case "currencyFilter/setCurrency": {
            return action.payload
        }
        default: {
            return currencyFilter
        }
    }
}

export { setCurrency, currencyFilterReducer }