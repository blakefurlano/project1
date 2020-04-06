const menuButton = document.getElementById('menubutton');
const navigation = document.getElementById('navigate');
menuButton.addEventListener('click', event => {
    navigation.classList.toggle('open');
    menuButton.classList.toggle('active');
    event.stopPropagation();
});
document.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton.classList.remove('active');
});