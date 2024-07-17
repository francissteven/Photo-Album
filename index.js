document.addEventListener('DOMContentLoaded', function() {
    const photoAlbum = document.getElementById('photo-album');
    const flipSound = document.getElementById('flip-sound');
    const modal = document.getElementById('photo-modal');
    const modalImage = document.getElementById('modal-image');
    const closeModal = document.getElementsByClassName('close')[0];

    function displayPhotos(filteredPhotos) {
        photoAlbum.innerHTML = '';

        filteredPhotos.forEach((photo, index) => {
            const col = document.createElement('div');
            col.classList.add('col-6', 'col-md-4', 'col-lg-2', 'photo-item');

            const card = document.createElement('div');
            card.classList.add('photo-card');

            const cardInner = document.createElement('div');
            cardInner.classList.add('photo-card-inner');

            const cardFront = document.createElement('div');
            cardFront.classList.add('photo-card-front');
            cardFront.innerHTML = `<img src="${photo.src}" alt="Photo ${index + 1}">`;

            const cardBack = document.createElement('div');
            cardBack.classList.add('photo-card-back');
            cardBack.innerHTML = `<p>Hello</p>`;

            cardInner.appendChild(cardFront);
            cardInner.appendChild(cardBack);
            card.appendChild(cardInner);
            col.appendChild(card);
            photoAlbum.appendChild(col);

            card.addEventListener('click', () => {
                flipSound.play();
                modal.style.display = 'block';
                modalImage.src = photo.src;
            });
        });
    }

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    function filterPhotos(category, photos) {
        if (category === 'all') {
            displayPhotos(photos);
        } else {
            const filteredPhotos = photos.filter(photo => photo.category === category);
            displayPhotos(filteredPhotos);
        }
    }

    fetch('photos.json')
        .then(response => response.json())
        .then(photos => {
            document.querySelectorAll('.categories button').forEach(button => {
                button.addEventListener('click', () => {
                    const category = button.getAttribute('data-category');
                    filterPhotos(category, photos);
                });
            });

            // Display all photos initially
            filterPhotos('all', photos);
        })
        .catch(error => console.error('Error fetching photos:', error));
});
