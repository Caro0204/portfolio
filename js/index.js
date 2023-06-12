//variablen "btn",henviser til ".toggle-btn"
const btn = document.querySelector(".toggle-btn");
//variablen "menu", henviser til ".main-menu"
const menu = document.querySelector(".main-menu");

// funktionen "toggleMenu()" med følgende funktionalitet
function toggleMenu() {
  // toggle klassen "shown" på menu vha. classList.toggle
  menu.classList.toggle("shown");

  // variablen "menuShown" siger, at menu-variablen indeholder klassen "shown" via classList.contains("shown")
  const menuShown = menu.classList.contains("shown");

  // Spørger om "menuShown" i if-sætningen nedenfor (=> if (menuShown)), og udskift teksten
  if (menuShown) {
    console.log(menuShown);
    // sætter btn.textContent til "Luk", hvis menuShown er "true"
    btn.textContent = "LUK";
  } else {
    console.log(menuShown);
    // sætter btn.textContent til "Menu", hvis menuShown er "false"
    btn.textContent = "MENU";
  }
}

// Tilføjet et klik-event til "btn", der sætter toggleMenu-funktionen i gang
btn.addEventListener("click", toggleMenu);
