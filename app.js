const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navBarLinks = document.getElementsByClassName('navbar-links')[0]
console.log(toggleButton)
console.log(navBarLinks)
toggleButton.addEventListener('click', all)
let one = document.querySelectorAll('.navbar-links')
let a = document.getElementById('h')
let b = document.getElementById('a')
let c = document.getElementById('p')
let d = document.getElementById('d')
let e = document.getElementById('c')
a.addEventListener('click', display)
b.addEventListener('click', display)
c.addEventListener('click', display)
d.addEventListener('click', display)
e.addEventListener('click', display)
console.log(a)
// one.addEventListener('click',display)
function display() {
  navBarLinks.classList.toggle('active')
  menuBtn.classList.remove('open');
  menuOpen = false; 
}
function all() {
  navBarLinks.classList.toggle('active')
}

let readMore = document.querySelector('.btn-read')
readMore.addEventListener('click', showmore)

function showmore() {
  let content = document.getElementById('readmore')
  let content1 = document.getElementById('readmore')

  if (content.style.display === 'block') {
    content.style.display = 'none'
    readMore.textContent = 'Read more'
  } else {
    content.style.display = 'block'
    readMore.textContent = '^'
  }
}


const menuBtn = document.querySelector('.main-btn');
let menuOpen = false;
menuBtn.addEventListener('click',()=>{
  if(!menuOpen){
    menuBtn.classList.add('open');
    menuOpen = true;
  }
  else{
    menuBtn.classList.remove('open');
    menuOpen = false; 
  }
})