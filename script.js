// Initialize Lucide icons
lucide.createIcons();

// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

// Pages
const pages = {
    home: document.getElementById('page-home'),
    terms: document.getElementById('page-terms')
};
const backBtn = document.getElementById('back-btn');

function showPage(pageName) {
    // Hide all pages
    Object.values(pages).forEach(p => p.classList.add('hidden'));

    // Show requested page
    const target = pages[pageName] || pages.home;
    target.classList.remove('hidden');

    // Toggle back button
    if (pageName !== 'home') {
        backBtn.classList.remove('hidden');
        backBtn.classList.add('flex');
    } else {
        backBtn.classList.add('hidden');
        backBtn.classList.remove('flex');
    }

    // Scroll to top
    window.scrollTo(0, 0);
}

function handleHash() {
    const hash = window.location.hash.replace('#', '');
    if (hash && pages[hash]) {
        showPage(hash);
    } else {
        showPage('home');
    }
}

// Listen for hash changes
window.addEventListener('hashchange', handleHash);

// Initial page load
handleHash();
