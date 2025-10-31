// Footer links should appear to work but not navigate
document.querySelectorAll('.footer-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    alert(`${link.textContent} clicked`);
  });
});
