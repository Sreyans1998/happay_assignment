export const incNumber = () => {
    return {
        type: "INCREMENT"
    }
}

export const decNumber = () => {
    return {
        type: "DECREMENT"
    }
}
export const addItem = (id) => {
    return{
        type: "ADDITEM",
        payLoad: id
    }
}
export const removeItem = (id) => {
    return {
        type: "REMOVEITEM",
        payLoad: parseInt(id)
    }
}