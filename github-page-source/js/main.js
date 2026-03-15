import { portfolioData } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    // Hero
    const heroName = document.querySelector('.hero-name');
    if (heroName) heroName.textContent = portfolioData.hero.name;
    
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) heroTitle.textContent = portfolioData.hero.title;
    
    const heroSub = document.querySelector('.hero-sub');
    if (heroSub) heroSub.textContent = portfolioData.hero.subtitle;

    const navLogo = document.querySelector('.nav-logo');
    if (navLogo) navLogo.textContent = portfolioData.hero.name;

    const navLinkIn = document.querySelector('.nav-cta');
    if (navLinkIn) navLinkIn.href = portfolioData.hero.linkedinUrl;

    const heroLinks = document.querySelectorAll('.hero-actions a');
    if (heroLinks.length >= 2) {
        heroLinks[0].href = portfolioData.hero.linkedinUrl;
        heroLinks[1].href = portfolioData.hero.githubUrl;
    }

    const footerLinks = document.querySelectorAll('.footer-links a');
    if (footerLinks.length >= 2) {
        footerLinks[0].href = portfolioData.hero.linkedinUrl;
        
        // update text node of footer link to match clean URL
        if(portfolioData.hero.linkedinUrl.includes('linkedin.com')) {
            const urlText = portfolioData.hero.linkedinUrl.split('www.')[1] || portfolioData.hero.linkedinUrl.split('https://')[1];
            footerLinks[0].innerHTML = footerLinks[0].innerHTML.replace(/linkedin\.com\/in\/.*?(\s+|$)/, `${urlText}$1`);
        }

        footerLinks[1].href = portfolioData.hero.githubUrl;
        if(portfolioData.hero.githubUrl.includes('github.com')) {
            const urlText = portfolioData.hero.githubUrl.split('www.')[1] || portfolioData.hero.githubUrl.split('https://')[1];
            footerLinks[1].innerHTML = footerLinks[1].innerHTML.replace(/github\.com\/.*?(\s+|$)/, `${urlText}$1`);
        }
    }
    
    const footerCopyright = document.querySelector('.footer-bottom p');
    if (footerCopyright) {
        footerCopyright.innerHTML = `&copy; ${new Date().getFullYear()} ${portfolioData.hero.name}. All rights reserved.`;
    }

    // About
    const aboutContent = document.querySelector('.about-content');
    if (aboutContent) {
        aboutContent.innerHTML = '';
        portfolioData.about.forEach(paragraph => {
            const p = document.createElement('p');
            p.className = 'about-text';
            p.textContent = paragraph;
            aboutContent.appendChild(p);
        });
    }

    // Achievements
    const achievementsGrid = document.querySelector('.achievements-grid');
    if (achievementsGrid) {
        achievementsGrid.innerHTML = '';
        portfolioData.achievements.forEach((ach, index) => {
            // Colors logic could be dynamic or match original index
            const colors = [
                'linear-gradient(135deg, #1e3a8a, #7c3aed)',
                'linear-gradient(135deg, #7c3aed, #db2777)',
                'linear-gradient(135deg, #db2777, #f59e0b)',
                'linear-gradient(135deg, #1e3a8a, #0891b2)'
            ];
            const color = colors[index % colors.length];
            
            // Simple generic icon if none matched
            const iconSvg = `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`;

            const card = document.createElement('div');
            card.className = 'achievement-card fade-in visible'; // make visible for now, or rely on scroll
            card.innerHTML = `
                <div class="achievement-icon" style="background: ${color}">
                    ${iconSvg}
                </div>
                <div class="achievement-stat">${ach.stat}</div>
                <h3>${ach.title}</h3>
                <p>${ach.description}</p>
            `;
            achievementsGrid.appendChild(card);
        });
    }

    // Experience
    const timeline = document.querySelector('.timeline');
    if (timeline) {
        timeline.innerHTML = '';
        portfolioData.experience.forEach((job, index) => {
            const colors = [
                'linear-gradient(135deg, #1e3a8a, #7c3aed)',
                'linear-gradient(135deg, #7c3aed, #db2777)',
                'linear-gradient(135deg, #db2777, #f59e0b)',
                'linear-gradient(135deg, #1e3a8a, #0891b2)',
                'linear-gradient(135deg, #059669, #0891b2)'
            ];
            const color = colors[index % colors.length];

            const item = document.createElement('div');
            item.className = 'timeline-item fade-in visible';
            
            let bullets = job.highlights.map(hl => `<li>${hl}</li>`).join('');

            item.innerHTML = `
                <div class="timeline-dot" style="background: ${color}"></div>
                <div class="timeline-card">
                    <div class="timeline-header">
                        <div>
                            <h3>${job.company}</h3>
                            <p class="timeline-role">${job.role}</p>
                        </div>
                        <span class="timeline-date">${job.date}</span>
                    </div>
                    <ul class="timeline-bullets">
                        ${bullets}
                    </ul>
                </div>
            `;
            timeline.appendChild(item);
        });
    }

    // Skills
    const skillsGrid = document.querySelector('.skills-grid');
    if (skillsGrid) {
        skillsGrid.innerHTML = '';
        portfolioData.skills.forEach((skillGroup, index) => {
             const colors = [
                'linear-gradient(135deg, #1e3a8a, #7c3aed)',
                'linear-gradient(135deg, #7c3aed, #db2777)',
                'linear-gradient(135deg, #db2777, #f59e0b)',
                'linear-gradient(135deg, #059669, #0891b2)'
            ];
            const color = colors[index % colors.length];
            const iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;

            const tags = skillGroup.tags.map(tag => `<span class="skill-tag">${tag}</span>`).join('');

            const category = document.createElement('div');
            category.className = 'skill-category fade-in visible';
            category.innerHTML = `
                <div class="skill-category-header" style="background: ${color}">
                    ${iconSvg}
                    ${skillGroup.category}
                </div>
                <div class="skill-tags">
                    ${tags}
                </div>
            `;
            skillsGrid.appendChild(category);
        });
    }

    // Education
    const educationGrid = document.querySelector('.education-grid');
    if (educationGrid) {
        educationGrid.innerHTML = '';
        portfolioData.education.forEach((edu, index) => {
            const colors = [
                'linear-gradient(135deg, #1e3a8a, #7c3aed)',
                'linear-gradient(135deg, #7c3aed, #db2777)',
                'linear-gradient(135deg, #db2777, #f59e0b)'
            ];
            const color = colors[index % colors.length];
            const iconSvg = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`;
            
            let noteHtml = edu.note ? `<span class="education-badge">${edu.note}</span>` : `<span class="education-year">${edu.year}</span>`;
            if (edu.note && edu.year) {
                // If we want both, can adjust, but template used one or the other mostly based on badge class. We will use badge for notes.
                 noteHtml = `<span class="education-year" style="display:block; font-size: 0.85rem; color: #64748b; margin-top: 0.25rem;">${edu.year}</span><span class="education-badge" style="margin-top:0.5rem">${edu.note}</span>`;
            }

            const card = document.createElement('div');
            card.className = 'education-card fade-in visible';
            card.innerHTML = `
                <div class="education-icon" style="background: ${color}">
                    ${iconSvg}
                </div>
                <div class="education-content">
                    <h3>${edu.degree}</h3>
                    <p class="education-place">${edu.institution}</p>
                    ${noteHtml}
                </div>
            `;
            educationGrid.appendChild(card);
        });
    }
});
