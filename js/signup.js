function validEmail() {
    let z = document.forms["signUp"]["email"].value;
    var mailformat = /^([a-z0-9\._]+)@([a-z0-9])+.([a-z]+)(.[a-z]+)?$/;
        if (z.match(mailformat)) {
            document.getElementById("email").style.borderColor = "green";
            document.getElementById("alert_email").style.display = "none";
        } else if (z == "") {
            document.getElementById("alert_signup").style.display = "none";
        }  else {
            document.getElementById("email").style.borderColor = "red";
            window.scrollTo(0, 0);
            document.getElementById("alert_email").style.display = "block";
            document.getElementById("alert_signup").style.display = "none";
        }
}

function checkInputSignup() {
    const arr = ["firstname", "lastname", "email", "password", "passwordcheck"];
    for (const val of arr) { 
    let x = document.forms["signUp"][val].value;
        if (x == "") {
            document.getElementsByName(val)[0].placeholder = "This area can't be blank!";
            document.getElementById(val).classList.add('placeholder_alert');
            document.getElementById(val).style.borderColor = "red";
            document.getElementById("alert_signup").style.display = "none";
            window.scrollTo(0, 0);
        } else {
            document.getElementById(val).style.borderColor = "green";
        }
    }

    let x = document.forms["signUp"]["password"].value;
    let y = document.forms["signUp"]["passwordcheck"].value;
        if (x == "" && y == "") {
            document.getElementsByName("password")[0].placeholder = "This area can't be blank!";
            document.getElementById("password").classList.add('placeholder_alert');
            document.getElementById("password").style.borderColor = "red";
            document.getElementsByName("passwordcheck")[0].placeholder = "This area can't be blank!";
            document.getElementById("passwordcheck").classList.add('placeholder_alert');
            document.getElementById("passwordcheck").style.borderColor = "red";
        } else if (x == y) {
            document.getElementById("password").style.borderColor = "green";
            document.getElementById("passwordcheck").style.borderColor = "green";
            window.scrollTo(0, 0);
            document.getElementById("alert_signup").style.display = "block";
            document.getElementById("alert_password").style.display = "none";
        } else {
            document.getElementById("passwordcheck").classList.add('placeholder_alert');
            document.getElementById("passwordcheck").style.borderColor = "red";
            window.scrollTo(0, 0);
            document.getElementById("alert_password").style.display = "block";
        }
}

function validEmailSignin() {
    let z = document.forms["signIn"]["email_signin"].value;
    var mailformat = /^([a-z0-9\._]+)@([a-z0-9])+.([a-z]+)(.[a-z]+)?$/;
        if (z.match(mailformat)) {
            document.getElementById("email_signin").style.borderColor = "green";
            document.getElementById("alert_email_signin").style.display = "none";
        } else if (z == "") {
        }  else {
            document.getElementById("email_signin").style.borderColor = "red";
            window.scrollTo(0, 0);
            document.getElementById("alert_email_signin").style.display = "block";
        }
}

function checkInputSignin() {
    const arr = ["email_signin", "password_signin"];
    for (const val of arr) { 
    let x = document.forms["signIn"][val].value;
        if (x == "") {
            document.getElementsByName(val)[0].placeholder = "This area can't be blank!";
            document.getElementById(val).classList.add('placeholder_alert');
            document.getElementById(val).style.borderColor = "red"
            window.scrollTo(0, 0);
        } else {
            document.getElementById(val).style.borderColor = "green"
        }
    }
}
