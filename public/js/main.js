//     ajaxPost();
let ajaxPost = function (user, pass) {
    console.log("url");
    let xhttp1 = new XMLHttpRequest();
    xhttp1.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            check_user(this.response)

        }
        // else if (this.readyState == 4 && this.status == 400) {
        //     console.log(this);
        //     console.log("Error 400 NO RESPONSE");

        // }

    };
    user_post = `{
        "userName": "${user}",
        "password": "${pass}"
    }`
    xhttp1.open("POST", "http://localhost:5005/getJason");
    xhttp1.setRequestHeader("Content-type", "application/json");
    xhttp1.send(user_post);

};

document.getElementById("userSpan").style.display = "none";
document.getElementById("userSpanLabel").style.display = "none";
document.getElementById("passSpan").style.display = "none";
document.getElementById("passSpanLabel").style.display = "none";



function myFunction() {

    let user = $("#user")[0].value;
    let pass = $("#pass")[0].value;

    if (user === "" && pass === "") {

        document.getElementById("userSpan").style.display = "block";
        document.getElementById("userSpanLabel").style.display = "block";
        document.getElementById("passSpan").style.display = "block";
        document.getElementById("passSpanLabel").style.display = "block";

    } else if (user === "") {

        console.log("not user found");
        document.getElementById("userSpan").style.display = "block";
        document.getElementById("userSpanLabel").style.display = "block";
        document.getElementById("passSpan").style.display = "none";
        document.getElementById("passSpanLabel").style.display = "none";

    } else if (pass === "") {

        document.getElementById("userSpan").style.display = "none";
        document.getElementById("userSpanLabel").style.display = "none";
        document.getElementById("passSpan").style.display = "block";
        document.getElementById("passSpanLabel").style.display = "block";

    } else {

        document.getElementById("userSpan").style.display = "none";
        document.getElementById("userSpanLabel").style.display = "none";
        document.getElementById("passSpan").style.display = "none";
        document.getElementById("passSpanLabel").style.display = "none";

        ajaxPost(user, pass);

    }



}


function check_user(answer) {
    if (answer === "true") {
        alert("ورود موفقیت آمیز");
    } else {
        alert("کاربری با این نام وجود نداشت")
    }
}