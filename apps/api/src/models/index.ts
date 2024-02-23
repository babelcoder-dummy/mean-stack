import { getModelForClass } from '@typegoose/typegoose';
import { LeaveSchema } from './leave';
import { ArticleSchema } from './article';

export const Leave = getModelForClass(LeaveSchema);
export const Article = getModelForClass(ArticleSchema);

export { default as LeaveStatus } from './leave-status';
