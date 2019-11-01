import { eventually } from "./eventually";

eventually(() => find("aaa"));

let count = 0;
const find = x => {
  console.log("find:" + x);
  if (count++ > 10) {
    console.log("find: true");
    return true;
  } else {
    console.log("find: throw error");
    throw new Error();
  }
};
