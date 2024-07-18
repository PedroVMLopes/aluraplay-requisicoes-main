const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.get("/search", (req, res) => {
  const query = req.query.q;
  const db = router.db.getState();

  const results = [];
  for (const key in db) {
    if (Array.isArray(db[key])) {
      db[key].forEach((item) => {
        for (const prop in item) {
          if (String(item[prop]).toLowerCase().includes(query.toLowerCase())) {
            results.push(item);
            break;
          }
        }
      });
    }
  }

  res.jsonp(results);
});

server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});
