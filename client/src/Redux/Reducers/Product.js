import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAIL_REQUEST,
    PRODUCT_DETAIL_SUCCESS,
    PRODUCT_DETAIL_FAIL
} from '../Constants/Product'

// list of Products
export const ProductListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true, products: [], error: null }
        case PRODUCT_LIST_SUCCESS:
            return { loading: false, products: action.payload, totalPage: action.payload.totalPage, page: action.payload.page }
        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload.error }
        default:
            return state
    }
}

// single product by id 
export const ProductDetailReducer = (state = { product: {reviews: []} }, action) => {
    switch (action.type) {
        case PRODUCT_DETAIL_REQUEST:
            return { loading: true, ...state, error: null }
        case PRODUCT_DETAIL_SUCCESS:
            return { loading: false, product: action.payload }
        case PRODUCT_DETAIL_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}