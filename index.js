
    const text = document.getElementById("date_today")
    const textDate = new Date();
    const year = textDate.getFullYear();
    const month = textDate.getMonth();
    const day = textDate.getDay();
    const fullDate = (day-1) + "/" + (month+1) + "/" + year
    text.innerHTML = fullDate


find1 = () => {
    const startWork = document.getElementById("DateOfStartWork1").value
    const massage = document.getElementById("DateOfMassage1").value

    const dateStart = new Date(startWork)
    console.log(dateStart);

    const dateMassage = new Date(massage)
    console.log(dateMassage);

    let differenceDate = dateMassage.getTime() - dateStart.getTime();
    let differenceDateInDays = differenceDate / (1000 * 3600 * 24)
    console.log("DAY " + differenceDateInDays);

    let differenceDateInMonth = (differenceDateInDays / 30).toFixed(2)
    console.log("MONTH " + differenceDateInMonth);

    // dateMassage.setDate(dateMassage.getDate() + 30)
    // console.log("NEW_DATE " + dateMassage);

    const printFullDateNEW = document.getElementById("date1")
    const printFullDateNEW_dateA = document.getElementById("date1A")
    const errorInput = document.getElementById("errorInput")

    const oneYEAR = 365;


    if (differenceDateInDays >= oneYEAR) {
        printFullDateNEW.innerHTML = " 30 ימים"
        dateMassage.setDate(dateMassage.getDate() + 30)
        // printFullDateNEW_dateA.innerHTML = dateMassage;
        console.log(dateMassage)

        const full = dateMassage
        const year = full.getFullYear();
        const month = full.getMonth();
        const day = full.getDay();
        const fullDate = day + "/" + (month+1) + "/" + year
        printFullDateNEW_dateA.innerHTML = fullDate;


        errorInput.style.display = "none"

    } else if (differenceDateInMonth < 6 && differenceDateInMonth < 12) {
        printFullDateNEW.innerHTML = differenceDateInMonth * 1 + " ימים"
        dateMassage.setDate(dateMassage.getDate() + (differenceDateInMonth * 1))
        printFullDateNEW_dateA.innerHTML = dateMassage;
        errorInput.style.display = "none"

    } else if (differenceDateInMonth >= 6 && differenceDateInMonth < 12) {
        printFullDateNEW.innerHTML = differenceDateInMonth * 2.5 + " ימים"
        dateMassage.setDate(dateMassage.getDate() + (differenceDateInMonth * 2.5))
        printFullDateNEW_dateA.innerHTML = dateMassage;
        errorInput.style.display = "none"

    } else {
        errorInput.innerHTML = "יש להכניס ערכים לשדות"
    }
}

// ===================================================================================


