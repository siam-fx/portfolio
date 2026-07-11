// ---- Terminal typing effect ----
function typeInto(el, text, speed, onDone){
  let i = 0;
  el.textContent = "";
  function step(){
    if(i < text.length){
      el.textContent += text.charAt(i);
      i++;
      setTimeout(step, speed);
    } else if(onDone){
      onDone();
    }
  }
  step();
}

document.addEventListener("DOMContentLoaded", () => {
  const nameEl = document.getElementById("typedName");
  const roleEl = document.getElementById("typedRole");

  if(nameEl && roleEl){
    typeInto(nameEl, "Hey, I'm Siam.", 45, () => {
      setTimeout(() => {
        typeInto(roleEl, "Welcome to Siam's site", 35);
      }, 250);
    });
  }

  // Fallback avatar: hide broken image, show initials
  const avatarImg = document.getElementById("avatarImg");
  const avatarFallback = document.getElementById("avatarFallback");
  if(avatarImg){
    avatarImg.addEventListener("error", () => {
      avatarImg.style.display = "none";
    });
    avatarImg.addEventListener("load", () => {
      if(avatarImg.naturalWidth > 0){
        avatarFallback.style.display = "none";
      }
    });
  }

  // Mobile nav toggle
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.querySelector(".nav-links");
  if(navToggle && navLinks){
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Footer year
  const yearEl = document.getElementById("year");
  if(yearEl){
    yearEl.textContent = new Date().getFullYear();
  }
});