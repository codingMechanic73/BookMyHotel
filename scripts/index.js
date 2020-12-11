const viewMoreBtnEle = document.getElementsByClassName("cities-section__view-more")[0];
const citiesSectionMore = document.getElementsByClassName("cities-section--row2")[0];

viewMoreBtnEle.addEventListener('click', () => {
    citiesSectionMore.classList.toggle('visible');
    if (viewMoreBtnEle.textContent === "View more") {
        viewMoreBtnEle.textContent = "View less";
    } else {
        viewMoreBtnEle.textContent = "View more";
    }

})