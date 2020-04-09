var mb = document.getElementsByClassName("mealbutton");
var i;

for (i = 0; i < mb.length; i++) {
  mb[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var mealDesc = this.nextElementSibling;
    if (mealDesc.style.maxHeight) {
        mealDesc.style.maxHeight = null;
    } else {
        mealDesc.style.maxHeight = mealDesc.scrollHeight + "px";
    } 
  });
}
//Above code used from w3 schools animated menu web page
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
