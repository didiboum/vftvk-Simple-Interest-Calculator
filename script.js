function compute() {
    var principal = document.getElementById("principal").value;
    if (principal <= 0) {
        alert("Enter a positive number");
    } else {
        var rate = document.getElementById("rate").value;
        var years = parseInt(document.getElementById("nbYears").value);
        var interest = principal * years * rate / 100;
        var today = new Date();
        var yyyy = today.getFullYear();
        var actualYear = yyyy + years;
        var textResult = "If you deposit <mark>" + principal + "</mark>,<br>at an interest rate of <mark>" + rate + "</mark>%.";
        textResult = textResult + "<br>You will receive an amount of <mark>" + interest + "</mark>,<br>in the year <mark>" + actualYear + "</mark>";
        document.getElementById('results').innerHTML = textResult;
    }
}
function updateRateValue(val) {
    document.getElementById('rateVal').value = val;
}
function checkPrincipalValue(val) {
    if (val <= 0) {
        alert("Enter a positive number");
    }
}