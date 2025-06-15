// script.js
AOS.init();

// Preloader hilang saat halaman dimuat
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) preloader.style.display = "none";
});

// WhatsApp Button Interaktif
document.querySelectorAll('.order-button').forEach(button => {
  button.addEventListener('click', function (e) {
    e.preventDefault();

    const parent = button.closest('.menu-item');
    const menuName = button.getAttribute('data-menu');
    const level = parent.querySelector('.level-select').value;

    if (!level || level === 'Pilih Level') {
      alert('Pilih level dulu ya!');
      return;
    }

    const message = `Halo! Saya ingin pesan ${menuName} dengan ${level}.`;
    const phoneNumber = "6281234567890"; // Ganti dengan nomormu
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(waUrl, '_blank');
  });
});
