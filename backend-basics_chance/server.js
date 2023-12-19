import { createServer } from "node:http";
import Chance from "chance";

const chance = new Chance();

export const server = createServer((request, response) => {
  if (request.url === "/") {
    response.statusCode = 200;
    response.end(
      `Hello, my name is ${chance.name()} and I am ${chance.age()} years old. I am a ${chance.profession()}.`
    );
    return;
  }

  response.statusCode = 404;
  response.end("Not found!");
});
