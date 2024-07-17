document.addEventListener('DOMContentLoaded', function() {
    const photos = [
        '1.jpg',
        '2.jpg',
        '3.jpg',
        '4.jpg',
        '5.jpg',
        '6.jpg',
        '7.jpg',
        '8.jpg',
        '9.jpg',
        '10.jpg',
        '11.jpg'
    ];

    const photoAlbum = document.getElementById('photo-album');
    const flipSound = document.getElementById('flip-sound');
    const modal = document.getElementById('photo-modal');
    const modalImage = document.getElementById('modal-image');
    const closeModal = document.getElementsByClassName('close')[0];

    photos.forEach((photo, index) => {
        const col = document.createElement('div');
        col.classList.add('col-sm-6', 'col-md-4', 'col-lg-3');

        const card = document.createElement('div');
        card.classList.add('photo-card');

        const cardInner = document.createElement('div');
        cardInner.classList.add('photo-card-inner');

        const cardFront = document.createElement('div');
        cardFront.classList.add('photo-card-front');
        cardFront.innerHTML = `<img src="${photo}" alt="Photo ${index + 1}">`;

        // const cardBack = document.createElement('div');
        // cardBack.classList.add('photo-card-back');
        // cardBack.innerHTML = `<img src="back-${photo}" alt="Photo ${index + 1} Back">`;

        cardInner.appendChild(cardFront);
        // cardInner.appendChild(cardBack);
        card.appendChild(cardInner);
        col.appendChild(card);
        photoAlbum.appendChild(col);

        card.addEventListener('click', () => {
            flipSound.play();
            modal.style.display = 'block';
            modalImage.src = photo;
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
