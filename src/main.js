import { PixabayApi } from './js/pixabay-api';
import { renderCards } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const pixabayApi = new PixabayApi();
const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

form.addEventListener('submit', onSearchSubmit);

function onSearchSubmit(event) {
  event.preventDefault();
  gallery.innerHTML = '';
  toggleLoader();

  pixabayApi
    .getImages(event.target.userData.value)
    .then(data => {
      const images = data.hits;
      if (!images.length) {
        throw new Error(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      }
      renderCards(images);
    })
    .catch(error => showError(error))
    .finally(toggleLoader);

  event.target.reset();
}

function showError(error) {
  iziToast.error({
    pauseOnHover: false,
    position: 'topRight',
    message: error.message,
  });
}

function toggleLoader() {
  loader.classList.toggle('hidden');
}
