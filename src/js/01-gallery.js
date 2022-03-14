import { galleryItems } from './gallery-items.js';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
const galleryRef = document.querySelector('.gallery');
galleryAdd(galleryItems);
function galleryAdd (galleryArray) {
    const markup = galleryArray.map(image=>
        `<a class="gallery__item" href="${image.original}">
        <img class="gallery__image" 
        src="${image.preview}" 
        alt="${image.description}" />
      </a>`).join('');
      galleryRef.insertAdjacentHTML('beforeend', markup);
}

    let lightbox = new SimpleLightbox(".gallery a",   {
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
      });
      lightbox.on('show.simplelightbox', function () {});
