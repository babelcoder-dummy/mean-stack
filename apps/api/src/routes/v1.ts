import express from 'express';
import * as leavesController from '../controllers/leaves';
import * as articlesController from '../controllers/articles';
import * as adminArticlesController from '../controllers/admin/articles';

export const setup = (router: express.Router) => {
  router.post('/admin/articles', adminArticlesController.create);
  router.patch('/admin/articles/:id', adminArticlesController.update);
  router.delete('/admin/articles/:id', adminArticlesController.destroy);

  router.get('/leaves', leavesController.findAll);
  router.get('/leaves/:id', leavesController.findOne);
  router.post('/leaves', leavesController.create);
  router.patch('/leaves/:id', leavesController.update);
  router.delete('/leaves/:id', leavesController.destroy);

  router.get('/articles', articlesController.findAll);
  router.get('/articles/:id', articlesController.findOne);
};
