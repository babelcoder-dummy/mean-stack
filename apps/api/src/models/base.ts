/* eslint-disable @typescript-eslint/no-unsafe-declaration-merging */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export interface BaseSchema extends Base {}
export class BaseSchema extends TimeStamps {}
