
import {
    ADD_TO_CART,
    REMOVE_ITEM,
    SUB_QUANTITY,
    ADD_QUANTITY,
    ADD_SHIPPING,
    ADD_ORDER_STATE,
    CLEAR_ADDED_ITEMS,
    SET_IS_ADMIN,
    SET_IS_LOGIN,
    SET_USER,
    SET_OPTIONS,
    SET_OPTION_VALUE,
    SET_IS_CHECKED
} from './action-types/cart-actions'

//add cart action
export const addToCart= (product)=>{
    return{
        type: ADD_TO_CART,
        product
    }
}
//remove item action
export const removeItem=(product)=>{
    return{
        type: REMOVE_ITEM,
        product
    }
}
//subtract qt action
export const subtractQuantity=(product)=>{
    return{
        type: SUB_QUANTITY,
        product
    }
}
//add qt action
export const addQuantity=(product)=>{
    return{
        type: ADD_QUANTITY,
        product
    }
}

export const addOrderState=(order)=>{
    return{
        type: ADD_ORDER_STATE,
        order
    }
};


export const clearAddedItems=()=>{
    return{
        type: CLEAR_ADDED_ITEMS,
    }
};

export const setIsAdmin=(isAdmin)=>{
    return{
        type: SET_IS_ADMIN,
        isAdmin
    }
};

export const setIsLogin=(isLogin)=>{
    return{
        type: SET_IS_LOGIN,
        isLogin
    }
};

export const setCheckedOptions=(checked_options)=>{
    return{
        type: SET_OPTIONS,
        checked_options
    }
};

export const optionValue=(checked_options)=>{
    return{
        type: SET_OPTION_VALUE,
        checked_options
    }
};

export const isChecked=(is_checked)=>{
    return{
        type: SET_IS_CHECKED,
        is_checked
    }
};

export const setUser=(user)=>{
    return{
        type: SET_USER,
        user
    }
};