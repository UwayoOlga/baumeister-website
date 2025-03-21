const initHeader = () => {
  const hamburgerIcon = document.getElementById('hamburgerIcon');
  const closeIcon = document.getElementById('closeIcon');
  const closeButton = document.getElementById('closeButton');
  const mobileMenu = document.getElementById('mobileMenu');

  if (!hamburgerIcon || !closeIcon || !mobileMenu || !closeButton) {
      console.error("Header elements not found!");
      return;
  }

  // Open Menu
  hamburgerIcon.addEventListener('click', function() {
      console.log("Hamburger clicked");
      mobileMenu.classList.remove('hidden');
      hamburgerIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
  });

  // Close Menu
  closeIcon.addEventListener('click', function() {
      console.log("Close clicked");
      mobileMenu.classList.add('hidden');
      closeIcon.classList.add('hidden');
      hamburgerIcon.classList.remove('hidden');
  });

  // Close menu with close button inside the menu
  closeButton.addEventListener('click', function() {
      mobileMenu.classList.add('hidden');
      closeIcon.classList.add('hidden');
      hamburgerIcon.classList.remove('hidden');
  });
  

  window.addEventListener('resize', function() {
    if (window.innerWidth >= 1024) { // Adjust the breakpoint as needed
        mobileMenu.classList.add('hidden');
        hamburgerIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    }
});


};

initHeader();
