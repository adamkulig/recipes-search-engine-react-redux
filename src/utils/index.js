function* idGenerator() {
  let id = 1;
  while(true) {
    yield id++;
  }
}

const nextId = idGenerator();

export const getId = () => nextId.next().value;