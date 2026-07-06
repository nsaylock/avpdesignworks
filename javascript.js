const topNav = document.getElementById('top-nav');
const navHoverBox = document.getElementById('nav-hover-box');
const logo = document.getElementById('logo');

navHoverBox.addEventListener('mouseenter', transition_nav);
topNav.addEventListener('mouseleave', transition_nav);

function transition_nav() {
  topNav.classList.toggle('open');
  logo.classList.toggle('open');
}

const cobraButton = document.getElementById('cobra-button');
cobraButton.addEventListener('click', ()=> {
  event.preventDefault();
  cobraButton.classList.add('do-button-jump');
  setTimeout(()=>{
    cobraButton.classList.remove('do-button-jump');
    window.location.href = 'pages/cobra.html';
  },520);
})