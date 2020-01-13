const initialLoginState = {
    fetching: false,
    fetched: false,
    displayLogin: true,
    items: [],
    error: null,
    nbResult: 0,
};

export const loginReducer = (state = initialLoginState, action) => {
    switch (action.type) {

        case "DISPLAY_LOGIN": {
            return {...state, displayLogin: action.payload};
        }

        case "FETCH_DOCUMENTS_APP_REJECTED": {
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

const initialNotionState = {
    fetching: false,
    fetched: false,
    notion: null,
    selectedType:null,
    bodyContainer:null,
    error: null,
};

export const NotionReducer = (state = initialNotionState, action) => {
    switch (action.type) {

        case "SET_SELECTED_NOTION": {
            return {...state, notion: action.payload};
        }

        case "SET_SELECTED_NOTION_TYPE": {
            return {...state, selectedType: action.payload};
        }

        case "SET_SELECTED_NOTION_BODY_TYPE": {
            // console.log(action.payload);
            return {...state, bodyContainer: action.payload};
        }

        default:
            return state;
    }
};
