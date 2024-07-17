// Code to run the json server by the terminal
// npm init
// json-server --watch db.json

async function videoList() {
  const connection = await fetch("http://localhost:3000/videos");
  const convertedConnection = await connection.json();
  return convertedConnection;
}

export const apiConnect = {
	videoList
}
