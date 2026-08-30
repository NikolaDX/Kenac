import './style.css'
import { initLightbox } from './scripts/lightbox.js';
import { initScrollAnimations } from './scripts/animations.js';
import { initLoadingScreen } from "./scripts/loading.js";

const btn = document.getElementById("menuBtn")
const menu = document.getElementById("mobileMenu")
const menuLinks = menu.querySelectorAll("a")

const line1 = document.getElementById("line1")
const line2 = document.getElementById("line2")
const line3 = document.getElementById("line3")

window.addEventListener('scroll', () => {
  const header = document.querySelector('header')

  if (window.scrollY > 50) {
    header.classList.add('bg-black/80')
  } else {
    header.classList.remove('bg-black/80')
  }
})

btn.addEventListener("click", () => {
  toggleMenu()
  if (!menu.classList.contains("max-h-0")) {
    line1.style.transform = "translateY(4px) rotate(45deg)"
    line2.style.opacity = "0"
    line3.style.transform = "translateY(-4px) rotate(-45deg)"
  } else {
    line1.style.transform = "none"
    line2.style.opacity = "1"
    line3.style.transform = "none"
  }
})

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (!menu.classList.contains("max-h-0")) {
      toggleMenu()
      line1.style.transform = "none"
      line2.style.opacity = "1"
      line3.style.transform = "none"
    }
  })
})

function toggleMenu() {
  menu.classList.toggle("max-h-0")
  menu.classList.toggle("max-h-100")
  menu.classList.toggle("opacity-0")
  menu.classList.toggle("opacity-100")
}

initScrollAnimations();
initLightbox();
initLoadingScreen();