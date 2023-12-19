import Chance from "chance";

export default function handler(request, response) {
  const chance = new Chance();

  const character = {
    name: chance.name(),
    twitter: chance.twitter(),
    geo: chance.geohash(),
  };

  response.status(200).json(character);
}
