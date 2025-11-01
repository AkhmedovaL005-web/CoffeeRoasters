// Header menu toggle
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav__list");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navList.classList.toggle("active");

  // Accessibility uchun
  const expanded = hamburger.getAttribute("aria-expanded") === "true";
  hamburger.setAttribute("aria-expanded", !expanded);
});

// Mobil ekran bo‘lmaganda menyuni avtomatik yopish
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navList.classList.remove("active");
    hamburger.classList.remove("active");
    hamburger.setAttribute("aria-expanded", false);
  }
});
// === "CREATE YOUR PLAN" SCROLL ===
document.querySelectorAll(".btn a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetSection = document.querySelector(".how-it-works");
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

// === SOCIAL ICON HOVER ANIMATSIYA ===
const socials = document.querySelectorAll(".social-links a");
socials.forEach(icon => {
  icon.addEventListener("mouseenter", () => {
    icon.style.transform = "scale(1.2)";
  });
  icon.addEventListener("mouseleave", () => {
    icon.style.transform = "scale(1)";
  });
});

// === BACK TO TOP TUGMASI ===
const backToTop = document.createElement("button");
backToTop.textContent = "↑";
backToTop.classList.add("back-to-top");
document.body.appendChild(backToTop);

// Tugma stili
Object.assign(backToTop.style, {
  position: "fixed",
  bottom: "30px",
  right: "30px",
  background: "#0E8784",
  color: "#fff",
  border: "none",
  borderRadius: "50%",
  width: "45px",
  height: "45px",
  fontSize: "22px",
  cursor: "pointer",
  display: "none",
  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  transition: "0.3s ease"
});

// Tugma hover effekti
backToTop.addEventListener("mouseenter", () => {
  backToTop.style.background = "#66D2CF";
});
backToTop.addEventListener("mouseleave", () => {
  backToTop.style.background = "#0E8784";
});

// Scroll paytida tugmani ko‘rsatish
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

// Tepaga qaytish
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
