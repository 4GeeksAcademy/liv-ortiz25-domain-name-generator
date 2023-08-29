/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function generateDomainName() {
  const pronoun = ["the", "our"];
  const adj = ["great", "big", "dazzling", "small"];
  const noun = ["jogger", "racoon", "book", "padawan"];
  const extensions = ["com", "net", "us", "io"];

  for (i = 0; i < pronoun.length; i++);
  {
    for (r = 0; r < adj.length; r++);
    {
      for (m = 0; m < noun.length; m++);
      {
        for (h = 0; h < extensions.length; h++);
        {
          console.log(pronoun[i] + adj[r] + noun[m] + extensions[h]);
        }
      }
    }
  }
};
