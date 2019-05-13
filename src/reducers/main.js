export default (state = {}, action) => {
    let newState = Object.assign({}, state);
    if (action.type === "Login") {
        newState.logged = true;
        return newState;
    }
    return state;
};
