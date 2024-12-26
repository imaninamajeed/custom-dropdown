document.addEventListener("DOMContentLoaded", () => {
  // wait for the DOM to be fully loaded
  const divDropdown = document.querySelector(".div-dropdown");
  const btnToggle = divDropdown.querySelector(".btn-dropdown-toggle");
  const ulMenu = divDropdown.querySelector(".ul-dropdown-menu");
  const liItems = divDropdown.querySelectorAll(".li-dropdown-item");

  // Toggle dropdown menu
  btnToggle.addEventListener("click", () => {
    // when the button is clicked
    const isOpen = ulMenu.classList.contains("open"); // check if the menu is open
    ulMenu.classList.toggle("open", !isOpen); // toggle the 'open' class
    btnToggle.setAttribute("aria-expanded", !isOpen); // update the aria-expanded attribute
  });

  // Close dropdown if clicked outside
  document.addEventListener("click", (e) => {
    // when the document is clicked
    if (!divDropdown.contains(e.target)) {
      // if the click is outside the dropdown
      ulMenu.classList.remove("open"); // close the menu
      btnToggle.setAttribute("aria-expanded", "false");
    }
  });

  // Handle item selection
  liItems.forEach((item) => {
    // loop through each item
    item.addEventListener("click", () => {
      // when the item is clicked
      // Remove 'selected' class from all items
      liItems.forEach((i) => i.classList.remove("selected")); // remove the 'selected' class

      // Highlight the selected item
      item.classList.add("selected"); // add the 'selected' class

      // Update the button text
      btnToggle.textContent = item.textContent; // update the button text

      // Close the menu after selection
      ulMenu.classList.remove("open"); // close the menu
      btnToggle.setAttribute("aria-expanded", "false"); // update the aria-expanded attribute
    });
  });
});
