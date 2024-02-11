export class PixabayApi {
  constructor() {
    this.BASE_URL = 'https://pixabay.com/api/';
    this.API_KEY = '42308857-af265c382d366c65500552078';
  }

  getImages(userData) {
    const searchParams = new URLSearchParams({
      key: this.API_KEY,
      q: userData,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    });
    const url = `${this.BASE_URL}?${searchParams}`;

    return fetch(url).then(res => res.json());
  }
}
