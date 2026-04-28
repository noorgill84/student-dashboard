function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

// Close menu on click (mobile)
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("navLinks").classList.remove("show");
  });
});

// Loader
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});
