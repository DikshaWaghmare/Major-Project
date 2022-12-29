function validate() {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var pno = document.getElementById("pno").value;
  var message = document.getElementById("msg").value;
  var formValid = false;
  var fnameBool = validatefname(fname, formValid);
  var lnameBool = validatelname(lname, formValid);
  var emailBool = validateEmail(email, formValid);
  var pnoBool = validatePhone(pno, formValid);
  var msgBool = validateMessage(message, formValid);

  if (fnameBool && lnameBool && emailBool && pnoBool && msgBool) {
    alert("Form is submitted");
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("pno").value = "";
    document.getElementById("msg").value = "";
  } else {
    alert("Please check all the fields");
  }
}
function validatefname(fname, formValid) {
  if (fname.trim() == "") {
    formValid = false;
    document.getElementById("fname-error").innerHTML = "This field is required";
  } else if (fname.trim().length < 3) {
    formValid = false;
    document.getElementById("fname-error").innerHTML = "This field is invalid";
  } else {
    formValid = true;
    document.getElementById("fname-error").innerHTML = "";
  }

  return formValid;
}
function validatelname(lname, formValid) {
  if (lname.trim() == "") {
    formValid = false;
    document.getElementById("lname-error").innerHTML = "This field is required";
  } else if (lname.trim().length < 3) {
    formValid = false;
    document.getElementById("lname-error").innerHTML = "This field is invalid";
  } else {
    formValid = true;
    document.getElementById("lname-error").innerHTML = "";
  }

  return formValid;
}
function validateEmail(email, formValid) {
  var pattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (email.trim() == "") {
    formValid = false;
    document.getElementById("email-error").innerHTML =
      "This field is required.";
  } else if (!pattern.test(email)) {
    formValid = false;
    document.getElementById("email-error").innerHTML = "This field is invalid.";
  } else {
    formValid = true;
    document.getElementById("email-error").innerHTML = "";
  }

  return formValid;
}
function validatePhone(pno, formValid) {
  var pattern = /[0-9]/;
  if (pno.trim() === "") {
    formValid = false;
    document.getElementById("pno-error").innerHTML = "This field is required";
  } else if (pno.trim().length != 10) {
    formValid = false;
    document.getElementById("pno-error").innerHTML = "This field is invalid";
  } else if (!pattern.test(pno)) {
    formValid = false;
    document.getElementById("pno-error").innerHTML = "This field is invalid";
  } else {
    formValid = true;
    document.getElementById("pno-error").innerHTML = "";
  }

  return formValid;
}
function validateMessage(message, formValid) {
  if (message.trim() == "") {
    formValid = false;
    document.getElementById("msg-error").innerHTML = "This field is required";
  } else {
    formValid = true;
    document.getElementById("msg-error").innerHTML = "";
  }

  return formValid;
}
