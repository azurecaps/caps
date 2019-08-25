const InitialCapsuleState  = {
    fetching: false,
    fetched: false,
    items: [],
    error: null,
    nbResult: 0,
};

export const CapsuleReducer = (state = InitialCapsuleState, action) => {
    switch (action.type) {
        case "FETCH_CAPSULE_PENDING": {
            return {...state, fetched: false, fetching: true};
        }
        case "FETCH_CAPSULE_FULFILLED": {
            const {data, nbResult} = action.payload.data;
            return {
                ...state,
                fetching: false,
                fetched: true,
                error: null,
                items: data ? data : [],
                nbResult: nbResult
            };
        }

        case "FETCH_CAPSULE_REJECTED": {
            let error = action.payload;
            switch (error.response.status) {
                case 404:
                    error = {
                        title: error.response.data.title,
                        code: 404
                    };
                    break;
                default:
            }
            return {
                ...state,
                fetching: false,
                items: [],
                nbResult: 0,
                error
            };
        }

        default:
            return state;
    }
};

