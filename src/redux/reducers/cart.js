const initialState = {
    items: [],
    total: 0
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            let newItems = [...state.items, action.product];
            let newTotal = state.total + action.product.price;
            return {
                items: newItems,
                total: newTotal
            };
        default:
            return state;
    }
}