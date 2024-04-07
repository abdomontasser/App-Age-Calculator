const days = document.getElementById("Dfield");
const month = document.getElementById("Mfield");
const years = document.getElementById("Yfield");

const calculatedDays = document.getElementById("Dcalculated");
const calculatedMonth = document.getElementById("Mcalculated");
const calculatedYear = document.getElementById("Ycalculated");


const dayslabel=document.getElementById("Dlabel")
const Montlabel=document.getElementById("Mlabel")
const Yearlabel=document.getElementById("Ylabel")

const userYear = new Date().getFullYear();
const userMonth = new Date().getMonth() ;
const userDay = new Date().getDate();

let monthsField 
let daysField


days.addEventListener("input", (e) => {
    const input = parseInt(e.target.value, 10);
    if (isNaN(input) || input > 31 || input < 1 ) {
        dayslabel.classList.add("warning-2")
        days.classList.add("warning")
        calculatedDays.textContent="- -"
    } else {
        dayslabel.classList.remove("warning-2")
        days.classList.remove("warning")
         daysField = userDay - input ;
        
        if (daysField < 0) {
            daysField += 30;
        }
        calculatedDays.textContent = daysField;
    }
});


month.addEventListener("input", (e) => {
    const input = parseInt(e.target.value, 10);
    if (isNaN(input) || input > 12 || input < 1 ) {
        Montlabel.classList.add("warning-2")
        month.classList.add("warning")
        calculatedMonth.textContent="- -"
    } else {
        month.classList.remove("warning")
        Montlabel.classList.remove("warning-2")
         monthsField = userMonth -input ;
        if (monthsField < 0) {
            monthsField += 12;
        }
        calculatedMonth.textContent = monthsField;
    }
});



years.addEventListener("input", (e) => {
    const input = parseInt(e.target.value, 10);
    if (isNaN(input) || input < 0 || input > userYear ) {
        Yearlabel.classList.add("warning-2")
        years.classList.add("warning")
        calculatedYear.textContent="- -"
    } else {
        years.classList.remove("warning")
        Yearlabel.classList.remove("warning-2")
        const yearsField = userYear - input;
        calculatedYear.textContent = yearsField;
    }
});
