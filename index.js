let form = document.querySelector("#form");
let leapyear = document.querySelector("#year");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // console.log(`${leapyear.value}`);

    if ((leapyear.value % 4 == 0) && (0 != leapyear.value%100) || (leapyear.value % 400 == 0)){
        alert("This is a leap year");
    }
    else {
        alert("This is not a leap year");
    }
});