import { apiConnect } from "./ApiConnect.js";

const form = document.querySelector("[data-formulario]");

// Function that get the information from the form
// and send to the function that creates it in the db.json
async function createVideo(event) {
  event.preventDefault();
  const imagem = document.querySelector("[data-imagem]").value;
  const url = document.querySelector("[data-url]").value;
  const titulo = document.querySelector("[data-titulo]").value;
  const descricao = Math.floor(Math.random() * 10).toString();

  try {
    await apiConnect.createVideo(titulo, descricao, url, imagem);
    window.location.href = "../pages/envio-concluido.html";
  } catch (error) {
    alert(error);
  }
}

form.addEventListener("submit", (event) => createVideo(event));
