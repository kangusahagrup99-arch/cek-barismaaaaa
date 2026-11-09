// ==========================================================================
// BARISMA Interactive Logic & Main Script
// Badan Riset Maqāṣid - LSQ Ar-Rohmah Yogyakarta
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const closeDrawerBtn = document.getElementById('closeDrawer');
  const drawerOverlay = document.getElementById('drawerOverlay');

  if (hamburgerBtn && mobileDrawer) {
    hamburgerBtn.addEventListener('click', () => {
      mobileDrawer.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    });
  }
  if (closeDrawerBtn && mobileDrawer) {
    closeDrawerBtn.addEventListener('click', () => {
      mobileDrawer.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  }
  if (drawerOverlay && mobileDrawer) {
    drawerOverlay.addEventListener('click', () => {
      mobileDrawer.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  }

  // 2. Publication Filter Tabs (INDEF Think-tank Category Filtering)
  const filterButtons = document.querySelectorAll('[data-filter]');
  const articleCards = document.querySelectorAll('#articleGrid article, [data-category]');

  if (filterButtons.length && articleCards.length) {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => {
          b.className = 'px-4 py-1.5 rounded-full text-sm font-medium bg-white text-slate-700 border border-slate-200 hover:border-emerald-700 hover:text-emerald-800 transition cursor-pointer';
        });
        btn.className = 'px-4 py-1.5 rounded-full text-sm font-semibold bg-emerald-800 text-white shadow-sm border border-emerald-800 transition cursor-pointer';

        const filterValue = btn.getAttribute('data-filter');

        articleCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filterValue === 'all' || category === filterValue) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // 3. Live Search for Articles & Publications
  const searchInput = document.getElementById('articleSearch');
  if (searchInput && articleCards.length) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      articleCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(query) ? '' : 'none';
      });
    });
  }

  // 4. Contact Form Submission Toast Simulation & WhatsApp Forwarding
  const contactForm = document.getElementById('barismaContactForm');
  const toastNotification = document.getElementById('toastNotification');

  if (contactForm && toastNotification) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : 'Kirim Pesan';

      if (submitBtn) {
        submitBtn.innerHTML = `
          <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg> Memproses Permintaan...
        `;
        submitBtn.disabled = true;
      }

      setTimeout(() => {
        contactForm.reset();
        if (submitBtn) {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
        }

        toastNotification.classList.add('show');
        setTimeout(() => {
          toastNotification.classList.remove('show');
        }, 5000);
      }, 700);
    });
  }

  // 5. Sticky Navbar Appearance on Scroll
  const mainNav = document.getElementById('mainNav');
  if (mainNav) {
    window.addEventListener('scroll', () => {
      mainNav.classList.toggle('scrolled', window.scrollY > 40);
    });
  }
});
