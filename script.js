console.log("hello from script.js");
const teacher = "Himanshu Malik";
let students = 12;
students = students + 3;
console.log(`${teacher} teaches ${students} students`);


function grade(marks){
    if (marks >= 90) {
        return "A";
    } else if (marks >= 75) {
        return "B";
    } else {
        return "C";
    }
}
console.log(grade(95));
console.log(grade(34));
function batchFee(classNumber){
    if (classNumber === 9) {
        return "5000-6000";
    }
    else if (classNumber === 10) {
        return "5500-6000";
    }
    else if (classNumber === 11) {
        return "6500-7000";
    }
    else if (classNumber === 12) {
        return "7000-8000";
    }
    else {
        return "Not offered";
    }
}
console.log(batchFee(12));
const topic = "Trigonometric Ratios";
console.log(topic.length);
console.log(topic.toUpperCase());
function level(classNumber) {
    if (classNumber <= 10) {
        return "Secondary";
    } else if (classNumber <= 12) {
        return "Senior Secondary";
    } else {
        return "Not Offered";
    }
}
console.log(level(11));

console.log(topic.includes("Ratio"));

const moreBtn = document.querySelector("#more-btn");
const extra = document.querySelector(".extra");
console.log(moreBtn, extra);

moreBtn.addEventListener("click", function () {
    extra.classList.toggle("hidden");
    moreBtn.textContent = extra.classList.contains("hidden") ? "Show more" : "Show less"; });
    
