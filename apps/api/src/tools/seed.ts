import * as dotenv from 'dotenv';
import { faker } from '@faker-js/faker';
import { connect } from '../config/db';
import { slugify } from '../helpers/slugify';
import { Article, Leave, LeaveStatus } from '../models';

async function seed() {
  dotenv.config();
  await connect();

  // Create Articles
  const numOfArticles = 100;

  for (let i = 0; i < numOfArticles; i++) {
    const title = faker.lorem.sentence();
    const slug = slugify(title);

    await Article.findOneAndUpdate(
      { slug },
      {
        title,
        slug,
        content: faker.lorem.paragraph({ min: 3, max: 10 }),
        image: faker.image.url(),
      },
      { new: true, upsert: true },
    );
  }

  // Create Leaves
  const numOfLeaves = 100;

  for (let i = 0; i < numOfLeaves; i++) {
    const status: LeaveStatus = faker.helpers.arrayElement([
      LeaveStatus.PENDING,
      LeaveStatus.APPROVED,
      LeaveStatus.REJECTED,
    ]);
    const leaveDate = faker.date.future().toISOString();

    await Leave.findOneAndUpdate(
      { leaveDate },
      {
        leaveDate,
        status,
        reason: faker.lorem.paragraph(),
        rejectionReason:
          status === LeaveStatus.REJECTED ? faker.lorem.paragraph() : undefined,
      },
      { new: true, upsert: true },
    );
  }
}

seed();
