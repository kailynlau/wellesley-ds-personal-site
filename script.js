function showComingSoon(event) {
  /* Cobbled together from my basic knowledge of JavaScript and online sources */
  event.preventDefault(); /* Doesn't jump back to top of page */
  document.getElementById("coming-soon-popup").style.display = "block";
  setTimeout(() => {
    document.getElementById("coming-soon-popup").style.display = "none";
  }, 2000);
}

function showDish(dish) {
  const dishData = {
    defaultDish: {
      img: "",
      text: "Hover over a dish to see details!",
    },
    "xiao-long-bao": {
      img: "images/xiao-long-bao.jpg" /* https://www.andy-cooks.com/blogs/recipes/pork-and-crab-soup-dumplings */,
      text: "#BiteSized #SteamedPerfection",
    },
    jook: {
      img: "images/jook.jpg" /* https://www.madewithlau.com/recipes/chicken-congee */,
      text: "Ingredients: Rice, Water, Ginger, Chicken",
    },
    "phoenix-talons": {
      img: "images/phoenix-talons.jpg" /* https://go-yumcha.blogspot.com/2009/03/chicken-feet-aka-phoenix-claws-matter.html */,
      text: "#SoySauceMagic #DontJudge",
    },
    "hoisin-duck": {
      img: "images/hoisin-duck.jpg" /* https://omnivorescookbook.com/crispy-chinese-duck-breast/ */,
      text: "#NothingBetter",
    },
    fillerText: {
      img: "",
      text: "Check back later for more recs!",
    },
  };

  document.getElementById("dish-image").src = dishData[dish].img;
  document.getElementById("dish-text").innerText = dishData[dish].text;
}

function pickDrama() {
  const dramas = [
    "My Name",
    "Extraordinary Attorney Woo",
    "Tale of the Nine-Tailed",
    "Do You Like Brahms?",
    "A Shop for Killers",
    "Midnight Photo Studio",
    "A Journey to Love",
    "The Untamed",
    "Word of Honor",
    "Fangs of Fortune",
    "Alice in Borderland",
    "Fermat no Ryori",
  ];

  const randomDrama = dramas[Math.floor(Math.random() * dramas.length)];

  document.getElementById("drama-pick").innerText =
    `Try watching: ${randomDrama}!`;
}