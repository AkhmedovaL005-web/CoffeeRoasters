// Hamma coffee-cards konteynerlarini topamiz
const allGroups = document.querySelectorAll(".coffee-cards");

allGroups.forEach(group => {
  const cards = group.querySelectorAll(".coffee-card");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      // Faqat shu guruhdagi (3 ta) kartalardan active ni olib tashlaymiz
      cards.forEach(c => c.classList.remove("active"));

      // Bosilgan kartaga active qo‘shamiz
      card.classList.add("active");

      console.log(`Selected option: ${card.dataset.choice}`);
    });

    // Accessibility: Enter yoki Space bosilganda ham ishlasin
    card.addEventListener("keypress", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        card.click();
      }
    });
  });
});


// Header
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav__list");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navList.classList.toggle("active");

  // Accessibility
  const expanded = hamburger.getAttribute("aria-expanded") === "true";
  hamburger.setAttribute("aria-expanded", !expanded);
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
