import { eventually } from "./eventually";

const result = eventually(() => find("aaa"), 20, 0.2);
result.then(x => console.log("main result:" + x));

// button = await waitFor($('aaaa'))

let count = 0;
const find = x => {
  console.log("find:" + x);
  if (count++ > 10) {
    console.log("find: true");
    return true;
  } else {
    console.log("find: throw error");
    throw new Error("find failed");
  }
};
