const Koa = require('koa');

const app = new Koa();

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    console.log(err.stack)
    ctx.body = err.stack;
    ctx.status = err.status || 500;
  }
});

app.use(async ctx => {
  ctx.body = 'Hello World';
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Starting up server, PORT:', PORT)
});
