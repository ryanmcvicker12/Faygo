document.addEventListener("DOMContentLoaded",() => {
    const loginForm = document.querySelector("#login");
    const createAccountForm= document.querySelector("#CreateAccount");
    const forgotPasswordForm = document.querySelector("#ForgotPassword"); 

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        // removes a string form a class attribute
        e.preventDefault();  

        createAccountForm.classList.remove("form--hidden");
        loginForm.classList.add("form--hidden");

    });

    document.querySelector("#linkLogin").addEventListener("click", e => {

        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");

    });

    document.querySelector("#linkforgotPassword").addEventListener("click", e =>{
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.add("form--hidden");
        forgotPasswordForm.classList.remove("form--hidden");
        
    })
});