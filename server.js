const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");
const port = process.env.PORT || 3001;
const middlewares = jsonServer.defaults();

const app = jsonServer.create();
const router = jsonServer.router("db.json");

const rules = auth.rewriter({
  users: 600,
  toys: 666,
  donations: 664,
  purchases_historic: 660,
});

router.render = (req, res, next) => {
  if (req.path.startsWith("/users")) {
    const user = res.locals.data;

    // console.log(res.locals.data); //resposta da requisição//

    const toys = router.db.__wrapped__.toys;
    const purchases_historic = router.db.__wrapped__.purchases_historic;

    const toysMod = toys.filter((toy) => {
      return toy.userId == user.id;
    });
    const historic = purchases_historic.filter((historic) => {
      return historic.userId == user.id;
    });

    res.jsonp({
      ...res.locals.data,
      toy: toysMod,
      purchases_historic: historic,
    });
  } else {
    console.log({ ...res.locals.data });
    res.jsonp(res.locals.data);
  }
};
app.db = router.db;

app.use(cors());
app.use(rules);
app.use(auth);
app.use(middlewares);
app.use(router);
app.listen(port);

console.log("Server is running on port:", port);

/* A senha do Kenzinho é 123456 */
