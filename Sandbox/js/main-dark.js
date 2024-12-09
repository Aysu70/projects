function main(){
    const darkandlight = document.querySelector(".default");
    darkandlight.classList.toggle("dark");
}

document.querySelector(".nav-dark-light").addEventListener('click', main);

