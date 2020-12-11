const payButton = document.getElementsByClassName("btn-outline-success")[0];


payButton.addEventListener('click', () => {
    alert("Hi, Your booking is successful!")
});


if (state.loggedIn === "true") {
    payButton.disabled = false;
} else {
    payButton.disabled = true;
}
