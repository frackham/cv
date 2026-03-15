/* =========================================
   Luke Miles – Portfolio
   script.js
   ========================================= */

(function () {
    'use strict';

    /* ------------------------------------------
       Navbar: transparent → frosted on scroll
    ------------------------------------------ */
    const navbar = document.getElementById('navbar');

    function updateNavbar() {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', updateNavbar, { passive: true });
    updateNavbar(); // run once on load

    /* ------------------------------------------
       Mobile menu toggle
    ------------------------------------------ */
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    navToggle.addEventListener('click', function () {
        const isOpen = navLinks.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when any nav link is clicked
    navLinks.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            navLinks.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
        if (!navbar.contains(e.target)) {
            navLinks.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });

    /* ------------------------------------------
       Smooth scroll with fixed nav offset
    ------------------------------------------ */
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            const href = anchor.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (!target) return;

            e.preventDefault();

            const navH = parseInt(
                getComputedStyle(document.documentElement).getPropertyValue('--nav-height')
            ) || 68;

            const top = target.getBoundingClientRect().top + window.scrollY - navH;
            window.scrollTo({ top: top, behavior: 'smooth' });
        });
    });

    /* ------------------------------------------
       Fade-in on scroll (Intersection Observer)
    ------------------------------------------ */
    const fadeElements = document.querySelectorAll('.fade-in');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (!entry.isIntersecting) return;

                    // Stagger siblings so cards appear in sequence
                    const parent = entry.target.parentElement;
                    const siblings = Array.from(parent.querySelectorAll('.fade-in:not(.visible)'));
                    const idx = siblings.indexOf(entry.target);

                    setTimeout(function () {
                        entry.target.classList.add('visible');
                    }, idx * 80);

                    observer.unobserve(entry.target);
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -40px 0px',
            }
        );

        fadeElements.forEach(function (el) {
            observer.observe(el);
        });
    } else {
        // Fallback: show all immediately
        fadeElements.forEach(function (el) {
            el.classList.add('visible');
        });
    }

})();
