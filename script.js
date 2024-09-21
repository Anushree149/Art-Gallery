document.getElementById('loadMore').addEventListener('click', function() {
    const gallery = document.querySelector('.gallery');

    // New art items to load dynamically
    const newArtItems = [
        {
            imgSrc: 'images/art3.jpeg',
            description: 'Art Piece 3 - Urban'
        },
        {
            imgSrc: 'images/art4.jpg',
            description: 'Art Piece 4 - Portrait'
        }
    ];

    // Create and append new art items to the gallery
    newArtItems.forEach(item => {
        const artDiv = document.createElement('div');
        artDiv.classList.add('art-item');

        const img = document.createElement('img');
        img.src = item.imgSrc;
        img.alt = item.description;

        const overlay = document.createElement('div');
        overlay.classList.add('overlay');

        const text = document.createElement('div');
        text.classList.add('text');
        text.innerText = item.description;

        overlay.appendChild(text);
        artDiv.appendChild(img);
        artDiv.appendChild(overlay);
        gallery.appendChild(artDiv);
    });
});
