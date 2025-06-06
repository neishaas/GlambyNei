// Fungsi untuk switch antar section di menu navigasi
function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(sec => {
    if (sec.id === sectionId) {
      sec.classList.add('active');
    } else {
      sec.classList.remove('active');
    }
  });

  // Update active class pada tombol navigasi
  const navBtns = document.querySelectorAll('nav button.nav-btn');
  navBtns.forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('onclick')?.includes(sectionId)) {
      btn.classList.add('active');
    }
  });
}

// Fungsi toggle tutorial: buka/tutup konten tutorial
function toggleTutorial(contentId, btn) {
  const content = document.getElementById(contentId);
  if (!content) return;

  if (content.style.display === 'none' || content.style.display === '') {
    content.style.display = 'block';
    btn.textContent = 'Sembunyikan Tutorial';
  } else {
    content.style.display = 'none';
    btn.textContent = 'Lihat Tutorial';
  }
}

// Validasi dan kirim form kontak
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const phone = this.phone.value.trim();
  const message = this.message.value.trim();

  if (!name || !email || !phone || !message) {
    alert('Mohon isi semua field dengan lengkap!');
    return;
  }

  // Validasi email sederhana
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Format email tidak valid!');
    return;
  }

  // Validasi nomor telepon sederhana (angka, +, -, spasi)
  const phoneRegex = /^[0-9+\-\s()]+$/;
  if (!phoneRegex.test(phone)) {
    alert('Format nomor telepon tidak valid!');
    return;
  }

  alert(`Terima kasih, ${name}! Pesan kamu sudah kami terima.`);
  this.reset();
});

