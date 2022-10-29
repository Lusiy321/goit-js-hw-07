import { galleryItems } from "./gallery-items.js";
// Change code below this line
const liEl = document.querySelector(".gallery");

for (const gallery of galleryItems) {
  const imgEl = `<li class="gallery__item">
  <a class="gallery__link" href="${gallery.original}">
  <img src="${gallery.preview}" alt="${gallery.description}" class="gallery__image" >
  </a></li>`;
  liEl.insertAdjacentHTML("beforeend", imgEl);
}
new SimpleLightbox(".gallery__item a", {
  fadeSpeed: 250,
  captionsData: "alt",
});
