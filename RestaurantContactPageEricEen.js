function clearErrors() {
    for (var loopCounter = 0;
        loopCounter < document.forms["contactform"].elements.length;
        loopCounter++) {
        if (document.forms["contactform"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {

            document.forms["contactform"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }
}

function resetForm() {
    clearErrors();
    document.forms["contactform"]["name"].value = "";
    document.forms["contactform"]["email"].value = "";
    document.forms["contactform"]["phone"].value = "";
    document.forms["contactform"]["reason"].value = "";
    document.forms["contactform"]["addinfo"].value = "";
    document.forms["contactform"]["been"].value = "";
    document.forms["contactform"]["best"].value = "";
    document.getElementById("submitb").innerText = "Submitted";
    document.forms["contactform"]["name"].focus();
    document.forms["contactform"]["email"].focus();
    document.forms["contactform"]["phone"].focus();
    document.forms["contactform"]["reason"].focus();
    document.forms["contactform"]["addinfo"].focus();
    document.forms["contactform"]["been"].focus();
    document.forms["contactform"]["best"].focus();
}


function validateItems() {
    clearErrors();
    var name = document.forms["contactform"]["name"].value;
    var email = document.forms["contactform"]["email"].value;
    var phone = document.forms["contactform"]["phone"].value;
    var reason = document.forms["contactform"]["reason"].value;
    var addinfo = document.forms["contactform"]["addinfo"].value;
    var been = document.forms["contactform"]["been"].value;
    var best = document.forms["contactform"]["best"].value;
    if (name == "" || isNaN(name)) {
        alert("Name must be filled in.");
        document.forms["contactform"]["name"]
           .parentElement.className = "form-group has-error";
        document.forms["contactform"]["name"].focus();
        return false;
    }
    if (email == "" || isNaN(email)) {
        alert("Email must be filled in.");
        document.forms["contactform"]["email"]
           .parentElement.className = "form-group has-error";
        document.forms["contactform"]["email"].focus();
        return false;
    }
    if (phone == "" || isNaN(phone)) {
        alert("Phone number must be filled in.");
        document.forms["contactform"]["phone"]
           .parentElement.className = "form-group has-error";
        document.forms["contactform"]["phone"].focus();
        return false;
    }
    if (reason == "" || isNaN(reason)) {
        alert("Name must be filled in.");
        document.forms["contactform"]["reason"]
           .parentElement.className = "form-group has-error";
        document.forms["contactform"]["reason"].focus();
        return false;
    }
    if (addinfo == "" || isNaN(addinfo)) {
        alert("Name must be filled in.");
        document.forms["contactform"]["addinfo"]
           .parentElement.className = "form-group has-error";
        document.forms["contactform"]["addinfo"].focus();
        return false;
    }
    if (been == "" || isNaN(been)) {
        alert("Name must be filled in.");
        document.forms["contactform"]["been"]
           .parentElement.className = "form-group has-error";
        document.forms["contactform"]["been"].focus();
        return false;
    }
    if (best == "" || isNaN(best)) {
        alert("Name must be filled in.");
        document.forms["contactform"]["best"]
           .parentElement.className = "form-group has-error";
        document.forms["contactform"]["best"].focus();
        return false;
    }
