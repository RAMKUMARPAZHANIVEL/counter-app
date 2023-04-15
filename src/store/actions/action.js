export function setCardData(cart){
    return{
        type : "SET_CART_DATA",
        payload : cart,
    }
}

export function addItem(item){
    return{
        type : "ADD_ITEM",
        payload : item,
    }
}

export function decreaseNumber(id){
    return{
        type : "DECREASE_NUMBER",
        payload : id,
    }
}

export function increaseNumber(id){
    return{
        type : "INCREASE_NUMBER",
        payload : id,
    }
}

export function resetItem(){
    return{
        type : "RESET_NUMBER"
        }
}

export function clearCartItems() {
    console.log("cart cleared")
    return {
        type : "CLEAR_CART"
    }
}