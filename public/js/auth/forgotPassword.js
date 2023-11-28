(function() {
    setTimeout(() => {
        maskCpf("cpf");
    }, 250);
})();

/**
 *
 */
function send(event) {
    event.preventDefault();

    let formIsValid = validateForm("forgot-form");

    if (formIsValid && !getIsLoading()) {
        const obj = {
            cpf: normalizeNumber($("#cpf").val())
        };

        setIsLoading(true, "send-button");
        const endpoint = url("forgot-password");
        request(endpoint, "POST", obj, _onSendSuccess, _onSendFail);
    }
}

/**
 *
 */
function _onSendSuccess(response) {
    setIsLoading(false, "send-button");
    redirect(`new-password?cpf=${response.cpf}`);
}

function _onSendFail(error) {
    setIsLoading(false, "send-button");
    const message = getErrorMessage(error);
    toast("Ops!", message, "danger");
}
