const faker = require('faker');

const Question = {
    id: faker.random.number(),
    product_id: faker.random.number(),
    body: faker.lorem.sentence(),
    date_written: faker.date.past(),
    asker_name: faker.name.firstName(),
    asker_email: faker.internet.email(),
    reported: faker.random.boolean(),
    helpful: raker.random.boolean(),
}

const Answer = {
    "answer_id": 8,
      "body": "What a great question!",
      "date": "2018-01-04T00:00:00.000Z",
      "answerer_name": "metslover",
      "helpfulness": 8,
      "photos": [],
    answer_id:,
    body: faker.random.number(),
    data:faker.random.date.past(),
    answerer_name: faker.name.firstName(),
    helpfulness: faker.random.boolean(),
    photos: faker.image.fashion(),
}

module.exports = {
    Question,
    Answer
};