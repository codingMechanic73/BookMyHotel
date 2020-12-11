const bookingFormEle = document.forms["booking"];
const noOfAdultsEle = bookingFormEle["adults"];
const nameEle = bookingFormEle["name"];
const toDateEle = bookingFormEle["to_date"];
const fromDateEle = bookingFormEle["from_date"];
const totalEle = bookingFormEle["total"];
const bookingSubmitBtnEle = document.getElementsByClassName("form-input-submit")[0];
let charge = 1000;

let noOfAdults = 1, name = '', fromDate, toDate, total = "Rs. 0";


const renderFormChange = () => {
    noOfAdults = noOfAdultsEle.value;
    const fromDate = new Date(fromDateEle.value);
    const toDate = new Date(toDateEle.value);
    const diffTime = Math.abs(toDate - fromDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (!isNaN(noOfAdults * diffDays * charge) && fromDate < toDate) {
        bookingSubmitBtnEle.disabled = false;
        totalEle.value = `Rs. ${noOfAdults * diffDays * charge}`;
    } else {
        bookingSubmitBtnEle.disabled = true;
        totalEle.value = "";
    }
}

const setMinDateAndMinTotal = () => {
    let today = new Date(), day = today.getDate(), month = today.getMonth() + 1, year = today.getFullYear();
    if (day < 10) {
        day = '0' + day
    }
    if (month < 10) {
        month = '0' + month
    }
    today = year + '-' + month + '-' + day;
    tommorow = year + '-' + month + '-' + (day + 1);

    fromDateEle.setAttribute("min", today);
    fromDateEle.setAttribute("value", today);
    toDateEle.setAttribute("min", tommorow);
    toDateEle.setAttribute("value", tommorow);
    totalEle.value = "Rs. 1000";
}

renderFormChange();
setMinDateAndMinTotal();

