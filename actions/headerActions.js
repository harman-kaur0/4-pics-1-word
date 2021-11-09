const updateHeader = (text, button) => {
    const header = { text, button }
    return dispatch => {
        dispatch({ type: "HEADER", header })
    }
}