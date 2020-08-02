let items = document.querySelectorAll('#sidebar-first ul.menu a, #sidebar-first .item-list a, #sidebar-first .h2-container h2, #sidebar-first .tagclouds-term a');
let menu = document.getElementById('sidebar-first');
let openMenuButton = document.getElementById('open-menu-button');
let closeMenuButton = document.getElementById('close-menu-button');
openMenuButton.addEventListener('click', function() {
    menu.style.opacity = "1";
    menu.style.zIndex = "3";
  for (i = 0; i < items.length; i++) {
    items[i].style.transitionDelay = i/50  + "s";
    items[i].style.transform = "translateX(0%)";
  }
});

closeMenuButton.addEventListener('click', function() {
   menu.style.opacity = "0";
   setTimeout(function() {
     menu.style.zIndex = '0';
     for (i = 0; i < items.length; i++) {
     items[i].style.transform = "translateX(-100%)";
     }
   }, 600);
});


