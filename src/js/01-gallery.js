// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const markUP = galleryItems
  .map(
    ({ original, description, preview }) =>
      `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', markUP);

gallery.addEventListener('click', elem => {
  elem.preventDefault();
  if (elem.target.nodeName !== 'IMG') {
    return;
  }

  const choicesImages = elem.target.getAttribute('data-source');

  const options = basicLightbox.create(
    `<img src ="${choicesImages}" width ="800" height="600">`,
    {
      onShow: () => {
        document.addEventListener('keydown', escapeClick);
      },
      onclose: () => {
        document.removeEventListener('keydown', escapeClick);
      },
    }
  );
  options.show();

  document.addEventListener('keydown');
  function escapeClick(event) {
    if (event.key === 'Escape') {
      options.close();
    }
  }
});
const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
