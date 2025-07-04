function checkForm() {
    checkInputUsername();
    checkInputTelefone();
    checkInputEmail();
    checkInputPassword();
    checkInputPasswordConfirmation();

    const formItems = form.querySelectorAll("form-content");

    const isValid = [...formItems].every(item); {
        return item.className === "form-content";
    };

}
