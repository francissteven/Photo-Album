document.addEventListener('DOMContentLoaded', function() {
    const photos = [
        { src: '1.jpg', category: 'graduation' },
        { src: '2.jpg', category: 'graduation' },
        { src: '3.jpg', category: 'random' },
        { src: '4.jpg', category: 'random' },
        { src: '5.jpg', category: 'lagalag' },
        { src: '6.jpg', category: 'lagalag' },
        { src: '7.jpg', category: 'lagalag' },
        { src: '8.jpg', category: 'lagalag' },
        { src: '9.jpg', category: 'random' },
        { src: '10.jpg', category: 'random' },
        { src: '11.jpg', category: 'random' }
    ];

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
            col.setAttribute('data-category', photo.category);

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

    function filterPhotos(category) {
        const filteredPhotos = category === 'all' ? photos : photos.filter(photo => photo.category === category);
        displayPhotos(filteredPhotos);
    }

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Display all photos initially
    filterPhotos('all');
});