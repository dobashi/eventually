import { eventually, eventuallySync } from "../main/eventually";

const sync = eventuallySync(() => true);
console.log(sync);
sync.then(x => console.log(`sync result: ${x}`));

const result = eventually(() => find("aaa"), 20, 0.2);
result.then(x => console.log("main result:" + x));

let count = 0;
const find = async (x: string) => {
  console.log(`find: called ${count++} times`);
  if (count > 10) {
    console.log("find: expect only 1 call");
    return true;
  } else {
    console.log("find: expected throw");
    throw new Error("find failed");
  }
};
