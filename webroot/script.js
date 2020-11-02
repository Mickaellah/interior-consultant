const buttonExit = document.querySelector('.masthead__navigation--exit');
const menu = document.querySelector('.label_menu');
const navigation = document.querySelector('.masthead__navigation');

function handleClick() {
    navigation.style.display = "none";
}

function handleMenu() {
    navigation.style.display = "block";
}

buttonExit.addEventListener('click', handleClick);
menu.addEventListener('click', handleMenu);