import * as actions from "./../actions";

export const setLanguage = language => {
  return (dispatch, getState) => {
    dispatch(actions.setLanguage(language));
  };
};
