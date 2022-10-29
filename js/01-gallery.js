import { galleryItems } from "./gallery-items.js";
// Change code below this line;

const divEl = document.querySelector(".gallery");

for (const gallery of galleryItems) {
  const imgEl = `<div class="gallery__item">
  <a class="gallery__link" href="${gallery.original}">
  <img src="${gallery.preview}" alt="${gallery.description}" class="gallery__image" data-source="${gallery.original}">
  </a></div>`;
  divEl.insertAdjacentHTML("beforeend", imgEl);
}

divEl.addEventListener("click", onClick);

function onClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  basicLightbox
    .create(
      `
		<img width="1400" height="900" src="${evt.target.dataset.source}">
	`
    )
    .show();
}
