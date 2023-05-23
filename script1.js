function checkMovie() {
  const word = document.getElementById("text").value;
  console.log(word);
  const pattern = /\[Verse \d+\].+/;
  const matches = word.match(new RegExp(pattern, "g")) || [];
  console.log(matches);
  for (let i = 0; i < matches.length; i++) {
    const p = document.createElement("p");
    p.setAttribute("class", "result");
    p.textContent = matches[i];
    document.body.appendChild(p);
  }
}
