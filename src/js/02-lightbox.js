import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryArrayRef = document.querySelector('.gallery')

const makeGallery = elements => {
    return elements.map(({ preview, original, description }) => {
        const linkGallery = document.createElement('a')
        linkGallery.classList.add('gallery__item')
        linkGallery.setAttribute('href', original)
        const imgGallery = document.createElement('img')
        imgGallery.classList.add('gallery__image')
        imgGallery.setAttribute('src', preview)
        imgGallery.setAttribute('alt', description)
        linkGallery.appendChild(imgGallery)
        return linkGallery
    })
}

const galleryItemsArray = makeGallery(galleryItems)

galleryArrayRef.append(...galleryItemsArray)

// -----------------------click---------------------------------------

var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});