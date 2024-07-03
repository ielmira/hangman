const myBtn = document.getElementById("myBtn");

const words = [
  "workshop",
  "paradox",
  "cucumber",
  "gold",
  "warm",
  "platform",
  "bell",
  "turkey",
  "cold",
  "behave",
  "shout",
  "suffering",
  "protest",
  "relative",
  "convince",
  "hell",
  "friend",
  "swim",
  "produce",
  "stable",
  "captain",
  "fax",
  "basket",
  "future",
  "honor",
  "development",
  "javascript",
  "national",
  "arrogant"
];

myBtn.addEventListener("click" , function(){
   const randomWord = words[Math.floor(Math.random()*words.length)];
   const underline = document.getElementById("underline");
   underline.innerHTML = "";
   for(i = 0 ; i < randomWord.length ; i++){
    const span = document.createElement("span");
    underline.appendChild(span);
   }
   console.log(randomWord);
    
})
