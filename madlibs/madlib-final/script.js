(function(){

    'use strict';
    console.log('reading js');

    const storyBox = document.querySelector("#story");    

    document.querySelector(".start").addEventListener("click", () => {
  const adj1 = document.querySelector(".adj1").value;
  const adj2 = document.querySelector(".adj2").value;
  const adj3 = document.querySelector(".adj3").value;
  const adj4 = document.querySelector(".adj4").value;
  const verb1 = document.querySelector(".verb1").value;
  const verb2 = document.querySelector(".verb2").value;
  const noun = document.querySelector(".noun").value;
  const food = document.querySelector(".food").value;
  const present = document.querySelector(".present").value;
  const adverb = document.querySelector(".adverb").value;

    if (!adj1 || !adj2 || !adj3 || !adj4 || !verb1 || !verb2 || !noun || !food || !present || !adverb) {
      alert("Please fill out all fields!");
      return;
    }

    const story = `Chiikawa is a(n) <span class="highlight">${adj1}</span>, <span class="highlight">${adj2}</span> creature. Their friends Hachiware and Usagi go on v${adj3}</span> adventures; <span class="highlight">${verb1}</span>, eating <span class="highlight">${adj4}</span> food, <span class="highlight">${verb2}</span> monsters. Chiikawa tends to feel anxious. Help make a wishlist with them:
1. Study for the <span class="highlight">${noun}</span> certification
2. Pass the <span class="highlight">${noun}</span> certification
3. Cook <span class="highlight">${food}</span>
4. Buy <span class="highlight">${present}</span> for friends
5. Order food <span class="highlight">${adverb}</span>`;

 storyBox.innerHTML = story;
    });

})();