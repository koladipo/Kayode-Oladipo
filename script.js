// Hamburger menu
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
      const expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', !expanded);
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Project filtering feature
    function filterProjects(category) {
      const projects = document.querySelectorAll('.project');
      const buttons = document.querySelectorAll('.filter-btn');

      // Update button aria states
      buttons.forEach(btn => btn.setAttribute('aria-pressed', 'false'));
      const activeButton = Array.from(buttons).find(btn => btn.textContent.toLowerCase().includes(category));
      if (activeButton) activeButton.setAttribute('aria-pressed', 'true');

      // Show/hide projects
      projects.forEach(project => {
        if (category === 'all' || project.dataset.category === category) {
          project.style.display = 'block';
        } else {
          project.style.display = 'none';
        }
      });
    }
    document.getElementById("hamburger-menu").addEventListener("click", function() {
    this.classList.toggle("open");
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("open");
    const isOpen = this.classList.contains("open");
    this.setAttribute("aria-expanded", isOpen);
});