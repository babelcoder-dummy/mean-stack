import express from 'express';
import * as controller from '../controllers/leaves';

export const setup = (router: express.Router) => {
  router.get('/leaves', controller.findAll);
  router.get('/leaves/:id', controller.findOne);
  router.delete('/leaves/:id', controller.destroy);
};
