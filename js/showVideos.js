import { apiConnect } from "./ApiConnect.js";

const list = document.querySelector("[data-list]");

export default function cardConstructor(titulo, descricao, url, imagem) {
  const video = document.createElement("li");
  video.className = "videos__item";
  video.innerHTML = `
	<iframe width="100%" height="72%" src="${url}"
                title="${titulo}" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <div class="descricao-video">
                <img src="${imagem}" alt="logo canal alura">
                <h3>${titulo}</h3>
                <p>${descricao}</p>
            </div>
	`;

  return video;
}

// Function that creates a <li> element to every item on the list
async function videoList() {
  try {
    const apiList = await apiConnect.videoList();
    apiList.forEach((element) =>
      list.appendChild(
        cardConstructor(
          element.titulo,
          element.descricao,
          element.url,
          element.imagem
        )
      )
    );
  } catch (error) {
    list.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de vídeos<h2>`;
  }
}

videoList();
