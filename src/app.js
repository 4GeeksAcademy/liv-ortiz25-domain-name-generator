/* eslint-disable */
import "bootstrap";
import "./style.css";

const pronoun = ["the", "our", "my", "her"];
const adj = ["great", "big", "dazzling", "small"];
const noun = ["jogger", "racoon", "book", "padawan"];
const extensions = ["com", "net", "us", "io"];

for (let i in pronoun) {
  for (let j in adj) {
    for (let k in noun) {
      for (let l in extensions) {
        console.log(`${pronoun[i]}${adj[j]}${noun[k]}${extensions[l]}`);
      }
    }
  }
}
