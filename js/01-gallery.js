import { galleryItems } from "./gallery-items.js";
// Change code below this line

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
  </div>`;
    })
    .join("");
}

const container = document.querySelector(".gallery");
const galleryList = createGallery(galleryItems);
container.insertAdjacentHTML("beforeend", galleryList);
console.log(container);

container.addEventListener("click", onGetOriginalImg);

function onGetOriginalImg(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`<img src="${evt.target.dataset.source}" width="800" height="600">`);
  instance.show();
}

// document.querySelector("a.gallery__link").onclick = () => {
//   basicLightbox
//     .create(
//       `
// 		<img src="${original}">
// 	`
//     )
//     .show();
// };
