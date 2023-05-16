"use strict";
// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get the parent container element
  var container = document.querySelector(".dig_deeper_container");

  // Create and append the new elements
  for (var i = 0; i < 7; i++) {
    // Create the new info block
    var infoBlock = document.createElement("div");
    infoBlock.classList.add("dig_deeper_info_block");

    // Create the new theme element
    var themeElement = document.createElement("div");
    themeElement.classList.add("dig_deeper_info_block_theme");
    themeElement.textContent = " ";

    // Create the new info element
    var infoElement = document.createElement("div");
    infoElement.classList.add("dig_deeper_info_block_info");
    infoElement.textContent = "";
    // Append the theme and info elements to the info block
    infoBlock.appendChild(themeElement);
    infoBlock.appendChild(infoElement);

    // Append the info block to the container
    container.appendChild(infoBlock);
  }
});
