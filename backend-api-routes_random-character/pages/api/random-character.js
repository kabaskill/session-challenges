import Chance from "chance";

export default function handler(request, response) {
  const chance = new Chance();

  const character = {
    name: chance.name(),
    twitter: chance.twitter(),
    geo: chance.geohash(),
    score: chance.integer({ min: 0, max: 1000 }),
  };

  setTimeout(() => {
    response.status(200).json(character);
  }, 1000);
}
