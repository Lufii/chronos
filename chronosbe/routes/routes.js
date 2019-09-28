const controllerRoutes = require('../controllers/routing.js');
module.exports = (app) =>{
  app.get('/posts', controllerRoutes.getPosts);

  app.post('/post/create', controllerRoutes.createPost);

  app.post('/post/delete', controllerRoutes.deletePost);

  app.post('/post/edit', controllerRoutes.editPost);
}
