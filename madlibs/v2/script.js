(function(){

    'use strict';
    console.log('reading js');

    document.querySelector(".start").addEventListener("click", () => {
  const adj1 = document.querySelector(".adj1").value;
  const adj2 = document.querySelector(".adj2").value;
  const adj3 = document.querySelector(".adj3").value;
  const adj4 = document.querySelector(".adj4").value;
  const verb1 = document.querySelector(".verb1").value;
  const verb2 = document.querySelector(".verb2").value;
  const verb3 = document.querySelector(".verb3").value;
  const noun = document.querySelector(".noun").value;
  const food = document.querySelector(".food").value;
  const present = document.querySelector(".present").value;
  const adverb = document.querySelector(".adverb").value;

const story = `Chiikawa is a(n) ${adj1}, ${adj2} creature. Their friends Hachiware and Usagi go on ${adj3} adventures; ${verb1}, ${verb2} delicious food, ${verb3} monsters. 
They try to enjoy their ${adj4} life. Chiikawa tends to feel anxious. Help make a wishlist with them:
1. Study for the ${noun} certification
2. Pass the ${noun} certification
3. Cook ${food}
4. Buy ${present} for friends
5. Order food ${adverb}`;

  document.querySelector("#story").innerText = story;
});
    

})()