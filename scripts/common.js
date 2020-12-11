const USERNAME = 'UNAME';
const PASSWORD = 'PSK';
const LOGGEDIN = 'LOGGEDIN';

const storageHandle = window.localStorage;

const state = {
    loggedIn: storageHandle.getItem(LOGGEDIN)
}

const addDefaultCreds = (username = "admin", password = "admin") => {
    storageHandle.setItem(USERNAME, username);
    storageHandle.setItem(PASSWORD, password);
}

const headerEle = document.getElementsByTagName("header")[0];
const footerEle = document.getElementsByTagName("footer")[0];


(() => {

    headerEle.innerHTML = `
<a href="./index.html">
                <img class="header__logo" src="./assests/images/logo.png" alt="logo" />
            </a>
            <button type="button" class="header__login-btn btn-light" href="#" data-toggle="modal"
                data-target="#loginModal">Login</button>`;

    footerEle.innerHTML = `
<div class="footer__contact-us ">
                <button type="button" class="btn btn-info" href="./contact.html" data-toggle="modal" data-target="#contactModal">Contact Us</button>
            </div>
            <section class="footer__social-media-section ">
                <a class="social-media-section__link " href="https://facebook.com " target="_blank ">
                    <img class="social-media-section__image " src="./assests/images/facebook.png " alt="instagram " />
                </a>
                <a class="social-media-section__link " href="https://instagram.com " target="_blank ">
                    <img class="social-media-section__image " src="./assests/images/instagram.png " alt="instagram " />
                </a>
                <a class="social-media-section__link " href="https://twitter.com " target="_blank ">
                    <img class="social-media-section__image " src="./assests/images/twitter.png " alt="twitter " />
                </a>
            </section>
            <div class="footer__copyright ">
                <span>&#x000A9; 2020 ROOM SEARCH PVT LTD.</span>
            </div>
`;
})();

const loginBtnEle = document.getElementsByClassName("header__login-btn")[0];
const usernameInputEle = document.getElementsByClassName("input__login-username")[0];
const passwordInputEle = document.getElementsByClassName("input__login-password")[0];
const loginSubmitEle = document.getElementsByClassName("input__login-btn")[0];



const loginHandler = (e) => {
    if (state.loggedIn === 'true') {
        state.loggedIn = false;
        storageHandle.setItem(LOGGEDIN, false);
        loginBtnEle.textContent = "Login";
        location.reload();
    }
}

const loginSubmitHandler = (e) => {
    const username = storageHandle.getItem(USERNAME);
    const password = storageHandle.getItem(PASSWORD);

    if (usernameInputEle.value === username && passwordInputEle.value === password) {
        state.loggedIn = true;
        storageHandle.setItem(LOGGEDIN, true);
        loginBtnEle.textContent = "Logout";
        alert("Successfully LoggedIn !");
    } else {
        alert("Invalid Credentials");
    }
}

loginBtnEle.addEventListener('click', loginHandler);

loginSubmitEle.addEventListener('click', loginSubmitHandler);

addDefaultCreds();

if (state.loggedIn === "true") {
    loginBtnEle.textContent = "Logout"
}


