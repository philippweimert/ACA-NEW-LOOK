document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.content');
    const sidebarLinks = document.querySelectorAll('.sidebar a');

    const routes = {
        '/': 'pages/home.html',
        '/pages/bav.html': 'pages/bav.html',
        '/pages/bkv.html': 'pages/bkv.html',
        '/pages/service.html': 'pages/service.html',
        '/pages/news.html': 'pages/news.html',
        '/pages/uber-uns.html': 'pages/uber-uns.html',
        '/pages/kontakt.html': 'pages/kontakt.html'
    };

    const loadContent = async (path) => {
        try {
            // Always fetch from the root
            const response = await fetch('/' + path);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const html = await response.text();
            content.innerHTML = html;
            setActiveLink(window.location.pathname);
        } catch (error) {
            content.innerHTML = '<p>Error loading page. Please try again.</p>';
            console.error('Failed to load page:', error);
        }
    };

    const setActiveLink = (path) => {
        sidebarLinks.forEach(link => {
            const linkPath = new URL(link.href).pathname;
            if (linkPath === path) {
                link.querySelector('.sidebar-item').classList.add('active');
            } else {
                link.querySelector('.sidebar-item').classList.remove('active');
            }
        });
    };

    const router = () => {
        const path = window.location.pathname;
        const route = routes[path] || 'pages/404.html';
        loadContent(route);
    };

    sidebarLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const path = new URL(e.currentTarget.href).pathname;
            history.pushState({}, '', path);
            router();
        });
    });

    window.addEventListener('popstate', router);

    // Initial load
    router();

});
