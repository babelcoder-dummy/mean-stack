import { instanceToPlain } from 'class-transformer';
import { RequestHandler } from 'express';

const responseTransformer: RequestHandler = (req, res, next) => {
  const oldJson = res.json;
  res.json = (body) => {
    if ('errors' in body) return oldJson.call(res, body);

    return oldJson.call(res, instanceToPlain(body, { strategy: 'excludeAll' }));
  };

  next();
};

export default responseTransformer;
