// document.querySelector('.hamburger').addEventListener('click',()=>{
//     document.querySelector('.nav-links').classList.toggle('active');
// });
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