find2 = () => {
    const startWork = document.getElementById("DateOfStartWork2").value
    const massage = document.getElementById("DateOfMassage2").value

    const dateStart = new Date(startWork)
    console.log(dateStart);

    const dateMassage = new Date(massage)
    console.log(dateMassage);

    let differenceDate = dateMassage.getTime() - dateStart.getTime();
    let differenceDateInDays = differenceDate / (1000 * 3600 * 24)
    console.log("DAY " + differenceDateInDays);

    let differenceDateInMonth = (differenceDateInDays / 30).toFixed(2)
    console.log("MONTH " + differenceDateInMonth);

    const printFullDateNEW = document.getElementById("date2")
    const printFullDateNEW_dateA = document.getElementById("date2A")
    const errorInput = document.getElementById("errorInput2")


    const oneYEAR = 365;

    if (differenceDateInDays >= oneYEAR * 3) {
        printFullDateNEW.innerHTML = "30 ימים"
        dateMassage.setDate(dateMassage.getDate() + 30)
        printFullDateNEW_dateA.innerHTML = dateMassage;
        errorInput.style.display = "none"

    } else if (differenceDateInDays < oneYEAR) {
        printFullDateNEW.innerHTML = differenceDateInMonth * 1 + " ימים"
        dateMassage.setDate(dateMassage.getDate() + (differenceDateInMonth * 1))
        printFullDateNEW_dateA.innerHTML = dateMassage;
        errorInput.style.display = "none"

    } else if (differenceDateInMonth >= 12 && differenceDateInMonth < 14) {
        printFullDateNEW.innerHTML = 14 + 1 + " ימים"
        dateMassage.setDate(dateMassage.getDate() + 15)
        printFullDateNEW_dateA.innerHTML = dateMassage;
        errorInput.style.display = "none"

    } else if (differenceDateInMonth >= 14 && differenceDateInMonth < 16) {
        printFullDateNEW.innerHTML = 14 + 2 + " ימים"
        dateMassage.setDate(dateMassage.getDate() + 16)
        printFullDateNEW_dateA.innerHTML = dateMassage;
        errorInput.style.display = "none"

    } else if (differenceDateInMonth >= 16 && differenceDateInMonth < 18) {
        printFullDateNEW.innerHTML = 14 + 3 + " ימים"
        dateMassage.setDate(dateMassage.getDate() + 17)
        printFullDateNEW_dateA.innerHTML = dateMassage;
        errorInput.style.display = "none"

    } else if (differenceDateInMonth >= 18 && differenceDateInMonth < 20) {
        printFullDateNEW.innerHTML = 14 + 4 + " ימים"
        dateMassage.setDate(dateMassage.getDate() + 18)
        printFullDateNEW_dateA.innerHTML = dateMassage;
        errorInput.style.display = "none"

    } else if (differenceDateInMonth >= 20 && differenceDateInMonth < 22) {
        printFullDateNEW.innerHTML = 14 + 5 + " ימים"
        dateMassage.setDate(dateMassage.getDate() + 19)
        printFullDateNEW_dateA.innerHTML = dateMassage;
        errorInput.style.display = "none"

    } else if (differenceDateInMonth >= 22 && differenceDateInMonth < 24) {
        printFullDateNEW.innerHTML = 14 + 6 + " ימים"
        dateMassage.setDate(dateMassage.getDate() + 20)
        printFullDateNEW_dateA.innerHTML = dateMassage;
        errorInput.style.display = "none"
        errorInput.style.display = "none"

    } else if (differenceDateInMonth >= 24 && differenceDateInMonth < 26) {
        printFullDateNEW.innerHTML = 21 + 1 + " ימים"
        dateMassage.setDate(dateMassage.getDate() + 22)
        printFullDateNEW_dateA.innerHTML = dateMassage;
        errorInput.style.display = "none"

    } else if (differenceDateInMonth >= 26 && differenceDateInMonth < 28) {
        printFullDateNEW.innerHTML = 21 + 2 + " ימים"
        dateMassage.setDate(dateMassage.getDate() + 23)
        printFullDateNEW_dateA.innerHTML = dateMassage;
        errorInput.style.display = "none"

    } else if (differenceDateInMonth >= 28 && differenceDateInMonth < 30) {
        printFullDateNEW.innerHTML = 21 + 3 + " ימים"
        dateMassage.setDate(dateMassage.getDate() + 24)
        printFullDateNEW_dateA.innerHTML = dateMassage;
        errorInput.style.display = "none"

    } else if (differenceDateInMonth >= 30 && differenceDateInMonth < 32) {
        printFullDateNEW.innerHTML = 21 + 4 + " ימים"
        dateMassage.setDate(dateMassage.getDate() + 25)
        printFullDateNEW_dateA.innerHTML = dateMassage;
        errorInput.style.display = "none"

    } else if (differenceDateInMonth >= 32 && differenceDateInMonth < 34) {
        printFullDateNEW.innerHTML = 21 + 5 + " ימים"
        dateMassage.setDate(dateMassage.getDate() + 26)
        printFullDateNEW_dateA.innerHTML = dateMassage;
        errorInput.style.display = "none"

    } else if (differenceDateInMonth >= 34 && differenceDateInMonth < 36) {
        printFullDateNEW.innerHTML = 21 + 6 + " ימים"
        dateMassage.setDate(dateMassage.getDate() + 27)
        printFullDateNEW_dateA.innerHTML = dateMassage;
        errorInput.style.display = "none"

    } else {
        errorInput.innerHTML = "יש להכניס ערכים לשדות"
    }
}

$(document).ready(function () {
    $(".btn1").click(function () {
        $(".salary1").css({ "display": "block" });
        $(".salary2").css({ "display": "none" });
    });
});

$(document).ready(function () {
    $(".btn2").click(function () {
        $(".salary2").css({ "display": "block" });
        $(".salary1").css({ "display": "none" });
    });
});



