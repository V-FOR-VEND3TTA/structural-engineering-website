// Projects filter functionality
document.addEventListener('DOMContentLoaded', function() {
  // Filter projects
  const filterButtons = document.querySelectorAll('#projectFilter .nav-link');
  const projectItems = document.querySelectorAll('#projectsContainer [data-category]');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filter = this.getAttribute('data-bs-target').replace('#', '');
      
      projectItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Contact form submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Form validation
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
      }
      
      // Here you would typically send the form data to a server
      console.log('Form submitted:', { name, email, message });
      alert('Thank you for your message. We will contact you soon.');
      contactForm.reset();
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});

// Load more projects functionality
document.getElementById('loadMoreProjects')?.addEventListener('click', function() {
  // In a real implementation, this would fetch more projects from an API
  const projectsContainer = document.getElementById('projectsContainer');
  const newProjects = `
    <div class="col-md-6 col-lg-4" data-category="residential">
      <div class="card project-card h-100 border-0 shadow-sm overflow-hidden">
        <img src="/assets/img/project4.jpg" class="card-img-top" alt="Residential Complex">
        <div class="card-body">
          <span class="badge bg-success mb-2">Residential</span>
          <h5 class="fw-bold">Hillside Apartments</h5>
          <p>Multi-family residential complex with earthquake-resistant design</p>
          <a href="project-detail.html" class="btn btn-sm btn-outline-primary">View Project</a>
        </div>
      </div>
    </div>
    <!-- Add more project items as needed -->
  `;
  
  projectsContainer.insertAdjacentHTML('beforeend', newProjects);
});