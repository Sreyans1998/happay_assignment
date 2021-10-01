import cardData from '../Utility/ItemData'

let initialState = {
    Items: [],
    No_items: 0
};

const changeTheQuantity = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT" : return{
            ...state,
        }
        case "DECREMENT" : return {
            ...state
        }
        case "ADDITEM" :
            let {id, name, final_price, Quantity, original_price } = cardData.filter(item => item.id === action.payLoad)[0]
            console.log(name)
            return {
                ...state, No_items: state.No_items + 1, 
                    Items:[{
                            id: id,
                            name: name,
                            Quantity: Quantity,
                            final_price: final_price,
                            original_price: original_price
                        }
                    ]
            }
        case "REMOVEITEM" :
            console.log("Yaha tak a gaya remmovewala"+action.payLoad)
            return {
                ...state, No_items: state.No_items - 1
            }
        default: return state;
    }
}

export default changeTheQuantity;