const inputBtn = document.querySelector(".DOB-Input");

const calcBtn = document.querySelector(".button-click");

const resultOfAge = document.querySelector(".curr-dob");

calcBtn.addEventListener("click",() => {
    if(inputBtn.value == "") {
        alert("Please Enter Your Date of Birth First:");
    } else {
        console.log("Input Button Value", inputBtn.value);
        const dob = new Date(inputBtn.value);
        console.log("dob", dob);
        const dob_year = dob.getFullYear();
        console.log("dob-year", dob_year);

        // Current :
        const now = new Date();
        console.log("now", now);
        const now_year = now.getFullYear();
        console.log("now_year", now_year);
        const age = now_year - dob_year;
        console.log("age", age);

        resultOfAge.innerHTML = "Your Age is :" + age;

    }
});