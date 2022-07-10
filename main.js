window.addEventListener("scroll", onScroll);

onScroll();

//Gerencia os diversos scrolls da página//
function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();

  activateMenuAtCurrentSection(home);
  activateMenuAtCurrentSection(services);
  activateMenuAtCurrentSection(about);
  activateMenuAtCurrentSection(contact);
}

function activateMenuAtCurrentSection(section) {
  //linha alvo
  const targetLine = scrollY + innerHeight / 2;

  //verificar se a seção passou da linha
  //quais dados vou precisar?

  //o topo da seção
  const sectionTop = section.offsetTop;

  //a altura da seção
  const sectionHeight = section.offsetHeight;

  //O topo da seção chegou ou ultrapassou a linha alvo
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop;

  //verificar se a base está abaixo da linha alvo
  //quais dados vou precisar?

  //a seção termina onde?

  const sectionEndsAt = sectionTop + sectionHeight;

  //final da seção passou da linha alvo
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

  //limites da seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetLine;

  const sectionId = section.getAttibute("id");
  const menuElement = document.querySelector(`.menu a [href*=${sectionId}]`);

  menuElement.classList.remove("active");
  if (sectionBoundaries) {
    menuElement.classList.add("active");
  }
}

//Mostrar o Navigation ao fazer scroll
function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
}
//Mostrar botão back to top ao fazer scroll
function showBackToTopButtonOnScroll() {
  if (scrollY > 400) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}

ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
}).reveal(`#home,
 #home img, 
 #home .stats, 
 #services,
 #services header,
 #services .card
 #about,
 #about header,
 #about .content`);
