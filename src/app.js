/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function generateDomainName() {
  //write your code here
  const pronoun = ["the", "our"];
  const adj = ["great", "big", "dazzling", "small"];
  const noun = ["jogger", "racoon", "book", "padawan"];
  const extensions = ["com", "net", "us", "io"];

  const aleatoryPronoun = pronoun[Math.floor(Math.random() * pronoun.length)];

  const aleatoryAdj = adj[Math.floor(Math.random() * adj.length)];

  const aleatoryNoun = noun[Math.floor(Math.random() * noun.length)];

  const aleatoryExtensions =
    extensions[Math.floor(Math.random() * extensions.length)];

  console.log(
    `${aleatoryPronoun}${aleatoryAdj}${aleatoryNoun}.${aleatoryExtensions}`
  );
};
