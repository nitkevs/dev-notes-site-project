let items;
let menu = document.getElementById('sidebar-first');
let openMenuButton = document.getElementById('open-menu-button');
let closeMenuButton = document.getElementById('close-menu-button');
openMenuButton.addEventListener('click', function() {
    menu.style.opacity = '1';
    menu.style.zIndex = '3';
    items = document.querySelectorAll('#sidebar-first ul.menu a, #sidebar-first .field-content a, #sidebar-first .h2-container h2, #sidebar-first .tagclouds-term a');
  for (i = 0; i < items.length; i++) {
    items[i].style.transitionProperty = 'transform';
    items[i].style.transitionDelay = i/150  + 's';
    items[i].style.transform = 'translateX(0%)';
  }
});

closeMenuButton.addEventListener('click', function() {
   menu.style.opacity = '0';
   setTimeout(function() {
     menu.style.zIndex = '-1';
     for (i = 0; i < items.length; i++) {
     items[i].style.transitionProperty = 'none';
     items[i].style.transform = 'translateX(-100%)';
     }
   }, 300);
});


