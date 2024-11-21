import { inventoryData } from "../../../data"


const loadData = data => {
    return {
        type: "inventory/loadData",
        payload: inventoryData
    }
}

const initialInventory = [];
const inventoryReducer = (inventory = initialInventory, action) => {
    switch (action.type) {
        case "inventory/loadData": {
            return action.payload
        }
        default: {
            return inventory
        }
    }
}

export { inventoryReducer, loadData }