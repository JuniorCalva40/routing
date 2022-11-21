const booksRouter = require('./books.router');
const authorsRouter = require('./authors.router');
const usersRouter = require('./usuarios.router');
const clientsRouter = require('./clients.router');


const routerApi = (app) =>{
    app.use('./books', booksRouter);
    app.use('./autores', authorsRouter);
    app.use('.usuarios', usersRouter);
    app.use('./clientes', clientsRouter);

}
module.exports = routerApi;