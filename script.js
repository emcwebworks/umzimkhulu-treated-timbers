// ===== ROUTING =====
  const pages = ['home','about','products','transport','pricing','contact'];

  function navigate(page) {
    if (!pages.includes(page)) page = 'home';
    // Hide all pages
    pages.forEach(p => {
      document.getElementById('page-' + p).classList.remove('active');
    });
    // Show target page
    document.getElementById('page-' + page).classList.add('active');
    // Update nav active state
    document.querySelectorAll('[data-page]').forEach(el => {
      el.classList.toggle('active', el.dataset.page === page);
    });
    // Update URL hash
    history.pushState({ page }, '', '#' + page);
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  // Handle browser back/forward
  window.addEventListener('popstate', (e) => {
    const page = e.state?.page || location.hash.replace('#','') || 'home';
    navigate(page);
  });

  // On load: check hash
  (function() {
    const hash = location.hash.replace('#', '') || 'home';
    navigate(pages.includes(hash) ? hash : 'home');
  })();

  // ===== MOBILE MENU =====
  function toggleMobile() {
    const menu = document.getElementById('mobile-menu');
    const isOpen = menu.classList.toggle('open');
    document.getElementById('hamburger-icon').style.display = isOpen ? 'none' : 'block';
    document.getElementById('close-icon').style.display = isOpen ? 'block' : 'none';
  }

  function closeMobile() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.remove('open');
    document.getElementById('hamburger-icon').style.display = 'block';
    document.getElementById('close-icon').style.display = 'none';
  }

  // ===== MODAL =====
  function openModal() {
    document.getElementById('modal-overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    document.getElementById('modal-overlay').classList.remove('open');
    document.body.style.overflow = '';
    // Reset form
    setTimeout(() => {
      document.getElementById('quote-form').style.display = 'flex';
      document.getElementById('modal-success').style.display = 'none';
      document.getElementById('quote-form').reset();
    }, 300);
  }

  function handleOverlayClick(e) {
    if (e.target === document.getElementById('modal-overlay')) closeModal();
  }

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  function handleQuoteForm(e) {
    e.preventDefault();
    document.getElementById('quote-form').style.display = 'none';
    document.getElementById('modal-success').style.display = 'block';
    setTimeout(closeModal, 2500);
  }

  // ===== CONTACT FORM =====
  function handleContactForm(e) {
    e.preventDefault();
    document.getElementById('contact-form').style.display = 'none';
    document.getElementById('contact-success').style.display = 'block';
  }

  // ===== FOOTER YEAR =====
  document.getElementById('footer-year').textContent = new Date().getFullYear();