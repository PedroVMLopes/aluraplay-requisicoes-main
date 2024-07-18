import { apiConnect } from "./ApiConnect.js";
import cardConstructor from "./showVideos.js";

async function searchVideo(event) {
  event.preventDefault();
  const dataSearched = document
    .querySelector("[data-search]")
    .value.toLowerCase();
  const search = await apiConnect.searchVideo(dataSearched);

  const list = document.querySelector("[data-list]");

  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  search.forEach((element) =>
    list.appendChild(
      cardConstructor(
        element.titulo,
        element.descricao,
        element.url,
        element.imagem
      )
    )
  );

  if (search.length == 0) {
    list.innerHTML = `<h2 class="mensagem__titulo">Não existem vídeos com esse termo<h2>`;
  }
}

const searchButton = document.querySelector("[data-search-button]");
searchButton.addEventListener("click", (event) => searchVideo(event));
