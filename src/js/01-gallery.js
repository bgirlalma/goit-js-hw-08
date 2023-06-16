// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const container = document.querySelector('.gallery');

function markup(items) {
    return items.map((item) =>`<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
       <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>
 </li>`).join('');
};

container.insertAdjacentHTML('beforeend', markup(galleryItems));



    new SimpleLightbox('.gallery a', {
        captionDelay: 250,
        captionsData: 'alt',
        captionPosition: 'bottom'
    }); 

console.log(galleryItems);
