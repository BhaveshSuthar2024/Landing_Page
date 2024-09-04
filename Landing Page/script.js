document.getElementById("sign_up_button").addEventListener("click",function() {
    document.getElementById("sign_up_container").style.display = "block";
    document.getElementById("sign_in_container").style.display = "none";
});
document.getElementById("sign_in_button").addEventListener("click",function() {
    document.getElementById("sign_in_container").style.display = "block";
    document.getElementById("sign_up_container").style.display = "none";
});
document.getElementById("extra_3").addEventListener("click",function() {
    document.getElementById("sign_in_container").style.display = "none";
    document.getElementById("sign_up_container").style.display = "block";
});
document.getElementById("extra_4").addEventListener("click",function() {
    document.getElementById("sign_up_container").style.display = "none";
    document.getElementById("sign_in_container").style.display = "block";
});
document.getElementById("sign_in_button_2").addEventListener("click",function() {
    document.getElementById("signin_form").submit();
});
document.getElementById("sign_up_button_2").addEventListener("click",function() {
    document.getElementById("signup_form").submit();
});
document.getElementById("sign_in_button").addEventListener("click",function() {
    document.getElementById("sign_in_button").style.backgroundColor = "chartreuse";
    document.getElementById("sign_in_button").style.borderColor = "rgb(99, 197, 0)";
    document.getElementById("sign_up_button").style.backgroundColor = "#1760a6";
    document.getElementById("sign_up_button").style.borderColor = "#124d83";
});
document.getElementById("sign_up_button").addEventListener("click",function() {
    document.getElementById("sign_in_button").style.backgroundColor = "#1760a6";
    document.getElementById("sign_in_button").style.borderColor = "#124d83";
    document.getElementById("sign_up_button").style.backgroundColor = "chartreuse";
    document.getElementById("sign_up_button").style.borderColor = "rgb(99, 197, 0)";
});