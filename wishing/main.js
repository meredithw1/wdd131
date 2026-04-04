let pity5 = 0;
let pity4 = 0;

const fiveStars = ["Diluc", "Keqing", "Mona", "Qiqi", "Jean"];
const fourStars = ["Fischl", "Xiangling", "Barbara", "Razor", "Sucrose"];
const threeStars = ["Cool Steel", "Debate Club", "Slingshot", "Sharpshooter's Oath"];

function getWish() {
  pity5++;
  pity4++;

  let rand = Math.random();

  if (pity5 >= 90 || rand < 0.006) {
    pity5 = 0;
    pity4 = 0;
    return {name: fiveStars[Math.floor(Math.random() * fiveStars.length)], rarity: 5};
  }

  if (pity4 >= 10 || rand < 0.051) {
    pity4 = 0;
    return {name: fourStars[Math.floor(Math.random() * fourStars.length)], rarity: 4};
  }

  return {name: threeStars[Math.floor(Math.random() * threeStars.length)], rarity: 3};
}
function wish(count) {
  let results = [];

  for (let i = 0; i < count; i++) {
    results.push(getWish());
  }

  displayResults(results);
}

function displayResults(results) {
  const resultDiv = document.getElementById("result");
  const historyDiv = document.getElementById("history");

  resultDiv.innerHTML = "";

  results.forEach(r => {
    let span = document.createElement("span");
    span.className = r.rarity === 5 ? "five-star" : r.rarity === 4 ? "four-star" : "three-star";
    span.innerText = `★${r.rarity} ${r.name} `;
    resultDiv.appendChild(span);

    let item = document.createElement("div");
    item.className = `wish-item ${span.className}`;
    item.innerText = `★${r.rarity} ${r.name}`;
    historyDiv.prepend(item);
  });
}