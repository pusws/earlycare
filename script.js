/* ========================================
   早癌筛查循证医学科普指南 - Script
   ======================================== */

// Navigation items
const navItems = [
    { id: 'sec-core', label: '一、核心概念与循证逻辑' },
    { id: 'sec-risks', label: '二、筛查的获益、风险与偏倚' },
    {
        id: 'sec-recommended', label: '三、推荐筛查项目', children: [
            { id: 'sec-lung', label: '3.1 肺癌' },
            { id: 'sec-colorectal', label: '3.2 结直肠癌' },
            { id: 'sec-breast', label: '3.3 乳腺癌' },
            { id: 'sec-cervical', label: '3.4 宫颈癌' },
            { id: 'sec-prostate', label: '3.5 前列腺癌' },
            { id: 'sec-hcc', label: '3.6 肝细胞癌' },
        ]
    },
    { id: 'sec-not-recommended', label: '四、不推荐普筛的项目' },
    { id: 'sec-genetic', label: '五、遗传性肿瘤综合征' },
    { id: 'sec-prevention', label: '六、一级预防' },
    { id: 'sec-myths', label: '七、常见误区' },
    { id: 'sec-summary', label: '八、总结与个性化路径' },
    { id: 'sec-references', label: '九、参考来源' },
];

// Build navigation
function buildNav(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    navItems.forEach(item => {
        const link = document.createElement('a');
        link.href = '#' + item.id;
        link.className = 'nav-link block py-2 px-3 rounded-lg text-sm text-ink-900 hover:bg-warm-100 transition-colors';
        link.textContent = item.label;
        link.dataset.target = item.id;
        container.appendChild(link);

        if (item.children) {
            const subContainer = document.createElement('div');
            subContainer.className = 'ml-4 space-y-0.5 mt-0.5';
            item.children.forEach(child => {
                const childLink = document.createElement('a');
                childLink.href = '#' + child.id;
                childLink.className = 'nav-link block py-1.5 px-3 rounded-lg text-xs text-ink-900 hover:bg-warm-100 transition-colors';
                childLink.textContent = child.label;
                childLink.dataset.target = child.id;
                subContainer.appendChild(childLink);
            });
            container.appendChild(subContainer);
        }
    });
}

buildNav('desktopNav');
buildNav('mobileNav');

// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => mobileMenu.classList.remove('hidden'));
closeMenuBtn.addEventListener('click', () => mobileMenu.classList.add('hidden'));
mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) mobileMenu.classList.add('hidden');
});
document.querySelectorAll('#mobileNav a').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
});

// Scroll spy
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNav() {
    let current = '';
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const top = section.offsetTop;
        if (scrollPos >= top) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.target === current) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();

// Back to top
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTop.classList.remove('translate-y-20', 'opacity-0');
    } else {
        backToTop.classList.add('translate-y-20', 'opacity-0');
    }
}, { passive: true });
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Mobile table → card layout: add data-label attributes
document.querySelectorAll('.table-responsive-cards tbody td').forEach(td => {
    const cellIndex = td.cellIndex;
    const headerCell = td.closest('table').querySelector('thead th:nth-child(' + (cellIndex + 1) + ')');
    if (headerCell) {
        td.setAttribute('data-label', headerCell.textContent.trim());
    }
});
