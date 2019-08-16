const intialState = {
    scoreList: [],
    isLoading: false,
    isRejected: false,
    isFulfilled: false
}
const score = (state = intialState, action) => {
    switch (action.type) {
        case 'GET_SCORE_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case 'GET_SCORE_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            }
        case 'GET_SCORE_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                scoreList: action.payload.data
            }
        default:
            return state
    }
}

export default score