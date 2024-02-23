import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { RequestHandler } from 'express';
import bodyValidator from '../../middleware/body-validator';
import { CreateArticleFormDto } from '../../dto/articles/CreateArticleFormDto';
import * as service from '../../services/admin/articles';
import { ArticleResponseDto } from '../../dto/articles/ArticleResponseDto';
import { EditArticleFormDto } from '../../dto/articles/EditArticleFormDto';

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      const dst = path.join(__dirname, 'uploads', 'articles');
      fs.mkdirSync(dst, { recursive: true });
      callback(null, dst);
    },
    filename(req, file, callback) {
      const [, extension] = file.mimetype.split('/');
      callback(null, `${crypto.randomUUID()}.${extension}`);
    },
  }),
});

export const create: RequestHandler[] = [
  upload.single('image'),
  bodyValidator(CreateArticleFormDto),
  async (req, res) => {
    const payload: CreateArticleFormDto & { image: string } = req.body;

    if (!req.file) {
      return res
        .status(400)
        .json({ errors: { image: 'image is a required field' } });
    }

    payload.image = `uploads/articles/${req.file.filename}`;

    const article = await service.create(payload);
    res.status(201).json(new ArticleResponseDto(article));
  },
];

export const update: RequestHandler[] = [
  upload.single('image'),
  bodyValidator(CreateArticleFormDto),
  async (req, res) => {
    const payload: EditArticleFormDto & { image: string } = req.body;

    payload.image = `uploads/articles/${req.file.filename}`;

    const article = await service.update(req.params.id, payload);
    res.json(new ArticleResponseDto(article));
  },
];

export const destroy: RequestHandler = async (req, res) => {
  await service.destroy(req.params.id);
  res.status(204).send();
};
