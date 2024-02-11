import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const lightbox = new SimpleLightbox('.gallery a');

function templateCard({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `      
      <li class="card">
        <a h ="${largeImageURL}">
        <img class="card-img" src="${webformatURL}" alt="${tags}" >
        <ul class="card-data">
          <li><h3>Likes</h3><p>${likes}</p></li>
          <li><h3>Views</h3><p>${views}</p></li>
          <li><h3>Comments</h3><p>${comments}</p></li>
          <li><h3>Downloads</h3><p>${downloads}</p></li>
        </ul>
      </li>`;
}

function templateCards(images) {
  return images.map(templateCard).join('');
}

export function renderCards(images) {
  gallery.innerHTML = templateCards(images);
  lightbox.refresh();
}
