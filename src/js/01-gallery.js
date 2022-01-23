import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryArrayRef = document.querySelector('.gallery')

const makeGallery = elements => {
    return elements.map(({ preview, original, description }) => {
        const linkGallery = document.createElement('a')
        linkGallery.classList.add('gallery__link')
        linkGallery.setAttribute('href', original)
        const imgGallery = document.createElement('img')
        imgGallery.classList.add('gallery__image')
        imgGallery.setAttribute('src', preview)
        imgGallery.setAttribute('data-source', original)
        imgGallery.setAttribute('alt', description)
        linkGallery.appendChild(imgGallery)
        return linkGallery
    })
}

const galleryItemsArray = makeGallery(galleryItems)

galleryArrayRef.append(...galleryItemsArray)

// ------------- click--------------------




function viveModal(event) {
    event.preventDefault()
    if (event.target.nodeName !== "IMG") {
        return;
    }

    const originalSrc = event.target.dataset.source

    const instance = basicLightbox.create(`
    <img src="${originalSrc}" width="800" height="600">
    `)
    instance.show()
}

galleryArrayRef.addEventListener('click', viveModal)