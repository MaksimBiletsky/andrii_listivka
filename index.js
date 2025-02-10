async function startVideo(_) {
  let rolled = document.getElementById("rolled")
  let clickMeButton = document.getElementById("click-me-button")
  rolled.play()
  clickMeButton.classList.add("fading");
  clickMeButton.remove();
  
  rolled.classList.add("zooming")
  await new Promise(resolve => setTimeout(resolve, 10000));
  rolled.classList.remove("zooming");
  rolled.classList.add("upper-left");
  document.querySelector(".content-wrapper").style.display = "flex";
  document.querySelector(".scrollable-content-wrapper").style.display = "flex";
  document.querySelector(".scrollable-content-wrapper").style.alignItems = "center";
  await new Promise(resolve => setTimeout(resolve, 10000));
  rolled.classList.add("spinning");
};

document.getElementById("click-me-button").addEventListener("click", (event) => {
  startVideo(event);
});

// Function to load and display photos
function loadPhotos() {
    const photosSectionMobile = document.getElementById('photos-section-mobile');
    const photosSectionDesktop = document.getElementById('photos-section-desktop');
    
    let photos = [
        'alfatr.jpg',
        'billy.jpg',
        'borsch.jpg',
        'de_smitniki.jpg',
        'govno.jpeg',
        'mahno.jpeg',
        'man.jpg',
        'mouse.jpg',
        'pixel.jpg',
        'selfi_mashina.jpg',
        'svinya.png.jpg',
        'tigr.jpg',
        'white_power.jpg',
    ];

    photos = photos.sort(() => Math.random() - 0.5);

    // Handle mobile photos
    photos.forEach(photo => {
        const img = document.createElement('img');
        let photoContainer = document.createElement('div');
        photoContainer.className = 'photo-container';
        img.src = `photos/${photo}`;
        img.alt = 'Photo';
        img.className = 'photo';
        photoContainer.appendChild(img);
        photosSectionMobile.appendChild(photoContainer);
    });

    // Handle desktop photos
    const desktopContainer = document.createElement('div');
    desktopContainer.className = 'desktop-photo-container';
    photosSectionDesktop.appendChild(desktopContainer);

    // Create all images but only show the first one
    photos.forEach((photo, index) => {
        const img = document.createElement('img');
        img.src = `photos/${photo}`;
        img.alt = 'Photo';
        img.className = 'desktop-photo';
        if (index === 0) img.classList.add('visible');
        desktopContainer.appendChild(img);
    });

    let currentPhotoIndex = 0;
    
    // Function to switch photos
    function switchPhoto() {
        const photos = desktopContainer.getElementsByClassName('desktop-photo');
        photos[currentPhotoIndex].classList.remove('visible');
        currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
        photos[currentPhotoIndex].classList.add('visible');
    }

    // Start the photo rotation
    setInterval(switchPhoto, 5000);
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', loadPhotos);
