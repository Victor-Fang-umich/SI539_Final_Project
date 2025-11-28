// Footer Year - From W3School
window.addEventListener("load", function() {	
    document.getElementById("year").innerHTML = new Date().getFullYear();
    console.log("This displays the copyright year.");
});


// Slideshow - From W3School
const home_check = document.getElementById("home_page_current");
let slideIndex = 1;
showSlides(slideIndex);

function plus_slides(n) {
  showSlides(slideIndex += n);
}

function current_slide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("my_slides");
  let dots = document.getElementsByClassName("dot");

  if (home_check){
    if (n > slides.length) {slideIndex = 1}    

    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" dot_active", "");
    }

    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " dot_active";

    console.log("Slideshow is working!");
  }
}

// Slideshow 2 - From W3School
let slideIndex_2 = 1;
showSlides_2(slideIndex_2);

function plus_slides_2(n_2) {
  showSlides_2(slideIndex_2 += n_2);
}

function current_slide_2(n_2) {
  showSlides_2(slideIndex_2 = n_2);
}

function showSlides_2(n_2) {
  let i_2;
  let slides_2 = document.getElementsByClassName("my_slides_2");
  let dots_2 = document.getElementsByClassName("dot_2");

  if (home_check){
    if (n_2 > slides_2.length) {slideIndex_2 = 1}    

    if (n_2 < 1) {slideIndex_2 = slides_2.length}

    for (i_2 = 0; i_2 < slides_2.length; i_2++) {
      slides_2[i_2].style.display = "none";  
    }

    for (i_2 = 0; i_2 < dots_2.length; i_2++) {
      dots_2[i_2].className = dots_2[i_2].className.replace(" dot_2_active", "");
    }

    slides_2[slideIndex_2-1].style.display = "block";  
    dots_2[slideIndex_2-1].className += " dot_2_active";

    console.log("Slideshow 2 is working!");
  }
}


// Burger Menu - From W3School
function burgerMenu() {
  var x = document.getElementById("mobile_nav_links"); // Navition options (ex: Home, About, etc)
  var y = document.getElementById("unclick_menu");  // Burger menu Icon
  var z = document.getElementById("click_menu");    // Close Icon
  var ss = document.getElementById("padding_space");   // Make the menu wider when clicked

  // Hide menu
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.display = "block";
    z.style.display = "none";

    ss.style.padding = "0px";
    ss.style.borderRadius = "15px";
    ss.style.width = "75px";
    ss.style.backgroundColor = "rgba(18, 18, 18, 0.5)";
    console.log('Menu is now hidden.')
  } 
  // Show menu
  else {
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "block";

    ss.style.padding = "20px 50px 20px 50px";
    ss.style.borderRadius = "15px";
    ss.style.width = "150px";
    ss.style.backgroundColor = "rgba(18, 18, 18, 1)";
    console.log('Menu is now shown.')
  }
}

// Remove focus after clicking by mouse
// Resource: https://stackoverflow.com/questions/79325687/remove-button-focus-state-after-click
window.addEventListener('click', (e) => {
  const target = e.target 
  if(!target.classList.contains('dot')) { return }
  console.log('Successfully clicked the dot!')
  target.blur()
})
window.addEventListener('click', (e) => {
  const target = e.target 
  if(!target.classList.contains('dot_2')) { return }
  console.log('Successfully clicked the dot!')
  target.blur()
})
window.addEventListener('click', (e) => {
  const target = e.target 
  if(!target.classList.contains('prev')) { return }
  console.log('Successfully clicked the previous slide!')
  target.blur()
})
window.addEventListener('click', (e) => {
  const target = e.target 
  if(!target.classList.contains('next')) { return }
  console.log('Successfully clicked the next slide!')
  target.blur()
})



// Change Icon Image/Color
  /* Resource
    Author: Google
    Date: 2025
    Title of Code: Change Icon Image/Color
    Type: AI-generated source code
    Availability: https://gemini.google.com/ 
  */
const close_button = document.getElementById('click_menu');
const menu_button = document.getElementById('unclick_menu');
const close_icon_image = document.getElementById('close_icon');
const menu_icon_image = document.getElementById('menu_icon');

// Part 1: For Close Icon
function changeImageSrc_close(newSrc) { // Function to change the image source
  close_icon_image.src = newSrc;
}

close_button.addEventListener('focus', function() { // Add event listener for focus event
  changeImageSrc_close('images/Close_Icon_Focus.png');
  console.log('Icon is now yellow.')
});

close_button.addEventListener('blur', function() { // Add event listener for blur (loss of focus) event
  changeImageSrc_close('images/Close_Icon.png');
  console.log('Icon is now white.')
});

// Part 2: For Menu Icon
function changeImageSrc_menu(newSrc) { // Function to change the image source
  menu_icon_image.src = newSrc;
}

menu_button.addEventListener('focus', function() { // Add event listener for focus event
  changeImageSrc_menu('images/Menu_Icon_Focus.png');
  console.log('Icon is now yellow.')
});

menu_button.addEventListener('blur', function() { // Add event listener for blur (loss of focus) event
  changeImageSrc_menu('images/Menu_Icon.png');
  console.log('Icon is now white.')
});




// // Get the modal - Fron W3School
// var modal = document.getElementById("myModal");

// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.querySelectorAll(".myImages");
// // var img = document.getElementById("myImg");
// var modalImg = document.getElementById("img_1");
// var captionText = document.getElementById("caption");

// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }
// img.addEventListener('keydown', function(event) {
//     // Check if the 'Enter' key was pressed
//     if (event.key === 'Enter') {
//       modal.style.display = "block";
//       modalImg.src = this.src;
//       captionText.innerHTML = this.alt;
//       // Prevent the default action (if any)
//       event.preventDefault(); 
//     }
// });

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() { 
//   modal.style.display = "none";
// }

// // When the user clicks on <span> (x) using keyboard, close the modal
// span.addEventListener('keydown', function(event) {
//     // Check if the 'Enter' key was pressed
//     if (event.key === 'Enter') {
//       modal.style.display = "none";
//       // Prevent the default action (if any)
//       event.preventDefault(); 
//     }
// });







// Get the modal, caption, and the image inside the modal once
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img_1");    // does it have to be img_1 ??
var captionText = document.getElementById("caption");

// Get all images that share the 'myImages' class
var images = document.querySelectorAll(".myImages");

// Loop through all images and attach the event listeners
images.forEach(function(img) {
  // Function to open the modal (used by both click and keydown)
  function openModal() {
    modal.style.display = "block";
    modalImg.src = img.src; // Use the src of the specific image clicked
    captionText.innerHTML = img.alt; // Use the alt of the specific image clicked
  }

  // Handle click event
  img.onclick = openModal;

  // Handle keyboard event (Enter key) for accessibility
  img.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      openModal();
      event.preventDefault(); // Prevent default action
    }
  });
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks on <span> (x) using keyboard, close the modal
span.addEventListener('keydown', function(event) {
    // Check if the 'Enter' key was pressed
    if (event.key === 'Enter') {
      modal.style.display = "none";
      // Prevent the default action (if any)
      event.preventDefault(); 
    }
});

// Optional: Close the modal if the user clicks outside of the image content
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
