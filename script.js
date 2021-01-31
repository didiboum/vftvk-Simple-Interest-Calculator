function compute()
{
    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("nbYears").value;
    interest = principal*years*rate/100;
    var today = new Date();
    var yyyy = today.getFullYear();
    actualYear = yyyy+years;
    textResult = "if you deposit " + "principal";
    document.getElementById('results').innerHTML=textresult;
}
function updateRateValue(val) {
    document.getElementById('rateVal').value=val; 
}
function checkPrincipalValue(val) {
    if (val<=0) {
        alert("Enter a positive number"); 
    }
}