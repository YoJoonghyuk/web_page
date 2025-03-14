document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const galleryImages = document.querySelectorAll('.gallery-container img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const closeButton = document.getElementById('close-button');

    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-theme');
    });

    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            const imageSource = this.getAttribute('src');
            lightboxImage.setAttribute('src', imageSource);
            lightbox.style.display = 'flex';  
        });
    });

    closeButton.addEventListener('click', function() {
        lightbox.style.display = 'none'; 
    });

    lightbox.addEventListener('click', function(event) {
      if (event.target === lightbox) {
          lightbox.style.display = 'none';
      }
    });
});
