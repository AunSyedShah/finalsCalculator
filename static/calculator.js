function calculateMark() {
    let quizObt = document.getElementById("quizObt").value;
    let quizTot = document.getElementById("quizTot").value;
    let percent = document.getElementById("percent").value;
    let calculatedMark = (quizObt / quizTot) * percent;
    document.getElementById("answer").innerHTML = calculatedMark + " will be added in Finals";
}