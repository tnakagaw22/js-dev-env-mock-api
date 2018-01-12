import fs from 'fs';
import chalk from 'chalk';
import faker from 'faker';

const numberOfItems = 40;
let mockListings = [];

for (var i = 0; i < numberOfItems; i++) { 
  mockListings.push({
    webId : faker.random.number({min:1000, max:9999}) + '-' + faker.commerce.productAdjective(),
    numBedrooms : faker.random.number(8),
    numBaths : faker.random.number(4),
    price : faker.commerce.price(2000, 9999999),
    description : faker.lorem.paragraphs(),
    availableDate : faker.date.recent()
  });
}

let mockData = {
  listings: mockListings
};

const json = JSON.stringify(mockData);

fs.writeFile("./api/data.json", json, function (err) {
  if (err) {
    return console.log(chalk.red(err));
  } else {
    console.log(chalk.green("Mock data generated."));
  }
});
