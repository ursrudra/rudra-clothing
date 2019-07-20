import SHOP_DATA from '../../pages/shoppage/shop.data';
const INITIAL_STATE = {
 collections:SHOP_DATA
}

export const shopReducer = (state = INITIAL_STATE,action)=>{
    switch (action.type) {
        
        default:
            return state;
    }
}