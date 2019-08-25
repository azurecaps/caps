export const setLanguage = language => {
    let lng = language.toLowerCase();
    localStorage.setItem("lng", lng);

    return {
        type: "SET_LANGUAGE",
        language: lng
    };
};
