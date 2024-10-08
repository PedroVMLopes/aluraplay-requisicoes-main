// Code to run the json server by the terminal
// npm init
// json-server --watch db.json

async function videoList() {
  const connection = await fetch("http://localhost:3000/videos");
  const convertedConnection = await connection.json();
  return convertedConnection;
}

// Function that creates a new video in the db.json
async function createVideo(titulo, descricao, url, imagem) {
  const connection = await fetch("http://localhost:3000/videos", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      titulo: titulo,
      descricao: `${descricao} mil visualizações`,
      url: url,
      imagem: imagem,
    }),
  });
  if (!connection.ok) {
    throw new Error("Não foi possível enviar o vídeo");
  }

  const convertedConnection = await connection.json();
  return convertedConnection;
}

async function searchVideo(searchWord) {
  const connection = await fetch(
    `http://localhost:3000/videos?q=${searchWord}`
  );
  const convertedConnection = await connection.json();
  return convertedConnection;
}

export const apiConnect = {
  videoList,
  createVideo,
  searchVideo,
};
