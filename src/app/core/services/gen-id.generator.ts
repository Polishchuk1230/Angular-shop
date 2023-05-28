export function* genID() {
  
    let id = 1;
    let nextId = 1;

    while (true) {
      yield [id, nextId] = [nextId, id + nextId];
    }

}