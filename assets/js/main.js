document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const menuBox = document.querySelector('.menu-box');
    const closeBtn = document.querySelector('.close-btn');

    hamburger.addEventListener('click', function() {
        if (menuBox.style.display === 'none' || menuBox.style.display === '') {
            menuBox.style.display = 'block';
            hamburger.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            menuBox.style.display = 'none';
            hamburger.innerHTML = '<i class="fa-solid fa-bars-staggered"></i>';
        }
    });

    closeBtn.addEventListener('click', function() {
        menuBox.style.display = 'none';
        hamburger.innerHTML = '<i class="fa-solid fa-bars-staggered"></i>';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const profileDropdown = document.querySelector('.profile-dropdown');
    const profileMenu = document.querySelector('.profile-menu');

    profileDropdown.addEventListener('click', function() {
        profileMenu.classList.toggle('active');
    });
});


  
  
  
// Get all progress-item elements
const progressItems = document.querySelectorAll('.progress-item');

// Loop through each progress item
progressItems.forEach(progressItem => {
    // Get the span and hr elements within each progress-item
    const span = progressItem.querySelector('span');
    const progressBar = progressItem.querySelector('hr');

    // Extract the percentage value from the span content
    const percentage = parseInt(span.textContent);

    // Set the width of the progress bar hr element based on the percentage
    progressBar.style.width = percentage + '%';
});

function toggleDropdown() {
    var dropdownMenu = document.getElementById("dropdownMenu");
    if (dropdownMenu.style.display === "none" || dropdownMenu.style.display === "") {
      dropdownMenu.style.display = "block";
    } else {
      dropdownMenu.style.display = "none";
    }
  }
