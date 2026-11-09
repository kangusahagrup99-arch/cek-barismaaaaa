/* ========================================================================
   BARISMA Homepage Script — Clean Interactive Dropdowns & Mobile Navigation
   ======================================================================== */

(() => {
  'use strict';

  const header = document.querySelector('.site-header');
  const menuToggle = document.getElementById('menuToggle');
  const primaryNav = document.getElementById('primaryNav');
  const dropdownItems = document.querySelectorAll('.nav-item.has-dropdown');

  // Sticky header shadow on scroll
  const handleScroll = () => {
    if (header) {
      header.classList.toggle('is-scrolled', window.scrollY > 20);
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Mobile Menu Toggle
  if (menuToggle && primaryNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = primaryNav.classList.contains('is-open');
      menuToggle.setAttribute('aria-expanded', String(!isOpen));
      primaryNav.classList.toggle('is-open', !isOpen);
      document.body.classList.toggle('menu-open', !isOpen);
    });
  }

  // Handle Dropdowns on Mobile and Desktop
  dropdownItems.forEach((item) => {
    const toggleBtn = item.querySelector('.dropdown-toggle');
    if (!toggleBtn) return;

    toggleBtn.addEventListener('click', (e) => {
      // On mobile or tablet, toggle the dropdown accordion
      if (window.innerWidth <= 860) {
        e.preventDefault();
        const isOpen = item.classList.contains('is-open');
        
        // Close other open dropdowns
        dropdownItems.forEach((other) => {
          if (other !== item) {
            other.classList.remove('is-open');
            const otherBtn = other.querySelector('.dropdown-toggle');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          }
        });

        item.classList.toggle('is-open', !isOpen);
        toggleBtn.setAttribute('aria-expanded', String(!isOpen));
      }
    });
  });

  // Close dropdowns and mobile menu on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      dropdownItems.forEach((item) => {
        item.classList.remove('is-open');
        const btn = item.querySelector('.dropdown-toggle');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });
      if (primaryNav && primaryNav.classList.contains('is-open')) {
        primaryNav.classList.remove('is-open');
        document.body.classList.remove('menu-open');
        if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
      }
    }
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-item.has-dropdown')) {
      dropdownItems.forEach((item) => {
        item.classList.remove('is-open');
        const btn = item.querySelector('.dropdown-toggle');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });
    }
  });

  // Close mobile nav when clicking a link
  if (primaryNav) {
    primaryNav.querySelectorAll('a:not(.dropdown-toggle)').forEach((link) => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 860) {
          primaryNav.classList.remove('is-open');
          document.body.classList.remove('menu-open');
          if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  // Initialize Swiper Hero Photo Slider with Fade Effect & Pagination
  if (typeof Swiper !== 'undefined' && document.querySelector('.hero-swiper')) {
    new Swiper('.hero-swiper', {
      loop: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      speed: 1000,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      },
      pagination: {
        el: '.hero-swiper-pagination',
        clickable: true
      }
    });
  }

  // Handle Submit Article Modal & Storage for Admin Portal
  const submitModal = document.getElementById('submitArticleModal');
  const btnOpenSubmit = document.getElementById('btnOpenSubmitModal');
  const btnCloseSubmit = document.getElementById('btnCloseSubmitModal');
  const btnCancelSubmit = document.getElementById('btnCancelSubmitModal');
  const btnDoneSubmit = document.getElementById('btnDoneSubmitModal');
  const submitForm = document.getElementById('publicArticleSubmitForm');
  const submitSuccessBox = document.getElementById('submitSuccessBox');
  const waConfirmBtn = document.getElementById('waConfirmBtn');

  const toggleSubmitModal = (open) => {
    if (!submitModal) return;
    submitModal.classList.toggle('is-active', open);
    submitModal.setAttribute('aria-hidden', String(!open));
    document.body.style.overflow = open ? 'hidden' : '';
    if (!open && submitForm && submitSuccessBox) {
      setTimeout(() => {
        submitForm.style.display = 'flex';
        submitSuccessBox.style.display = 'none';
        submitForm.reset();
      }, 300);
    }
  };

  if (btnOpenSubmit) {
    btnOpenSubmit.addEventListener('click', () => toggleSubmitModal(true));
  }
  if (btnCloseSubmit) {
    btnCloseSubmit.addEventListener('click', () => toggleSubmitModal(false));
  }
  if (btnCancelSubmit) {
    btnCancelSubmit.addEventListener('click', () => toggleSubmitModal(false));
  }
  if (btnDoneSubmit) {
    btnDoneSubmit.addEventListener('click', () => toggleSubmitModal(false));
  }

  // Close modal when clicking outside modal-card
  if (submitModal) {
    submitModal.addEventListener('click', (e) => {
      if (e.target === submitModal) {
        toggleSubmitModal(false);
      }
    });
  }

  // Handle Article Submission
  if (submitForm) {
    submitForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const title = document.getElementById('subTitle')?.value.trim() || '';
      const category = document.getElementById('subCategory')?.value || 'Opini Populer';
      const author = document.getElementById('subAuthor')?.value.trim() || '';
      const institution = document.getElementById('subInstitution')?.value.trim() || '';
      const email = document.getElementById('subEmail')?.value.trim() || '';
      const phone = document.getElementById('subPhone')?.value.trim() || '';
      const content = document.getElementById('subContent')?.value.trim() || '';
      const docLink = document.getElementById('subDocLink')?.value.trim() || '';

      const now = new Date();
      const dateStr = now.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });

      const newArticle = {
        id: 'SUB-' + Date.now().toString(36).toUpperCase(),
        title,
        category,
        author,
        institution,
        email,
        phone,
        content,
        docLink,
        date: dateStr,
        timestamp: Date.now(),
        status: 'In Review' // Langsung masuk ke antrean editorial admin
      };

      // Simpan ke localStorage agar dibaca oleh admin.html
      try {
        const stored = JSON.parse(localStorage.getItem('barisma_submitted_articles') || '[]');
        stored.unshift(newArticle);
        localStorage.setItem('barisma_submitted_articles', JSON.stringify(stored));
      } catch (err) {
        console.warn('Storage error:', err);
      }

      // Atur link WA konfirmasi ke Mas Rifki
      if (waConfirmBtn) {
        const waMsg = encodeURIComponent(
          `Halo Mas Rifki (Redaksi BARISMA), saya telah mengirim naskah artikel web:\n\n*Judul:* ${title}\n*Penulis:* ${author} (${institution})\n*Kategori:* ${category}\n\nMohon dicek di antrean Portal Admin BARISMA. Terima kasih.`
        );
        waConfirmBtn.href = `https://wa.me/6285702829379?text=${waMsg}`;
      }

      // Tampilkan feedback sukses
      submitForm.style.display = 'none';
      if (submitSuccessBox) {
        submitSuccessBox.style.display = 'block';
      }
    });
  }
})();
