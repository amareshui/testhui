const switchToggle=document.querySelector('input[type="checkbox"]');
const toggleIcon=document.getElementById('toggle-icon')
const nav=document.getElementById('nav');
const img1=document.getElementById('img1')

function switchMode(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme','dark')
        darkMode(); 
        imgSwitchMode('dark');       
    }else{
        document.documentElement.setAttribute('data-theme','light')
        lightMode();
        imgSwitchMode('light');
    }
}
function darkMode() {
    toggleIcon.children[0].textContent="โหมดกลางคืน";
    toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
    nav.style.backgroundColor='rgba(0 0 0 / 45%)';
}
function lightMode() {
    toggleIcon.children[0].textContent="โหมดกลางวัน";
    toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
    nav.style.backgroundColor='rgba(255 255 255 / 45%)';
}
function imgSwitchMode(mode) {
    img1.src=`img/undraw_website_${mode}.svg`;
}

switchToggle.addEventListener('change',switchMode);