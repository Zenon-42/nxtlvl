
    const galleryImages = document.querySelectorAll('.gallery img');
    const fullscreen = document.getElementById('fullscreen');
    const fullscreenImage = document.getElementById('fullscreenImage');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const downloadButton = document.getElementById('download');
    const imageTags = document.getElementById('imageTags');
    let currentIndex = 0;

    const openFullscreen = (index) => {
      currentIndex = index;
      fullscreenImage.src = galleryImages[currentIndex].src;
      imageTags.value = galleryImages[currentIndex].dataset.tags || '';
      fullscreen.style.display = 'flex';
    };

    const closeFullscreen = () => {
      fullscreen.style.display = 'none';
    };

    const showNextImage = () => {
      currentIndex = (currentIndex + 1) % galleryImages.length;
      openFullscreen(currentIndex);
    };

    const showPrevImage = () => {
      currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      openFullscreen(currentIndex);
    };

    galleryImages.forEach((image, index) => {
      image.addEventListener('click', () => openFullscreen(index));
    });

    prevButton.addEventListener('click', showPrevImage);
    nextButton.addEventListener('click', showNextImage);

    downloadButton.addEventListener('click', () => {
      const link = document.createElement('a');
      link.href = fullscreenImage.src;
      link.download = fullscreenImage.src.split('/').pop();
      link.click();
    });

    fullscreen.addEventListener('click', (event) => {
      if (event.target !== fullscreenImage && event.target !== prevButton && event.target !== nextButton && event.target !== downloadButton) {
        closeFullscreen();
      }
    });


    