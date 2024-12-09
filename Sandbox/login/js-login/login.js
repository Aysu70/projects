function change(){   
    const light_navbar =document.querySelector(".navbar");
    light_navbar.classList.toggle("navbar-dark");
    const light_main = document.querySelector(".light");
    light_main.classList.toggle("dark");
}

function sign(){
    const pos = document.querySelector("#logsign");
    pos.classList.remove("loginpos");
    pos.classList.add("signpos");
}
function login(){
    const pos = document.querySelector("#logsign");
    pos.classList.remove("signpos");
    pos.classList.add("loginpos");
}

function passwordshow(){
    const hid = document.querySelector("#eyeslash");
    const shw = document.querySelector("#eye");
    hid.style.display = "none";
    shw.style.display = "block";
    const text = document.querySelector("#password");
    text.type = "text";
}
function passwordhid(){
    const hid = document.querySelector("#eyeslash");
    const shw = document.querySelector("#eye");
    hid.style.display = "block";
    shw.style.display = "none";
    const text = document.querySelector("#password");
    text.type = "password";
}
