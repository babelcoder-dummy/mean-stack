export interface ArticleItem {
  id: number;
  title: string;
  slug: string;
  content: string;
  image: string;
}

let articleList: ArticleItem[] = [
  {
    id: 1,
    title: 'Title#1',
    slug: 'title-1',
    content: 'Content#1',
    image: 'https://picsum.photos/200/300?1',
  },
  {
    id: 2,
    title: 'Title#2',
    slug: 'title-2',
    content: 'Content#2',
    image: 'https://picsum.photos/200/300?2',
  },
  {
    id: 3,
    title: 'Title#3',
    slug: 'title-3',
    content: 'Content#3',
    image: 'https://picsum.photos/200/300?3',
  },
  {
    id: 4,
    title: 'Title#4',
    slug: 'title-4',
    content: 'Content#4',
    image: 'https://picsum.photos/200/300?4',
  },
  {
    id: 5,
    title: 'Title#5',
    slug: 'title-5',
    content: 'Content#5',
    image: 'https://picsum.photos/200/300?5',
  },
];

export const Article = {
  find() {
    return articleList;
  },

  findById(id: number) {
    return articleList.find((a) => a.id === id);
  },

  findBySlug(slug: string) {
    return articleList.find((a) => a.slug === slug);
  },

  create(article: ArticleItem) {
    const newItem = {
      id: articleList.length + 1,
      ...article,
    };

    articleList.push(newItem);

    return newItem;
  },

  findByIdAndUpdate(id: number, article: ArticleItem) {
    const index = articleList.findIndex((a) => a.id === id);

    articleList[index] = { ...articleList[index], ...article };
    return articleList[index];
  },

  deleteOne(id: number) {
    articleList = articleList.filter((a) => a.id !== id);
  },
};
