export const setDisplayLogin = data => {
    return {
        type: "DISPLAY_LOGIN",
        payload: data
    }
};

export const setSelectedNotion = data => {
    return {
        type: "SET_SELECTED_NOTION",
        payload: data
    }
};

export const setSelectedNotionType = data => {
    return {
        type: "SET_SELECTED_NOTION_TYPE",
        payload: data
    }
};

export const setSelectedNotionBodyType = data => {
    return {
        type: "SET_SELECTED_NOTION_BODY_TYPE",
        payload: data
    }
};